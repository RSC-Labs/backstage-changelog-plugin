export type ChangelogAction = {
    name: string,
    counter: number,
    content: string,
    icon?: any
}

export type ChangelogProps = {
    versionNumber: string,
    actions: ChangelogAction[],
    versionContent: string | undefined
}