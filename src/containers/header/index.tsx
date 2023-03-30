import React, { useState } from "react";
import styles from "./style.module.scss";
import { ItemsType } from "../../type";
import Modal from "../../pages/modal";
import { useCoinsHeader } from "../../hooks/useCoinsHeader";
import { BsFillBagFill } from "react-icons/bs";

const Header = () => {
  const coins: any = useCoinsHeader();
  const [isModal, setModal] = useState(false);
  if (coins) {
    return (
      <>
        <div className={styles.wrapperHeader}>
          <div className={styles.wrapperHeadItem}></div>
          <>
            {coins.map((coin: ItemsType) => (
              <div className={styles.headItem} key={coin.id}>
                {coin.name}
                <span> ${Number(coin.priceUsd).toFixed(2)} </span>
              </div>
            ))}
          </>
          <div
            className={styles.basket}
            onClick={() => {
              setModal(true);
            }}
          >
            <BsFillBagFill />
          </div>
        </div>
        <Modal
          isVisible={isModal}
          title={"Modal Title"}
          onClose={() => setModal(false)}
        />
      </>
    );
  } else return <div>ERROR...</div>;
};

export default Header;
