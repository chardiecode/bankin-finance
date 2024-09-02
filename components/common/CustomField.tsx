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
  type,
  className,
}: {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label?: string;
  placeholder?: string;
  type: string;
  className?: string;
}) => {
  switch (type) {
    case "text":
    case "password":
      return (
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem className={className ?? "col-span-2"}>
              <FormLabel className="text-[0.85rem]">
                {label ?? startCase(name)}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={placeholder ?? `Enter ${name}`}
                  type={type}
                  {...field}
                  autoComplete={
                    type === "password" ? "current-password" : "off"
                  }
                />
              </FormControl>
              <FormMessage className="text-red-600 text-xs font-medium" />
            </FormItem>
          )}
        />
      );
    default:
      return undefined;
  }
};
