import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { startCase } from "lodash";

export const renderInput = ({ form, name, label, placeholder }) => {
  return (
    <FormField
      control={form.control}
      name={name}
      key={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label ?? startCase(label)}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder ?? `Enter ${name} s`} {...field} />
          </FormControl>
          <FormMessage className="text-red-600" />
        </FormItem>
      )}
    />
  );
};
