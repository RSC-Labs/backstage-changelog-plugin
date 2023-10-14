import React, { useState } from 'react';
import useAsync from 'react-use/lib/useAsync';
import { Button, Dialog, DialogContent, Grid, Typography, Box, LinearProgress } from '@material-ui/core';
import { useEntity } from '@backstage/plugin-catalog-react';
import { C as CHANGELOG_ANNOTATION_NAME, a as CHANGELOG_ANNOTATION_REF, c as changelogApiRef, i as isChangelogAnnotationConfigurationOk } from './index-37b62e94.esm.js';
import { StatusOK, StatusRunning, StatusPending, StatusError, StatusWarning, Table, MarkdownContent, EmptyState, CodeSnippet, LinkButton } from '@backstage/core-components';
import { useApi } from '@backstage/core-plugin-api';
import { Alert } from '@material-ui/lab';
import { ANNOTATION_SOURCE_LOCATION } from '@backstage/catalog-model';
import 'react-router-dom';
import '@backstage/errors';

function defaultParser(content) {
  let splittedLines = content.split(/\r?\n/);
  let changelogIndex = -1;
  let action;
  let ActionIcon;
  let actionContent;
  let versionContent;
  let actionCounter = 0;
  const changelogParsed = splittedLines.reduce((resultArray, item) => {
    if (item.startsWith("## ")) {
      if (action && actionContent && versionContent) {
        resultArray[changelogIndex].actions.push(
          {
            name: action,
            content: actionContent,
            counter: actionCounter,
            icon: ActionIcon
          }
        );
        resultArray[changelogIndex].versionContent = versionContent;
      }
      action = void 0;
      actionContent = void 0;
      versionContent = void 0;
      changelogIndex++;
      resultArray[changelogIndex] = {
        versionNumber: item,
        actions: [],
        versionContent: void 0
      };
    }
    if (item.startsWith("### ")) {
      if (action && actionContent) {
        resultArray[changelogIndex].actions.push(
          {
            name: action,
            content: actionContent,
            counter: actionCounter,
            icon: ActionIcon
          }
        );
        action = void 0;
        actionContent = void 0;
        actionCounter = 0;
      }
      if (item.includes(`### ${"Added" /* Added */}`)) {
        action = "Added" /* Added */;
        ActionIcon = () => /* @__PURE__ */ React.createElement(StatusOK, null);
      }
      if (item.includes(`### ${"Fixed" /* Fixed */}`)) {
        action = "Fixed" /* Fixed */;
        ActionIcon = () => /* @__PURE__ */ React.createElement(StatusRunning, null);
      }
      if (item.includes(`### ${"Changed" /* Changed */}`)) {
        action = "Changed" /* Changed */;
        ActionIcon = () => /* @__PURE__ */ React.createElement(StatusPending, null);
      }
      if (item.includes(`### ${"Removed" /* Removed */}`)) {
        action = "Removed" /* Removed */;
        ActionIcon = () => /* @__PURE__ */ React.createElement(StatusError, null);
      }
      if (item.includes(`### ${"Deprecated" /* Deprecated */}`)) {
        action = "Deprecated" /* Deprecated */;
        ActionIcon = () => /* @__PURE__ */ React.createElement(StatusWarning, null);
      }
      if (item.includes(`### ${"Security" /* Security */}`)) {
        action = "Deprecated" /* Deprecated */;
        ActionIcon = () => /* @__PURE__ */ React.createElement(StatusPending, null);
      }
    }
    if (item.startsWith("-")) {
      actionCounter++;
      if (actionContent) {
        actionContent += item + "\n";
      } else {
        actionContent = item + "\n";
      }
    }
    if (versionContent) {
      versionContent += item + "\n";
    } else {
      versionContent = item + "\n";
    }
    return resultArray;
  }, []);
  return changelogParsed;
}

const ActionCounter = ({ actionName, counter, Icon }) => {
  return /* @__PURE__ */ React.createElement(Grid, { container: true, alignItems: "center" }, Icon && /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(Icon, null)), /* @__PURE__ */ React.createElement(Grid, { item: true }, counter, " ", actionName));
};
const ChangelogActionsCounters = ({ changelogActions }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, changelogActions.map((changelogAction) => {
    if (changelogAction.counter) {
      return /* @__PURE__ */ React.createElement(ActionCounter, { actionName: changelogAction.name, counter: changelogAction.counter, key: changelogAction.name, Icon: changelogAction.icon });
    }
    return null;
  }));
};
const SeeChangesButton = ({ contentMd }) => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };
  const dialogContent = () => {
    return /* @__PURE__ */ React.createElement(MarkdownContent, { content: contentMd });
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { color: "primary", variant: "contained", onClick: openDialog }, "See changes"), /* @__PURE__ */ React.createElement(
    Dialog,
    {
      open,
      onClose: closeDialog,
      "aria-labelledby": "dialog-title",
      "aria-describedby": "dialog-description"
    },
    /* @__PURE__ */ React.createElement(DialogContent, null, dialogContent())
  ));
};
const ChangelogSmallTable = ({ changelogInfos }) => {
  const columns = [
    {
      title: "Version",
      highlight: true,
      render: (changelogInfo) => /* @__PURE__ */ React.createElement(MarkdownContent, { content: changelogInfo.versionNumber })
    },
    {
      title: "Actions",
      render: (changelogInfo) => /* @__PURE__ */ React.createElement(ChangelogActionsCounters, { changelogActions: changelogInfo.actions }),
      customFilterAndSearch: (filter, rowData, _) => {
        if (rowData.actions.length) {
          return rowData.actions.find((action) => action.name.toLowerCase().includes(filter.toLowerCase())) !== void 0;
        }
        return false;
      }
    },
    {
      title: "Changes",
      render: (changelogInfo) => {
        return /* @__PURE__ */ React.createElement(React.Fragment, null, changelogInfo.versionContent && /* @__PURE__ */ React.createElement(SeeChangesButton, { contentMd: changelogInfo.versionContent }));
      }
    }
  ];
  return /* @__PURE__ */ React.createElement(
    Table,
    {
      options: {
        pageSize: 5
      },
      data: changelogInfos,
      columns,
      title: "Changelog"
    }
  );
};

