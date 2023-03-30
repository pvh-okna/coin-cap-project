import React from "react";
type InputProps = {
  type: string;
  name: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = (props: InputProps) => {
  return (
    <input
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    ></input>
  );
};

export default Input;
