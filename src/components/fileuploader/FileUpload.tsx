import { SVGS } from "@/assets/SVGS";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";

interface IProductData {
  value: (string | File)[];
  handleFileUpload: (data: (string | File)[]) => void;
}
function FileUpload({ value, handleFileUpload }: IProductData) {
  const [fileLists, setFileLists] = useState<(string | File)[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const launchFileBrowse = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    let files;
    if (e.target instanceof HTMLInputElement && "target" in e) {
      files = e.target.files;
    } else {
      const dragEvent = e as React.DragEvent<HTMLDivElement>;
      files = dragEvent.dataTransfer?.files;
    }
    let validFiles = [];
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type === "image/png" || file.type === "image/jpeg") {
          console.log(file);
          validFiles.push(file);
        } else {
          toast.error(`Image type ${file.type} not supported`);
        }
      }
    }
    let allFiles = [...fileLists, ...validFiles];
    if (allFiles.length > 5) {
      allFiles = allFiles.slice(allFiles.length - 5, allFiles.length);
      toast.error("Product images cannot be more than 5")
    }
    // Set local props
    setFileLists(allFiles);
    // Set Props (payload) from parent
    handleFileUpload(allFiles);
  };
  const removeImage = (id: number) => {
    const newFiles = fileLists.filter((_, index) => index !== id);
    setFileLists(newFiles);
  };
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();
  useEffect(() => {
    setFileLists(value);
  }, [value]);

  return (
    <div className="w-full min-h-56 rounded-lg border border-dashed border-gray-400 hover:border-solid hover:border-gray-600 transition-all flex items-center justify-center">
      <input
        multiple
        onChange={onInputChange}
        ref={inputRef}
        type="file"
        className="hidden"
      />
      <div
        onDragOver={onDragOver}
        onDrop={onInputChange}
        className="w-full flex flex-col items-center justify-center my-3"
      >
        <SVGS.ImageIcon size="54" />
        <p className="text-sm text-gray-400">
          Drag and drop product images here.
        </p>
        <div className="my-2 flex items-center gap-2 text-sm">
          <hr className="border border-gray-300 w-[32px]" />
          <span className="text-xs uppercase">OR</span>
          <hr className="border border-gray-300 w-[32px]" />
        </div>
        <button
          type="button"
          onClick={launchFileBrowse}
          className="h-10 rounded-lg text-sm px-5 bg-gray-400 hover:bg-primary-blue transition-all duration-300 text-white"
        >
          Browse files
        </button>
        <div className="w-full px-5 flex items-center flex-wrap gap-3 mt-3 justify-center">
          {fileLists?.map((file, index) => (
            <div
              key={index}
              className="group w-12 h-12 rounded border border-gray-300 relative cursor-pointer"
            >
              {" "}
              <button
                type="button"
                title="remove image"
                onClick={() => removeImage(index)}
                className="absolute scale-0 group-hover:scale-100 transition-all duration-300 rounded top-0 left-0 w-full h-full z-20 bg-[#1e3cb691] flex items-center justify-center"
              >
                <SVGS.DeleteIcon color="#FFFFFF" />
              </button>
              <img
                src={
                  typeof file === "string" ? file : URL.createObjectURL(file)
                }
                className="w-full cursor-pointer h-full object-cover scale-100 rounded-tl-2xl rounded-tr-2xl transition-all duration-500"
                alt="product_image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FileUpload;
