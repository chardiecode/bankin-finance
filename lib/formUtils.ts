import { renderInput } from "@/components/common/TextInput";

const renderField = ({ field, form }: { field: any; form: any }) => {
  const { name, label, placeholder } = field;
  switch (field.type) {
    case "text":
      return renderInput({ form, name: name, label, placeholder });
    default:
      return undefined;
  }
};

export default {
  renderField,
};
