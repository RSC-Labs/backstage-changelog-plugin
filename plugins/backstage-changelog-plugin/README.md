# @rsc-labs/changelog-plugin

Backstage Changelog Plugin is configurable and customizable plugin for viewing a changelog.
You can write your own parser or use default one, which follows [Keep the changelog](https://keepachangelog.com/) notation.

### What is Changelog, why and who needs it?
Description from [Keep the changelog](https://keepachangelog.com/).

A changelog is a file which contains a curated, chronologically ordered list of notable changes for each version of a project.
It is being created to make it easier for users and contributors to see precisely what notable changes have been made between each release (or version) of the project.
People need changelog. Whether consumers or developers, the end users of software are human beings who care about what's in the software. When the software changes, people want to know why and how.

# Getting started

If you haven't already, check out the [Backstage docs](https://backstage.io/docs/getting-started/) and create a Backstage application with
```
npx @backstage/create-app
```

Then, you will need to install and configure the changelog plugins for the frontend and the backend.
Backend plugin installation can be found here: [Backend plugin](https://github.com/RSC-Labs/backstage-changelog-plugin/tree/main/plugins/backstage-changelog-plugin-backend)

## Frontend plugin

Install:
```bash
cd packages/app
yarn add @rsc-labs/backstage-changelog-plugin
```

You have two options how you can use Changelog functionality.

### Card in Overview page:

Add the card to `packages/app/src/components/catalog/EntityPage.tsx`:
```jsx
// import:
import { EntityChangelogCard } from '@rsc-labs/backstage-changelog-plugin';

// use it in entity view
const overviewContent = (
  <Grid container
  ...
    <Grid item md={6} xs={12}>
      <EntityChangelogCard />
    </Grid>
  </Grid>
)
```

<img src='https://raw.githubusercontent.com/RSC-Labs/backstage-changelog-plugin/main/docs/changelog_entity_card.png' alt='Changelog card screenshot'>

### Table in separated tab

Add content to `packages/app/src/components/catalog/EntityPage.tsx`:
```jsx
// import:
import { EntityChangelogContent } from '@rsc-labs/backstage-changelog-plugin';

const serviceEntityPage = (
  <EntityLayout
  ...
    <EntityLayout.Route path="/changelog" title="Changelog">
      <EntityChangelogContent/>
    </EntityLayout.Route>
  </Grid>
)
```

<img src='https://raw.githubusercontent.com/RSC-Labs/backstage-changelog-plugin/main/docs/changelog_entity_content.png' alt='Changelog content screenshot'>

### Frontend configuration

We have created parser, which shall be able to parse English version of [Keep the changelog](https://keepachangelog.com/).
If you have different notation in your organization, you can define your own parser and pass it to the plugin.

#### How to create my own parser?

Parser is represented by following type:

```jsx
/**
 * Props for {@link EntityChangelogCard}.
 * Props for {@link EntityChangelogContent}
 * @public
 */
export interface EntityChangelogProps {
    parser?(content: string) : ChangelogProps[]
}
  
```
It shall take `string` as argument and shall produce array of `ChangelogProps` output which follows:

```jsx
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
```

Every field matches corresponding information in ChangelogCard or ChangelogContent.

Let's assume that your content follows "Keep the changelog" format, so your CHANGELOG looks like this:
```md
# Changelog

## [1.1.1] - 2023-03-05

### Added

- Polish translation

### Removed

- Foreign translation

```

Properly mapping to ChangelogProps format is:
```
versionNumber = "[1.1.1] - 2023-03-05"
actions = [
  {
    name: "Added",
    counter: 1 // because there is only one change - Polish translation added
    content: "- Polish translation",
    icon: <some react component, for instance from MUI icons>
  },
  {
    name: "Removed",
    counter: 1 // because there is only one change - Foreign translation removed
    content: "- Foreign translation",
    icon: <some react component, for instance from MUI icons>
  }
]
versionContent = "
### Added

- Polish translation

### Removed

- Foreign translation
"
```

Please remember that you need to return array of ChangelogProps because single ChangelogProps is related to one version (e.g. [1.1.1] - 2023-03-05) and its content.

## TODO

[ ] Unit tests

[ ] Move logic from frontend to backend

## Contribution

Contributions are welcome and they are greatly appreciated!

## License

Licensed under the Mozilla Public License, Version 2.0: https://www.mozilla.org/en-US/MPL/2.0/

---

© 2023 RSC https://rsoftcon.com/