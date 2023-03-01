const styleRegex = /style="(.*?)"/g;
const svgCommentRegex = /<!--[\s\S]*?-->/g;
const xmlRegex = /<\?xml[^?]*\?>/g;
const svgRegex = /<svg/;
const widthRegex = /width="(\d+\S+)"/;
const heightRegex = /height="(\d+\S+)"/;
const viewBoxRegex = /viewBox=".*?"/i;
const beginingRegex = /^[^a-zA-Z]+/;
const symbolsRegex = /[^a-zA-Z0-9_]/g;
const componentRegex = /^[A-Z][a-zA-Z0-9_]*[^_]$/;
const minusPlusLetter = /-([a-z])/g;
const removeAlphaNumeric = /[^\w\s]/gi;


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
};
