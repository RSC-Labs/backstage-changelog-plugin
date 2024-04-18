import { ChangelogProps } from "./types";


// SemVer Parser follows https://semver.org/
export function semverParser (content: string) : ChangelogProps[] {
  const regex =
    /# \[([\d.]+)\]\([^)]+\) \((\d{4}-\d{2}-\d{2})\)(?:\n\n(?:### .+\n(?:\* .+\n)+))?((?:.|\n)*?)(?=(?:# \[\d+\.\d+\.\d+\])|\z)/g;
  const changelogParsed: ChangelogProps[] = [];
  let eachContent;
  const contents = []
  do {
    eachContent = regex.exec(content);
    if(eachContent){
      contents.push(eachContent)
    }
  } while (eachContent);
  contents?.forEach(dataContent => {
    const versionNumber = `${dataContent[1]} (${dataContent[2]})`;
    const versionContent = dataContent[3] ? dataContent[3].trim() : undefined;
    const actions: {
      name: string;
      counter: number;
      content: string;
      icon?: any;
    }[] = [];
    if (versionContent) {
      const contentLines = versionContent.split(/\r?\n/);
      contentLines.forEach((line, index) => {
        if(line.startsWith('### ')){
          const action = line.replace('### ', '')
          let actionContent = ''
          let counter = 0
          let i = index + 1
          while(i < contentLines.length && !contentLines[i].startsWith('### ')){
            if(contentLines[i].startsWith('*')){
              counter++
              actionContent += `${contentLines[i]}\n`
            }
            i++
          }
          actions.push({ name: action, counter, content: actionContent.trim() })
        }
      })
    }
    changelogParsed.push({ versionNumber, actions, versionContent });
  });
  return changelogParsed;
};