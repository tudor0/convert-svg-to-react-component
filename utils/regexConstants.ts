const styleRegex = /style="(.*?)"/g;
const svgCommentRegex = /<!--[\s\S]*?-->/g;
const xmlRegex = /<\?xml[^?]*\?>/g;
const svgRegex = /<svg/;
const widthRegex = /width="(\d+(%|em|vw|vh)|\d+)"/;
const heightRegex = /height="(\d+(%|em|vw|vh)|\d+)"/;
const viewBoxRegex = /viewBox=".*?"/i;
const xRegex = /x[\w-]+:([a-zA-Z])/g;
const transformRegex = /transform="(.*?)"/g;

export {
  styleRegex,
  svgCommentRegex,
  xmlRegex,
  svgRegex,
  widthRegex,
  heightRegex,
  viewBoxRegex,
  xRegex,
  transformRegex
};
