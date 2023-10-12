/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { useEffect, useState } from 'react';
import {
    ANNOTATION_SOURCE_LOCATION,
    getEntitySourceLocation
  } from '@backstage/catalog-model';
import {
  Button,
    Card,
    CardContent,
    CardHeader,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
  } from '@material-ui/core';
  import {
    useEntity,
  } from '@backstage/plugin-catalog-react';
import { InfoCard, LinkButton, StructuredMetadataTable, Table, TableColumn } from '@backstage/core-components';
import fs from 'fs-extra'
import path from 'path'
import changelog from './CHANGELOG.md'
import Markdown from 'react-markdown';
import { MarkdownContent } from '@backstage/core-components';
import MarkdownIt from "markdown-it";
import CloseIcon from '@material-ui/icons/Close';
  
  /**
   * Props for {@link EntityChangeLogCard}.
   *
   * @public
   */
  export interface ChangeLogCardProps {
  }

  enum ChangeLogAction {
    Added = 'Added',
    Fixed = 'Fixed',
    Changed = 'Changed',
    Removed = 'Removed',
    Deprecated = 'Deprecated',
    Security = 'Security'
  }

  const generateTableData: (changeLogInfos: ChangeLogInfo[], rows: number) => Array<{}> = (changeLogInfos, rows = 10) => {
    const data: Array<{}> = [];
    for (let i = 0; i < changeLogInfos.length; i++) {

    }
    while (changeLogInfos.length <= rows) {
      data.push({
        version: ``,
        actions: changeLogInfos
      });
    }
  
    return data;
  };

  const ChangeLogActionsCounters = ({changelogInfo} : {changelogInfo: ChangeLogInfo}) => {
    return (
      <>
        {changelogInfo.added && changelogInfo.added.length && <Typography>asdasd</Typography>}
        {changelogInfo.changed && changelogInfo.changed.length && <Typography>{changelogInfo.changed.length}</Typography>}
        {changelogInfo.depracated && changelogInfo.depracated.length && <Typography>{changelogInfo.depracated.length}</Typography>}
        {changelogInfo.removed && changelogInfo.removed.length && <Typography>{changelogInfo.removed.length}</Typography>}
        {changelogInfo.fixed && changelogInfo.fixed.length && <Typography>{changelogInfo.fixed.length}</Typography>}
        {changelogInfo.security && changelogInfo.security.length && <Typography>{changelogInfo.security.length}</Typography>}
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
      return (
        <>
          <MarkdownContent content={contentMd}/>
        </>
      );
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
           <DialogTitle id="dialog-title">
             Dialog Box Title
             <IconButton
               aria-label="close"
               onClick={closeDialog}
             >
               <CloseIcon />
             </IconButton>
           </DialogTitle>
           <DialogContent>{dialogContent()}</DialogContent>
         </Dialog>
       </>
     );
   };
  
  const MyTable = ({changelogInfos, contentMd} : {changelogInfos: ChangeLogInfo[], contentMd: string}) => {
      const columns: TableColumn[] = [
        {
          title: 'Version',
          field: 'version',
          highlight: true,
          render: (changelogInfo: any) => {
            return (
              <MarkdownContent content={changelogInfo.version}/>
            )
          }
        },
        {
          title: 'Actions',
          field: 'actions',
          render: (changelogInfo: any) => {
            return (
              <ChangeLogActionsCounters changelogInfo={changelogInfo}/>
            )
          }
        },
        {
          title: 'Changes',
          field: 'changes',
          render: () => {
            return (
              <SeeChangesButton contentMd={contentMd}/>
            )
          }
        },
      ];

      const data = changelogInfos.map(changelogInfo => {
        return ({
          version: changelogInfo.version,
          actions: changelogInfo
        })
      })
    
      return (
          <Table
            options={{ paging: false }}
            data={data}
            columns={columns}
            title="ChangeLog"
          />
      );
    };

  type ChangeLogInfo = {
    version: string,
    added: string[] 
    fixed: string[] 
    changed: string[]
    removed: string[]
    depracated: string[]
    security: string[]
  }

  export function ChangeLogCard(props: ChangeLogCardProps) {

    let [ content, setContent] = useState({md: ""});

    // https://keepachangelog.com/en/1.1.0/ - format of changelog which can be followed
    // backstage creates separated .md files for every version (take it into account)
    // Pagination: https://www.npmjs.com/package/react-paginate

    // const { value, loading, error } = useAsync(async () => {
    //   const result = 
    //   return result;
    // }, [])

    useEffect(()=> {
        fetch(changelog)
            .then((res) => res.text())
            .then((md) => {
                setContent({ md })
            })
    }, [])

    let action: ChangeLogAction | undefined;
    let changeLogInfos: ChangeLogInfo[] = [];
    if (content.md) {
      let splittedLines = content.md.split(/\r?\n/);
      let chunkIndex = 0;
      changeLogInfos = splittedLines.reduce((resultArray: ChangeLogInfo[], item: string) => {
        if (item.startsWith('## ')) {
          chunkIndex++;
          action = undefined;
        };
        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = {
            version: item,
            added: [],
            fixed: [],
            changed: [],
            removed: [],
            depracated: [],
            security: [],
          }
        }
        if (item.includes(`### ${ChangeLogAction.Added}`)) action = ChangeLogAction.Added;
        if (item.includes(`### ${ChangeLogAction.Fixed}`)) action = ChangeLogAction.Fixed;
        if (item.includes(`### ${ChangeLogAction.Changed}`)) action = ChangeLogAction.Changed;
        if (item.includes(`### ${ChangeLogAction.Removed}`)) action = ChangeLogAction.Removed;
        if (item.includes(`### ${ChangeLogAction.Deprecated}`)) action = ChangeLogAction.Deprecated;
        if (item.includes(`### ${ChangeLogAction.Security}`)) action = ChangeLogAction.Security;
        
        if (action) {
          if (action === ChangeLogAction.Added) resultArray[chunkIndex].added.push(item)
          if (action === ChangeLogAction.Fixed) resultArray[chunkIndex].fixed.push(item)
          if (action === ChangeLogAction.Changed) resultArray[chunkIndex].changed.push(item)
          if (action === ChangeLogAction.Removed) resultArray[chunkIndex].removed.push(item)
          if (action === ChangeLogAction.Deprecated) resultArray[chunkIndex].depracated.push(item)
          if (action === ChangeLogAction.Security) resultArray[chunkIndex].security.push(item)
        }
        return resultArray;
      }, [])
    }

    return (
      <MyTable changelogInfos={changeLogInfos} contentMd={content.md}></MyTable>
    );
  }