// import { useState } from "react";
import {
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
  FileInput,
} from "../../components/ui/file-upload";
import { Paperclip } from "lucide-react";

const dropZoneConfig = {
  maxFiles: 3,
  maxSize: 1024 * 1024 * 4,
  multiple: true,
} as const;

const FileSvgDraw = () => {
  return (
    <>
      <svg
        className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
        />
      </svg>
      <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
        <span className="font-semibold">Click to upload</span>
        &nbsp; or drag and drop. Max 3 files
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        SVG, PNG, JPG or GIF or PDF. Maximum size 2MB
      </p>
    </>
  );
};

type TodoAttachmentUploaderProps = {
  files: File[] | null;
  setFiles: React.Dispatch<React.SetStateAction<File[] | null>>;
};

const TodoAttachmentUploader = ({
  files,
  setFiles,
}: TodoAttachmentUploaderProps) => {
  // const [files, setFiles] = useState<File[] | null>(null);

  return (
    <div className="border border-black/35 border-dashed rounded-md">
      <FileUploader
        value={files}
        onValueChange={setFiles}
        dropzoneOptions={dropZoneConfig}
        className="relative bg-background rounded-lg p-2"
      >
        <FileInput className="outline-dashed outline-1 outline-white">
          <div className="flex items-center justify-center flex-col pt-3 pb-4 w-full ">
            <FileSvgDraw />
          </div>
        </FileInput>
        <FileUploaderContent>
          {files &&
            files.length > 0 &&
            files.map((file, i) => (
              <FileUploaderItem key={i} index={i}>
                <Paperclip className="h-4 w-4 stroke-current" />
                <span>{file.name}</span>
              </FileUploaderItem>
            ))}
        </FileUploaderContent>
      </FileUploader>
    </div>
  );
};

export default TodoAttachmentUploader;
