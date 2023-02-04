const createComponentCode = (code: string, componentName: string) => {
  const widthRegex = /width="(\d+\S+)"/;
  const heightRegex = /height="(\d+\S+)"/;
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
    .replace(/width=".*?"/i, "")
    .replace(/height=".*?"/i, "")
    .replace(/viewBox=".*?"/i, "")
    .replace(
      /<svg/,
      "<svg width={width} height={height} className={className} stroke={stroke} style={style} viewBox={`0 0 ${width} ${height}`}"
    )
    .replace(/<!--[\s\S]*?-->/g, "")
    .replaceAll(/-([a-z])/g, (_, letter) => letter.toUpperCase())
    .replace(/<\?xml[^?]*\?>/g, "");

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
  return componentContent;
};

export default createComponentCode;
