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

import { Entity, ANNOTATION_SOURCE_LOCATION } from '@backstage/catalog-model';

/** @public */
export const CHANGELOG_ANNOTATION_REF = 'changelog-file-ref';
/** @public */
export const CHANGELOG_ANNOTATION_NAME = 'changelog-name';

/** @public */
export const isChangelogAnnotationConfigurationOk = (entity: Entity) : boolean => {
  if (Boolean(entity.metadata.annotations?.[CHANGELOG_ANNOTATION_REF])) {
    return true;
  }
  if (Boolean(entity.metadata.annotations?.[CHANGELOG_ANNOTATION_NAME]) && Boolean(entity.metadata.annotations?.[ANNOTATION_SOURCE_LOCATION])) {
    return true;
  }
  if (Boolean(entity.metadata.annotations?.[ANNOTATION_SOURCE_LOCATION])) {
    return true;
  }
  return false;
}

/** @public */
export const getInfoAboutChangelogAnnotationConfiguration = (entity: Entity) : string => {

  if (Boolean(entity.metadata.annotations?.[CHANGELOG_ANNOTATION_NAME]) && !Boolean(entity.metadata.annotations?.[ANNOTATION_SOURCE_LOCATION])) {
    return `Annotation "${CHANGELOG_ANNOTATION_NAME}" needs to be set together with "${ANNOTATION_SOURCE_LOCATION}" annotation`;
  }

  if (!Boolean(entity.metadata.annotations?.[CHANGELOG_ANNOTATION_REF]) && !Boolean(entity.metadata.annotations?.[ANNOTATION_SOURCE_LOCATION])) {
    return `Annotations are missing - "${CHANGELOG_ANNOTATION_REF}" or "${ANNOTATION_SOURCE_LOCATION}" or "${CHANGELOG_ANNOTATION_NAME}" with "${ANNOTATION_SOURCE_LOCATION}"`;
  }
  return 'Annotations are ok';
}

