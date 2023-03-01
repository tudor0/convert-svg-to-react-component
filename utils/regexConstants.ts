const styleRegex = /style="(.*?)"/g;
const svgCommentRegex = /<!--[\s\S]*?-->/g;
const xmlRegex = /<\?xml[^?]*\?>/g;
const svgRegex = /<svg/;
const widthRegex = /width="(\d+(%|em|vw|vh)|\d+)"/;
const heightRegex = /height="(\d+(%|em|vw|vh)|\d+)"/;
const viewBoxRegex = /viewBox=".*?"/i;
const beginingRegex = /^[^a-zA-Z]+/;
const symbolsRegex = /[^a-zA-Z0-9_]/g;
const componentRegex = /^[A-Z][a-zA-Z0-9_]*[^_]$/;
const minusPlusLetter = /-([a-z])/g;
const removeAlphaNumeric = /[^\w\s]/gi;

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
  beginingRegex,
  symbolsRegex,
  componentRegex,
  minusPlusLetter,
  removeAlphaNumeric,
  xRegex,
  transformRegex
};
