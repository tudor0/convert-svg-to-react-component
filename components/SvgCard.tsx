import { SvgCardProps } from "@/types/types";
import modifyString from "@utils/modifyString";
import createComponentCode from "@utils/createComponentCode";
import { useEffect, useState } from "react";
import DownloadFileButton from "./DownloadFileButton";
import { removeAlphaNumeric } from "@/utils/regexConstants";

const SvgCard: React.FC<SvgCardProps> = ({ code, file, converted }) => {
  const createInitialComponentName = () => {
    const initialName = file.name.split(".")[0];
    return modifyString(initialName) as string;
  };

  const [componentName, setComponentName] = useState<string | null>(null);
  const [componentCode, setComponentCode] = useState<string | null>("");

  useEffect(() => {
    const initialComponentName = createInitialComponentName();
    setComponentName(initialComponentName);
    console.log(initialComponentName);

    return () => {
      setComponentName(null);
      setComponentCode(null);
    };
  }, [code, file]);

  useEffect(() => {
    if (converted && componentName) {
      setComponentCode(createComponentCode(code, componentName));
      return;
    }
    setComponentCode(null);
  }, [converted]);

  const handleChangeComponentName = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const validString = modifyString(e.target.value, "modify") as string;
    const finalString = validString
      .replace(removeAlphaNumeric, "")
      .replaceAll(" ", "");
    setComponentName(finalString);
  };

  const handleBlurCheck = () => {
    if (componentName && componentName.length === 0) {
      setComponentName("Icon");
    }
  };

  return (
    <>
      <h2>Component name: {componentName}</h2>
      <input
        type="text"
        onChange={handleChangeComponentName}
        onBlur={handleBlurCheck}
        value={componentName || ""}
      />
      <div
        dangerouslySetInnerHTML={{ __html: code }}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "200px",
          maxHeight: "200px"
        }}
      />
      {converted && componentCode !== null && (
        <DownloadFileButton
          componentCode={componentCode}
          componentName={componentName || ""}
        />
      )}
    </>
  );
};

export default SvgCard;
