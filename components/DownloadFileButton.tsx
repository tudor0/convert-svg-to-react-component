import { DownloadButtonProps } from "@/types/types";

const DownloadFileButton: React.FC<DownloadButtonProps> = ({
  componentCode,
  componentName
}) => {
  const handleDownload = () => {
    const componentBlob = new Blob([componentCode], { type: "text/plain" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(componentBlob);
    downloadLink.download = `${componentName}.tsx`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <button onClick={handleDownload}>Download {componentName} component</button>
  );
};

export default DownloadFileButton;
