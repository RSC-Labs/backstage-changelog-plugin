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
import useAsync from 'react-use/lib/useAsync';
import { LinearProgress } from '@material-ui/core';
import { useEntity } from '@backstage/plugin-catalog-react';
import { EntityChangelogProps, ChangelogProps } from '../util/types';
import { defaultParser } from '../util';
import { useApi } from '@backstage/core-plugin-api';
import { changelogApiRef } from '../api';
import { Alert } from '@material-ui/lab';
import { ChangelogFullTable } from './ChangelogFullTable';
import { isChangelogAnnotationConfigurationOk } from '../util/constants';
import { ChangelogAnnotationsEmptyState } from './ChangelogAnnotationsEmptyState';

const ChangelogContentWithTable = (props: EntityChangelogProps) => {

  const changelogApi = useApi(changelogApiRef);

  const { entity } = useEntity();

  const { value, loading, error } = useAsync(async () => {
    return changelogApi.readChangelog(entity)
  })

  if (loading) {
    return <LinearProgress/>
  }
  if (error) {
    return <Alert severity='error'>{JSON.stringify(error)}</Alert>
  }

  if (value) {
    const changelogInfos: ChangelogProps[] = props.parser ? props.parser(value) : defaultParser(value)
    return (
      <ChangelogFullTable changelogInfos={changelogInfos}/>
    );
  }
  return <></>
}

export const ChangelogContent = (props: EntityChangelogProps) => {

    const { entity } = useEntity();

    if (!isChangelogAnnotationConfigurationOk(entity)) {
      return <ChangelogAnnotationsEmptyState/>;
    }
    return <ChangelogContentWithTable parser={props.parser}/>
}