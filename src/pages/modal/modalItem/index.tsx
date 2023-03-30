import React from "react";
import { ItemsType } from "../../../type";
import TableRow from "../../../components/table/TBody/TableRow";
import { RxCross1 } from "react-icons/rx";
import styles from "./style.module.scss";

const Items = ({ props }: any) => {
  const ClickCoin = (id: string) => {
    const itemsArr = JSON.parse(localStorage.getItem("bag")!);
    itemsArr.splice(
      0,
      itemsArr.length,
      ...itemsArr.filter((n: any) => n.id !== id)
    );
    localStorage.setItem("bag", JSON.stringify(itemsArr));
    alert("Update page");
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div>{props.name}</div>
        <div>${Number(props.price).toFixed(2)}</div>
        <div
          onClick={() => {
            ClickCoin(props.id);
          }}
        >
          <RxCross1 className={styles.cross} />
        </div>
      </div>
    </>
  );
};

const Index = () => {
  const modalArr = JSON.parse(localStorage.getItem("bag")!);
  return (
    <>
      {modalArr.map((coin: any) => (
        <Items props={coin} key={coin.id} />
      ))}
    </>
  );
};

export default Index;
