interface FileProps {
  file: File;
  code: string;
}

interface SvgCardProps extends FileProps {
  converted: boolean;
}

interface DownloadButtonProps {
  componentName: string;
  componentCode: string;
}

export type { FileProps, DownloadButtonProps, SvgCardProps };
