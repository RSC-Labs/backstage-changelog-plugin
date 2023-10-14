/*
 * Copyright 2023 RSC-Labs, https://rsoftcon.com/
 *
 * Licensed under the Mozilla Public License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.mozilla.org/en-US/MPL/2.0/
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  Grid,
} from '@material-ui/core';
import { Table, TableColumn } from '@backstage/core-components';
import { MarkdownContent } from '@backstage/core-components';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ChangelogAction, ChangelogProps } from '../util/types';

const ActionCounter = ({actionName, counter, Icon} : {actionName: string, counter: number, Icon?: OverridableComponent<any>}) => {
  return (
    <Grid container alignItems='center'>
      {Icon && <Grid item>
        <Icon/>
      </Grid>
      }
      <Grid item>
        {counter} {actionName}
      </Grid>
    </Grid>
  );
}

const ChangelogActionsCounters = ({changelogActions} : {changelogActions: ChangelogAction[]}) => {
  return (
    <>
    {changelogActions.map(changelogAction => {
        if (changelogAction.counter) {
          return <ActionCounter actionName={changelogAction.name} counter={changelogAction.counter} key={changelogAction.name} Icon={changelogAction.icon}/>
        }
        return null;
    })}
    </>
  )
}

const SeeChangesButton = ({contentMd} : {contentMd: string}) => {
  const [open, setOpen] = useState(false);
  
  const openDialog = () => {
    setOpen(true);
  };
  
  const closeDialog = () => {
    setOpen(false);
  };
  
  const dialogContent = () => {
    return <MarkdownContent content={contentMd}/>;
  };
  
  return (
    <>
      <Button color="primary" variant="contained" onClick={openDialog}>
        See changes
      </Button>
      <Dialog
        open={open}
        onClose={closeDialog}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <DialogContent>{dialogContent()}</DialogContent>
        </Dialog>
      </>
    );
};


export const ChangelogSmallTable = ({changelogInfos} : {changelogInfos: ChangelogProps[]}) => {
    const columns: TableColumn[] = [
      {
        title: 'Version',
        highlight: true,
        render: (changelogInfo: any) => (
          <MarkdownContent content={changelogInfo.versionNumber}/>
        )
      },
      {
        title: 'Actions',
        render: (changelogInfo: any) => (
          <ChangelogActionsCounters changelogActions={changelogInfo.actions}/>
        ),
        customFilterAndSearch: (filter: string, rowData: any, _) => {
          if (rowData.actions.length) {
            return (rowData.actions.find((action: { name: string; }) => action.name.toLowerCase().includes(filter.toLowerCase())) !== undefined);
          }
          return false;
        },
      },
      {
        title: 'Changes',
        render: (changelogInfo: any) => {
          return (
            <>
            {changelogInfo.versionContent && <SeeChangesButton contentMd={changelogInfo.versionContent}/>}
            </>
          )
        }
      },
    ];

    return (
        <Table
          options={{ 
            pageSize: 5,
          }}
          data={changelogInfos}
          columns={columns}
          title="Changelog"
        />
    );
};