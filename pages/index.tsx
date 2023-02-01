import SvgCard from "@/components/SvgCard";
import { FileProps } from "@/types/types";
import handleFileChange from "@/utils/handleFileChange";
import { ChangeEvent, useEffect, useState } from "react";

export default function Home() {
  const [files, setFiles] = useState<FileProps[]>([]);
  const [converted, setConverted] = useState(false);

  const handleFileChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setConverted(false);
    handleFileChange(e, setFiles);
  };

  return (
    <>
      <input
        type="file"
        onChange={handleFileChanges}
        multiple={true}
        accept="image/svg+xml"
      />
      <button onClick={() => setConverted(true)} disabled={files.length === 0}>
        Convert to components
      </button>
      <div>
        {files.map(({ file, code }, index) => (
          <SvgCard code={code} file={file} key={index} converted={converted} />
        ))}
      </div>
    </>
  );
}
