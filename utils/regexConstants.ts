const styleRegex = /style="(.*?)"/g;
const svgCommentRegex = /<!--[\s\S]*?-->/g;
const xmlRegex = /<\?xml[^?]*\?>/g;
const svgRegex = /svg/;
const widthRegex = /width="(\d+\S+)"/;
const heightRegex = /height="(\d+\S+)"/;
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