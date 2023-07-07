// import React, { useState, ChangeEvent, DragEvent } from "react";

// const FileUploadPreview: React.FC = () => {
//   const [files, setFiles] = useState<File[]>([]);

//   const handleFileUpload = (
//     event: ChangeEvent<HTMLInputElement> | DragEvent<HTMLDivElement>
//   ) => {
//     event.preventDefault();

//     // Check if the event is from the file input or drop zone
//     let fileList: FileList | null;
//     if ("target" in event) {
//       fileList = event.target.files;
//     } else {
//       fileList = event.dataTransfer?.files;
//     }

//     // Filter and validate uploaded files
//     const validFiles: File[] = [];
//     if (fileList) {
//       for (let i = 0; i < fileList.length; i++) {
//         const file = fileList[i];
//         if (file.type === "image/png" || file.type === "image/jpeg") {
//           validFiles.push(file);
//         }
//       }

//       // Update state with valid files
//       setFiles([...files, ...validFiles]);
//     }
//   };

//   return (
//     <div>
//       <h1>Drag and Drop File Upload</h1>
//       <div
//         className="drop-zone"
//         onDrop={(event) => {
//           event.preventDefault();
//           handleFileUpload(event);
//         }}
//         onDragOver={(event) => event.preventDefault()}
//       >
//         Drop files here or click to upload
//       </div>
//       <input
//         type="file"
//         accept=".png,.jpg"
//         multiple
//         onChange={handleFileUpload}
//         style={{ display: "none" }}
//         ref={(input) => (inputElement = input)}
//       />
//       {files.length > 0 && (
//         <div className="thumbnail-container">
//           {files.map((file, index) => (
//             <div className="thumbnail" key={index}>
//               <img src={URL.createObjectURL(file)} alt={`Thumbnail ${index}`} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FileUploadPreview;
