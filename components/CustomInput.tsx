// import {
//   Control,
//   FieldValues,
//   Form,
//   useController,
//   UseControllerProps,
// } from "react-hook-form";
// import {
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormDescription,
//   FormMessage,
// } from "./ui/form";

// import { Input } from "@/components/ui/input";

// type InputProps<T extends FieldValues> = UseControllerProps<T> & {
//   label: string;
//   control?: UseControllerProps<T>['control'];
//   name: string;
//   rules?: UseControllerProps<T>['rules'];
//   defaultValue?: string;
//   controlled?: boolean;
// };

// export function CustomInput<T extends FieldValues>({
//   name,
//   control,
//   defaultValue,
//   label,
//   placeholder,
//   type = "text",
//   shouldUnregister,
//   disabled = false,
//   ...inputProps
// }: InputProps<T>) {
//   if (controlled && control) {
//     const {
//       field: { onChange, onBlur, value, ref },
//       fieldState: { error },
//     } = useController({
//       name,
//       control,
//       rules,
//       defaultValue,
//     });

//     return (
//       <FormControl>
//         <FormLabel htmlFor={name}>{label}</FormLabel>
//         <Input
//           id={name}
//           name={name}
//           ref={ref}
//           value={value}
//           onChange={onChange}

//           onBlur={onBlur}
//           {...inputProps}
//         />
//         {errors.description && (
//             <FormMessage className="text-danger">
//               {errors.description.message}
//             </FormMessage>
//           )}
//       </FormControl>
//     );
// }