const missingSourceLocation = `
  annotations:
    ${ANNOTATION_SOURCE_LOCATION}: "file:/path-to-directory/"
`;
const missingSourceLocationAndName = `
  annotations:
    ${ANNOTATION_SOURCE_LOCATION}: "file:/path-to-directory/"
    ${CHANGELOG_ANNOTATION_NAME}: "CHANGELOG.md"
`;
const missingChangelogFileRef = `
  annotations:
    ${CHANGELOG_ANNOTATION_REF}: "url:https://github.com/RSC-Labs/backstage-changelog-plugin/tree/main/examples/CHANGELOG.md"
`;
const ChangelogAnnotationsEmptyState = () => {
  return /* @__PURE__ */ React.createElement(
    EmptyState,
    {
      missing: "field",
      title: "Changelog plugin",
      description: "Missing Annotations",
      action: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, { variant: "body1" }, "You need to properly configure your annotations. One of below configuration is needed:"), /* @__PURE__ */ React.createElement(Box, null, /* @__PURE__ */ React.createElement(
        CodeSnippet,
        {
          text: missingSourceLocation,
          language: "yaml",
          showLineNumbers: true,
          customStyle: { background: "inherit", fontSize: "115%" }
        }
      ), /* @__PURE__ */ React.createElement(
        CodeSnippet,
        {
          text: missingSourceLocationAndName,
          language: "yaml",
          showLineNumbers: true,
          customStyle: { background: "inherit", fontSize: "115%" }
        }
      ), /* @__PURE__ */ React.createElement(
        CodeSnippet,
        {
          text: missingChangelogFileRef,
          language: "yaml",
          showLineNumbers: true,
          customStyle: { background: "inherit", fontSize: "115%" }
        }
      )), /* @__PURE__ */ React.createElement(LinkButton, { color: "primary", to: "https://github.com/RSC-Labs/backstage-changelog-plugin#backend-plugin" }, "Read more"))
    }
  );
};

const ChangelogCard = (props) => {
  const changelogApi = useApi(changelogApiRef);
  const { entity } = useEntity();
  if (!isChangelogAnnotationConfigurationOk(entity)) {
    return ChangelogAnnotationsEmptyState();
  }
  const { value, loading, error } = useAsync(async () => {
    return changelogApi.readChangelog(entity);
  });
  if (loading) {
    return /* @__PURE__ */ React.createElement(LinearProgress, null);
  }
  if (error) {
    return /* @__PURE__ */ React.createElement(Alert, { severity: "error" }, JSON.stringify(error));
  }
  if (value) {
    const changelogInfos = props.parser ? props.parser(value) : defaultParser(value);
    return /* @__PURE__ */ React.createElement(ChangelogSmallTable, { changelogInfos });
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null);
};

const generateActionColumns = (changelogInfos) => {
  const actionColumns = [];
  if (changelogInfos.length) {
    for (let j = 0; j < changelogInfos.length; j++) {
      for (let i = 0; i < changelogInfos[j].actions.length; i++) {
        if (!actionColumns.some((actionColumn) => actionColumn.title === changelogInfos[j].actions[i].name)) {
          actionColumns.push(
            {
              title: changelogInfos[j].actions[i].name,
              render: (changelogInfo) => {
                const columnAction = changelogInfo.actions.find((action) => action.name === changelogInfos[j].actions[i].name);
                return /* @__PURE__ */ React.createElement(React.Fragment, null, columnAction !== void 0 && /* @__PURE__ */ React.createElement(MarkdownContent, { content: columnAction.content }));
              },
              customFilterAndSearch(filter, rowData, _) {
                if (rowData.actions.length) {
                  return rowData.actions.find((action) => action.content.toLowerCase().includes(filter.toLowerCase())) !== void 0;
                }
                return false;
              }
            }
          );
        }
      }
    }
  }
  return actionColumns;
};
const ChangelogFullTable = ({ changelogInfos }) => {
  const actionColumns = generateActionColumns(changelogInfos);
  const columns = [
    {
      title: "Version",
      highlight: true,
      render: (changelogInfo) => /* @__PURE__ */ React.createElement(MarkdownContent, { content: changelogInfo.versionNumber })
    },
    ...actionColumns
  ];
  return /* @__PURE__ */ React.createElement(
    Table,
    {
      options: {
        pageSize: 5
      },
      data: changelogInfos,
      columns,
      title: "Changelog"
    }
  );
};

const ChangelogContent = (props) => {
  const changelogApi = useApi(changelogApiRef);
  const { entity } = useEntity();
  if (!isChangelogAnnotationConfigurationOk(entity)) {
    return ChangelogAnnotationsEmptyState();
  }
  const { value, loading, error } = useAsync(async () => {
    return changelogApi.readChangelog(entity);
  });
  if (loading) {
    return /* @__PURE__ */ React.createElement(LinearProgress, null);
  }
  if (error) {
    return /* @__PURE__ */ React.createElement(Alert, { severity: "error" }, JSON.stringify(error));
  }
  if (value) {
    const changelogInfos = props.parser ? props.parser(value) : defaultParser(value);
    return /* @__PURE__ */ React.createElement(ChangelogFullTable, { changelogInfos });
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null);
};

export { ChangelogCard, ChangelogContent };
//# sourceMappingURL=index-c99c80e0.esm.js.map
