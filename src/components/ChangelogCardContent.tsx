/*
 * Copyright 2023 The Backstage Authors
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
import React from 'react';
import useAsync from 'react-use/lib/useAsync';
import {
  CircularProgress,
} from '@material-ui/core';
import { useEntity } from '@backstage/plugin-catalog-react';
import { AlertDisplay } from '@backstage/core-components';
import { ChangelogProps } from '../util/types';
import { defaultParser } from '../util';
import { ChangelogTable } from './ChangelogTable';
import { useApi } from '@backstage/core-plugin-api';
import { changelogApiRef } from '../api';

export const ChangelogCardContent = ({ parser} : {parser?: any}) => {

    const changelogApi = useApi(changelogApiRef);

    const { entity } = useEntity();
    const { value, loading, error } = useAsync(async () => {
        return changelogApi.readChangelog(entity)
    })

    if (loading) {
      return <CircularProgress/>
    }
    if (error) {
      return <AlertDisplay/>
    }

    if (value) {
      const changelogInfos: ChangelogProps[] = parser ? parser(value) : defaultParser(value)
      return (
        <ChangelogTable changelogInfos={changelogInfos}/>
      );
    }
    return <></>
}