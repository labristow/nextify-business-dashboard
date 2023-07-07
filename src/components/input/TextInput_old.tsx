// import React from "react";
// interface IProps {
//   isRequired?: boolean;
//   title?: string;
//   type?: string;
//   placeholder?: string;
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }
// function TextInput({
//   isRequired = true,
//   title = "Title",
//   name,
//   placeholder = "Product Designer",
//   type,
//   value,
//   onChange,
//   ...restProps
// }: IProps) {
//   return (
//     <div className="flex flex-col">
//       <label
//         htmlFor=""
//         className="text-sm font-semibold flex items-center gap-x-0.5"
//       >
//         {title} {isRequired && <span className="text-primary text-sm">*</span>}
//       </label>
//       <input
//         type={type}
//         {...restProps}
//         value={value}
//         onChange={onChange}
//         name={name}
//         required
//         placeholder={placeholder}
//         className="outline-none focus:border-primary placeholder:font-normal valid:border-primary invalid:border-gray-300 h-12 rounded-md px-4 font-semibold border-2 border-gray-300 transition-all duration-500"
//       />
//     </div>
//   );
// }

// export default TextInput;
