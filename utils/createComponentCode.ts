import prettier from "prettier";
import parserTypeScript from "prettier/parser-typescript";
import {
  widthRegex,
  heightRegex,
  viewBoxRegex,
  svgRegex,
  svgCommentRegex,
  xmlRegex
} from "./regexConstants";

const createComponentCode = (code: string, componentName: string) => {
  const width = code.match(widthRegex);
  const height = code.match(heightRegex);
  const widthValue = width && width[1];
  const heightValue = height && height[1];
  if (!widthValue || !heightValue) {
    alert(
      `The SVG file ${componentName} does not have a width or height attribute`
    );
    return null;
  }

  let modifiedCode = code
    .replace(widthRegex, "")
    .replace(heightRegex, "")
    .replace(viewBoxRegex, "")
    .replace(
      svgRegex,
      "<svg width={width} height={height} className={className} stroke={stroke} style={style} viewBox={`0 0 ${width} ${height}`}"
    )
    .replace(svgCommentRegex, "")
    .replaceAll(/-([a-z])/g, (_, letter) => letter.toUpperCase())
    .replace(xmlRegex, "");

  const styleRegex = /style="(.*?)"/g;
  let match;
  while ((match = styleRegex.exec(modifiedCode)) !== null) {
    const styleString = match[1];
    const styles = styleString.split(";").reduce((acc: any, cur) => {
      const [property, value] = cur.split(":");
      acc[property] = value;
      return acc;
    }, {});

    modifiedCode = modifiedCode.replace(
      match[0],
      `style={{ ${Object.entries(styles)
        .map(([key, value]) => `${key}: "${value}"`)
        .join(", ")} }}`
    );
  }

  const componentContent = `
    import React from "react";
    
    interface IconProps {
      width?: number;
      height?: number;
      stroke?: string;
      className?: string;
      style?: React.CSSProperties;
    }
    const ${componentName}: React.FC<IconProps> = ({
      width = "${widthValue}",
      height = "${heightValue}",
      stroke = "none",
      className,
      style,
    }) => {
      return (
        ${modifiedCode}
      );
    };
    export default ${componentName};
    `;

  try {
    let formattedCode = prettier.format(componentContent, {
      printWidth: 80,
      singleQuote: true,
      jsxSingleQuote: true,
      trailingComma: "es5",
      parser: "typescript",
      bracketSpacing: true,
      plugins: [parserTypeScript]
    });

    return formattedCode;
  } catch (error) {
    console.error(error);

    return componentContent;
  }
};

export default createComponentCode;
