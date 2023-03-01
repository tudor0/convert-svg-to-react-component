import SvgCard from "@/components/SvgCard";
import { FileProps } from "@/types/types";
import { Button } from "@/UI";
import handleFileChange from "@utils/handleFileChange";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [files, setFiles] = useState<FileProps[]>([]);
  const [converted, setConverted] = useState(false);

  const handleFileChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setConverted(false);
    handleFileChange(e, setFiles);
  };

  return (
    <div className="p-3">
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
        {files.length > 0 &&
          files.map(({ file, code }, index) => (
            <SvgCard
              code={code}
              file={file}
              key={index}
              converted={converted}
            />
          ))}
      </div>
      <Button variant="tertiary" className="mx-auto w-min" size="small">
        asdasd
      </Button>
    </div>
  );
}
