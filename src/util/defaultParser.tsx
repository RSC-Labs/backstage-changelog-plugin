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
    let splittedLines = content.split(/\r?\n/);

    let changelogIndex = -1;

    let action: string | undefined;
    let ActionIcon: any;
    let actionContent: string | undefined;
    let versionContent: string | undefined;
    let actionCounter: number = 0;


    const changelogParsed = splittedLines.reduce((resultArray: ChangelogProps[], item: string) => {
      if (item.startsWith('## ')) {

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
        actionContent = undefined;
        versionContent = undefined;

        changelogIndex++;

        resultArray[changelogIndex] = {
          versionNumber: item,
          actions: [],
          versionContent: undefined
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
          ActionIcon = () =>  <StatusOK></StatusOK>
        }
        if (item.includes(`### ${EChangelogAction.Fixed}`)) {
          action = EChangelogAction.Fixed;
          ActionIcon = () =>  <StatusRunning></StatusRunning>
        }
        if (item.includes(`### ${EChangelogAction.Changed}`)) {
          action = EChangelogAction.Changed;
          ActionIcon = () =>  <StatusPending></StatusPending>
        }
        if (item.includes(`### ${EChangelogAction.Removed}`)) {
          action = EChangelogAction.Removed;
          ActionIcon = () =>  <StatusError></StatusError>
        }
        if (item.includes(`### ${EChangelogAction.Deprecated}`)) {
          action = EChangelogAction.Deprecated;
          ActionIcon = () =>  <StatusWarning></StatusWarning>
        }
        if (item.includes(`### ${EChangelogAction.Security}`)) {
          action = EChangelogAction.Deprecated;
          ActionIcon = () =>  <StatusPending></StatusPending>
        }
      }
      if (item.startsWith('-')) {
        actionCounter++;
      }
      if (actionContent) {
        actionContent += (item + '\n')
      } else actionContent = item + '\n';
      if (versionContent) {
        versionContent += (item + '\n')
      } else versionContent = item + '\n';

      return resultArray;
    }, [])

    return changelogParsed;
  }