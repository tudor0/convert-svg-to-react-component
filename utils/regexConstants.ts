const styleRegex = /style="(.*?)"/g;
const svgCommentRegex = /<!--[\s\S]*?-->/g;
const xmlRegex = /<\?xml[^?]*\?>/g;
const svgRegex = /<svg/;
const widthRegex = /width="(\d+(%|em|vw|vh)|\d+)"/;
const heightRegex = /height="(\d+(%|em|vw|vh)|\d+)"/;
const viewBoxRegex = /viewBox=".*?"/i;

export {
  styleRegex,
  svgCommentRegex,
  xmlRegex,
  svgRegex,
  widthRegex,
  heightRegex,
  viewBoxRegex
};
