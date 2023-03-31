import React, { useState } from "react";
import { ClickBtn } from "../../utils/getLocalStorage";
import Input from "../input";
import { CoinType, ItemsType } from "../../type";

export type ModalType = {
  props: ItemsType;
};
const ModalAdd = (props: ModalType) => {
  const [value, setValue] = useState("");
  const handleClear = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setValue("");
  };

  return (
    <div>
      <div>Entry the quantity</div>
      <Input
        type={"text"}
        name={"number"}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></Input>
      <button
        type={"submit"}
        onClick={(e) => {
          ClickBtn(
            props.props.name,
            props.props.priceUsd,
            props.props.id,
            value
          );
          handleClear(e);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default ModalAdd;
