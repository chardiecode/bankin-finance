import { RenderInput } from "@/components/common/CustomField";
import { Control, FieldPath, FieldValues } from "react-hook-form";

type FieldBase<TFieldValues extends FieldValues> = {
  type: string;
  name: FieldPath<TFieldValues>;
  label?: string;
  placeholder?: string;
};

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
  switch (field.type) {
    case "text":
      return RenderInput({
        control,
        ...field,
      });
    default:
      return undefined;
  }
};

export default {
  renderField,
};
