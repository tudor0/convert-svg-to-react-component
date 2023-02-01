import { SvgCardProps } from "@/types/types";
import modifyString from "@utils/modifyString";
import createComponentCode from "@utils/createComponentCode";
import { useEffect, useState } from "react";
import DownloadFileButton from "./DownloadFileButton";

const SvgCard: React.FC<SvgCardProps> = ({ code, file, converted }) => {
  const createInitialComponentName = () => {
    const initialName = file.name.split(".")[0];
    const finalName = modifyString(initialName);
    return finalName === "" ? "Icon" : finalName;
  };

  const [componentName, setComponentName] = useState<string | null>(null);
  const [componentCode, setComponentCode] = useState<string | null>("");

  useEffect(() => {
    setComponentName(createInitialComponentName());

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
    const validString = modifyString(e.target.value)
      .replace(/[^\w\s]/gi, "")
      .replaceAll(" ", "");
    setComponentName(validString);
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
          height: "100%"
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
