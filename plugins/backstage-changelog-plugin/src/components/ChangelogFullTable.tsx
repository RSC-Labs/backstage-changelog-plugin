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

import React from 'react';
import { Table, TableColumn } from '@backstage/core-components';
import { MarkdownContent } from '@backstage/core-components';
import { ChangelogAction, ChangelogProps } from '../util/types';

const generateActionColumns = (changelogInfos: ChangelogProps[]) => {
    const actionColumns: TableColumn[] = [];
    if (changelogInfos.length) {
        for (let j = 0; j < changelogInfos.length; j++) {
          for (let i = 0; i < changelogInfos[j].actions.length; i++) {
            if (!actionColumns.some(actionColumn => actionColumn.title === changelogInfos[j].actions[i].name)) {
              actionColumns.push(
                {
                    title: changelogInfos[j].actions[i].name,
                    render: (changelogInfo: any) => {
                        const columnAction: ChangelogAction | undefined = changelogInfo.actions.find((action: { name: string; }) => action.name === changelogInfos[j].actions[i].name);
                        return (
                            <>
                                {columnAction !== undefined && <MarkdownContent content={columnAction.content}/>}
                            </>
                        ) 
                    },
                    customFilterAndSearch(filter: string, rowData: any, _) {
                      if (rowData.actions.length) {
                        return (rowData.actions.find((action: { content: string; }) => action.content.toLowerCase().includes(filter.toLowerCase())) !== undefined);
                      }
                      return false;
                    },
                }
              )
            }
          }
        }
    }
    return actionColumns;
    
}

export const ChangelogFullTable = ({changelogInfos} : {changelogInfos: ChangelogProps[]}) => {
    const actionColumns: TableColumn[] = generateActionColumns(changelogInfos);
    const columns: TableColumn[] = [
      {
        title: 'Version',
        highlight: true,
        render: (changelogInfo: any) => (
          <MarkdownContent content={changelogInfo.versionNumber}/>
        )
      },
        ...actionColumns
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