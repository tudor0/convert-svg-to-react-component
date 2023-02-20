import capitalizeFirstLetter from "./capitalizeFirstLetter";
import { symbolsRegex, beginingRegex, componentRegex } from "./regexConstants";
const modifyString = (string: string, action?: "check" | "modify") => {
  if (action === "check") {
    return componentRegex.test(string);
  }
  return (
    capitalizeFirstLetter(
      string.replace(beginingRegex, "").replace(symbolsRegex, "")
    ) || "Icon"
  );
};

export default modifyString;
