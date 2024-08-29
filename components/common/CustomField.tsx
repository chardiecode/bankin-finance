import { startCase } from "lodash";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath, FieldValues } from "react-hook-form";

export const RenderInput = <TFieldValues extends FieldValues>({
  control,
  name,
  label,
  placeholder,
}: {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label?: string;
  placeholder?: string;
}) => {
  return (
    <FormField
      key={name}
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label ?? startCase(label)}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder ?? `Enter ${name}`} {...field} />
          </FormControl>
          <FormMessage className="text-red-600" />
        </FormItem>
      )}
    />
  );
};
