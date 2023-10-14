/// <reference types="react" />
import * as react from 'react';
import { Entity } from '@backstage/catalog-model';

/** @public */
declare const CHANGELOG_ANNOTATION_REF = "changelog-file-ref";
/** @public */
declare const CHANGELOG_ANNOTATION_NAME = "changelog-name";
/** @public */
declare const isChangelogAnnotationConfigurationOk: (entity: Entity) => boolean;
/** @public */
declare const getInfoAboutChangelogAnnotationConfiguration: (entity: Entity) => string;

/** @public */
type ChangelogAction = {
    name: string;
    counter: number;
    content: string;
    icon?: any;
};
/** @public */
type ChangelogProps = {
    versionNumber: string;
    actions: ChangelogAction[];
    versionContent: string | undefined;
};
/**
 * Props for {@link EntityChangelogCard}.
 * Props for {@link EntityChangelogContent}
 * @public
 */
interface EntityChangelogProps {
    parser?(content: string): ChangelogProps[];
}

/** @public */
declare const EntityChangelogCard: (props: EntityChangelogProps) => react.JSX.Element;
/** @public */
declare const EntityChangelogContent: (props: EntityChangelogProps) => react.JSX.Element;

export { CHANGELOG_ANNOTATION_NAME, CHANGELOG_ANNOTATION_REF, ChangelogAction, ChangelogProps, EntityChangelogCard, EntityChangelogContent, EntityChangelogProps, getInfoAboutChangelogAnnotationConfiguration, isChangelogAnnotationConfigurationOk };
