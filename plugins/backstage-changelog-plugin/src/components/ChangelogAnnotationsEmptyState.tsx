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
import { Box, Typography } from '@material-ui/core';
import { CodeSnippet, EmptyState, LinkButton } from '@backstage/core-components';
import { CHANGELOG_ANNOTATION_NAME, CHANGELOG_ANNOTATION_REF } from '../util';
import { ANNOTATION_SOURCE_LOCATION } from '@backstage/catalog-model';

const missingSourceLocation = 
`
  annotations:
    ${ANNOTATION_SOURCE_LOCATION}: "file:/path-to-directory/"
`
const missingSourceLocationAndName = 
`
  annotations:
    ${ANNOTATION_SOURCE_LOCATION}: "file:/path-to-directory/"
    ${CHANGELOG_ANNOTATION_NAME}: "CHANGELOG.md"
`
const missingChangelogFileRef = 
`
  annotations:
    ${CHANGELOG_ANNOTATION_REF}: "url:https://github.com/RSC-Labs/backstage-changelog-plugin/tree/main/examples/CHANGELOG.md"
`

export const ChangelogAnnotationsEmptyState = () => {
    return (
        <EmptyState 
            missing="field"
            title='Changelog plugin'
            description='Missing Annotations'
            action={
            <>
                <Typography variant="body1">
                You need to properly configure your annotations.
                One of below configuration is needed:
                </Typography>
                <Box>
                <CodeSnippet
                    text={missingSourceLocation}
                    language="yaml"
                    showLineNumbers
                    customStyle={{ background: 'inherit', fontSize: '115%' }}
                />
                <CodeSnippet
                    text={missingSourceLocationAndName}
                    language="yaml"
                    showLineNumbers
                    customStyle={{ background: 'inherit', fontSize: '115%' }}
                />
                <CodeSnippet
                    text={missingChangelogFileRef}
                    language="yaml"
                    showLineNumbers
                    customStyle={{ background: 'inherit', fontSize: '115%' }}
                />
                </Box>
                <LinkButton color="primary" to='https://github.com/RSC-Labs/backstage-changelog-plugin#backend-plugin'>
                Read more
                </LinkButton>
            </>
            }
        />
    );
}