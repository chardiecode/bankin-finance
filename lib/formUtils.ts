import { Control, FieldValues } from "react-hook-form";
import { RenderInput } from "@/components/common/CustomField";
import { FieldBase } from "@/types";

export const renderField = <
  TFieldValues extends FieldValues,
  TField extends FieldBase<TFieldValues>,
>({
  field,
  control,
}: {
  field: TField;
  control: Control<TFieldValues>;
}) => {
  return RenderInput({ control, ...field });
};
