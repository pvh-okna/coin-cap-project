import React, { useState } from "react";
import { GrBasket } from "react-icons/gr";
import styles from "./style.module.scss";

import { CoinRequest, ItemsType } from "../../type";
import TableRow from "../../components/table/TBody/TableRow";
import Modal from "../../pages/modal";
import { useCoins } from "../../hooks/useCoins";
import CoinPage from "../../pages/coinPage";

const Header = () => {
  const coins: any = useCoins();
  const [isModal, setModal] = useState(false);

  if (coins.error) {
    // @ts-ignore
    return <div>Ошибка: {coinArr.error.message}</div>;
  } else if (!coins.isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <>
        <div className={styles.wrapperHeader}>
          <div className={styles.wrapperHeadItem}></div>
          <>
            {coins.items.data
              .filter((coin: ItemsType) => Number(coin.rank) < 4)
              .map((coin: ItemsType) => (
                <div className={styles.headItem} key={coin.id}>
                  {coin.name}
                  <span> ${Number(coin.priceUsd).toFixed(2)} </span>
                </div>
              ))}
          </>
          <div className={styles.basket} onClick={() => setModal(true)}>
            <GrBasket />
          </div>
        </div>
        <Modal
          isVisible={isModal}
          title={"Modal Title"}
          content={"Add your coin"}
          onClose={() => setModal(false)}
        />
      </>
    );
  }
};

export default Header;
