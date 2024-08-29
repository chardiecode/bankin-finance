import { startCase } from "lodash";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const RenderInput = ({ form, name, label, placeholder }) => {
  return (
    <FormField
      key={name}
      control={form.control}
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
