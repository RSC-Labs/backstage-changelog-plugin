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
import { ChangelogProps } from "./types";
import { StatusError, StatusOK, StatusPending, StatusRunning, StatusWarning } from '@backstage/core-components';

enum EChangelogAction {
    Added = 'Added',
    Fixed = 'Fixed',
    Changed = 'Changed',
    Removed = 'Removed',
    Deprecated = 'Deprecated',
    Security = 'Security'
}

// Default parser follows https://keepachangelog.com/
export function defaultParser(content: string) : ChangelogProps[] {
    const splittedLines = content.split(/\r?\n/);

    let changelogIndex = -1;

    let action: string | undefined;
    let ActionIcon: any;
    let actionContent: string | undefined;
    let versionContent: string | undefined;
    let actionCounter: number = 0;


    const changelogParsed = splittedLines.reduce((resultArray: ChangelogProps[], item: string, currentIndex: number) => {
      const isItLastLine = currentIndex == splittedLines.length - 1;
      if (item.startsWith('## ') || isItLastLine) {
        if (action && actionContent && versionContent) {
          resultArray[changelogIndex].actions.push(
            {
              name: action,
              content: actionContent,
              counter: actionCounter,
              icon: ActionIcon
            }
          )
          resultArray[changelogIndex].versionContent = versionContent;
        }

        action = undefined;
        actionCounter = 0;
        actionContent = undefined;
        versionContent = undefined;

        changelogIndex++;

        if (!isItLastLine) {
          resultArray[changelogIndex] = {
            versionNumber: item,
            actions: [],
            versionContent: undefined
          }
        }
      };
      if (item.startsWith('### ')) {
        if (action && actionContent) {
          resultArray[changelogIndex].actions.push(
            {
              name: action,
              content: actionContent,
              counter: actionCounter,
              icon: ActionIcon
            }
          )
          action = undefined;
          actionContent = undefined;
          actionCounter = 0;
        }

        if (item.includes(`### ${EChangelogAction.Added}`)) {
          action = EChangelogAction.Added;
          ActionIcon = () =>  <StatusOK/>
        }
        if (item.includes(`### ${EChangelogAction.Fixed}`)) {
          action = EChangelogAction.Fixed;
          ActionIcon = () =>  <StatusRunning/>
        }
        if (item.includes(`### ${EChangelogAction.Changed}`)) {
          action = EChangelogAction.Changed;
          ActionIcon = () =>  <StatusPending/>
        }
        if (item.includes(`### ${EChangelogAction.Removed}`)) {
          action = EChangelogAction.Removed;
          ActionIcon = () =>  <StatusError/>
        }
        if (item.includes(`### ${EChangelogAction.Deprecated}`)) {
          action = EChangelogAction.Deprecated;
          ActionIcon = () =>  <StatusWarning/>
        }
        if (item.includes(`### ${EChangelogAction.Security}`)) {
          action = EChangelogAction.Deprecated;
          ActionIcon = () =>  <StatusPending/>
        }
      }
      if (item.startsWith('-')) {
        actionCounter++;
        if (actionContent) {
          actionContent += `${item}\n`;
        } else {
          actionContent = `${item}\n`;
        }
      }
      if (versionContent) {
        versionContent += `${item}\n`;
      } else {
        versionContent = `${item}\n`;
      }

      return resultArray;
    }, [])

    return changelogParsed;
  }