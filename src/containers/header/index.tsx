import React, { useState } from "react";
import styles from "./style.module.scss";
import { ItemsType } from "../../type";
import Modal from "../../pages/modal";
import { useCoinsHeader } from "../../hooks/useCoinsHeader";
import { BsFillBagFill } from "react-icons/bs";
import ModalItem from "../../pages/modal/modalItem";
import { useAmount } from "../../hooks/useAmount";

const Header = () => {
  const coins: any = useCoinsHeader();
  let amount = 0;
  let amountNow = 0;
  let quantity = [];
  let ids = [];
  const [isModal, setModal] = useState(false);
  const itemArr = JSON.parse(localStorage.getItem("bag")!) || [];

  for (let key in itemArr) {
    ids.push(itemArr[key].id);
  }

  const amountArr: any = useAmount(ids.join(","));

  for (let key in amountArr) {
    amountNow += Number(amountArr[key].priceUsd);
  }

  for (let key in itemArr) {
    amount += Number(itemArr[key].price);
  }

  if (coins) {
    return (
      <>
        <div className={styles.wrapperHeader}>
          <div className={styles.fix}>
            <div className={styles.wrapperHeadItem}></div>
            <>
              {coins.map((coin: ItemsType) => (
                <div className={styles.headItem} key={coin.id}>
                  {coin.name}
                  <span> ${Number(coin.priceUsd).toFixed(2)} </span>
                </div>
              ))}
            </>
            <div className={styles.amountCart}>{amount.toFixed(2)} USD</div>
            <div className={styles.difference}>
              {(Number(amountNow) - Number(amount)).toFixed(2)}
            </div>
            <div className={styles.difPer}>
              (
              {(Number((amountNow - amount) * 100) / Number(amount)).toFixed(2)}
              %)
            </div>
            <div
              className={styles.basket}
              onClick={() => {
                setModal(true);
              }}
            >
              <BsFillBagFill />
            </div>
          </div>
        </div>
        <Modal
          isVisible={isModal}
          title={"Modal Title"}
          content={<ModalItem />}
          onClose={() => setModal(false)}
        ></Modal>
      </>
    );
  } else return <div>ERROR...</div>;
};

export default Header;
