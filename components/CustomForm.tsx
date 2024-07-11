import React from "react";
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";

const formSchema = authFormSchema("sign-up");

interface CustomFormProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  children?: React.ReactNode;
}

const RenderInput = ({
  field,
  props,
}: {
  field: any;
  props: CustomFormProps;
}) => {
  const { placeholder } = props;
  return (
    <FormControl>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger className="shad-select-trigger">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent className="shad-select-content">
          {props.children}
        </SelectContent>
      </Select>
    </FormControl>
  );
};
const CustomForm = (props: CustomFormProps) => {
  const { control, name, label, placeholder } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              {name !== "state" && (
                <Input
                  placeholder={placeholder}
                  type={name === "password" ? "password" : "text"}
                  className="input-class"
                  {...field}
                />
              )}
            </FormControl>

            {name === "state" && <RenderInput field={field} props={props} />}
          </div>
          <FormMessage className="form-message mt-2" />
        </div>
      )}
    />
  );
};

export default CustomForm;
