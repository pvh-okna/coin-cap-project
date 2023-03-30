import React from "react";
import { Items } from "./item";

const ModalItem = () => {
  const modalArr = JSON.parse(localStorage.getItem("bag")!);
  let amount = 0;
  for (let key in modalArr) {
    amount += modalArr[key].price;
  }
  return (
    <>
      {modalArr.map((coin: any) => (
        <Items props={coin} key={coin.id} />
      ))}
      <div>Amount {amount.toFixed(2)}</div>
    </>
  );
};

export default ModalItem;
