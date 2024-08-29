import { renderInput } from "@/components/common/TextInput";

const renderField = ({ field, form }: { field: any; form: any }) => {
  switch (field.type) {
    case "text":
      return renderInput({ form, ...field });
    default:
      return undefined;
  }
};

export default {
  renderField,
};
