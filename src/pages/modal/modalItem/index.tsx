import React from "react";
import { CoinType } from "../../../type";
import { Items } from "./item";

const ModalItem = () => {
  const modalArr = JSON.parse(localStorage.getItem("bag")!);
  let amount = 0;
  for (let key in modalArr) {
    amount += Number(modalArr[key].price);
  }

  return (
    <>
      {modalArr.map((coin: CoinType) => (
        <Items props={coin} key={coin.id} />
      ))}
      <div>Amount {Number(amount).toFixed(2)}</div>
    </>
  );
};

export default ModalItem;
