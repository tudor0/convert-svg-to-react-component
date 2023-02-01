import { Dispatch, SetStateAction } from "react";
import { FileProps } from "@/types/types";

const handleFileChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setFiles: Dispatch<SetStateAction<FileProps[]>>
) => {
  const selectedFiles = event.target.files;
  if (!selectedFiles) return;

  const fileArray: FileProps[] = [];
  for (let i = 0; i < selectedFiles.length; i++) {
    const file = selectedFiles.item(i);
    if (!file) continue;
    if (file.type !== "image/svg+xml") {
      alert(`${file.name} is not an SVG file`);
      continue;
    }
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      fileArray.push({ file, code: reader.result as string });
      if (fileArray.length === selectedFiles.length) setFiles(fileArray);
    };
  }
};

export default handleFileChange;
