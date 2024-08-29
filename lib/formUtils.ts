import { RenderInput } from "@/components/common/CustomField";

export const renderField = ({ field, form }: { field: any; form: any }) => {
  switch (field.type) {
    case "text":
      return RenderInput({ form, ...field });
    default:
      return undefined;
  }
};

export default {
  renderField,
};
