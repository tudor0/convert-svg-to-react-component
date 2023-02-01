const modifyString = (string: string) => {
  return string.replace(/^[^a-zA-Z]+/, "");
};

export default modifyString;
