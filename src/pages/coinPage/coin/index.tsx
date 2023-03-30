import React, { useState } from "react";
import { useParams } from "react-router";
import styles from "../style.module.scss";
import { useCoin } from "../../../hooks/useCoin";
import Modal from "../../modal";
import ModalAdd from "../../../components/modalAdd";

const CoinItems = () => {
  const routeParams = useParams();
  const coinId = String(routeParams.id);
  const arr: any = useCoin(coinId);
  const [isModal, setModal] = useState(false);

  if (arr) {
    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.name}>{arr.name}</div>
          <div className={styles.symbol}>{arr.symbol}</div>
          <div className={styles.wrapperInfo}>
            <div className={styles.price}>
              Price{" "}
              <span className={styles.info}>
                {" "}
                ${Number(arr.priceUsd).toFixed(2)}
              </span>
            </div>
            <div className={styles.marketCap}>
              MarketCap{" "}
              <span className={styles.info}>
                ${(Number(arr.marketCapUsd) / 1000000).toFixed(2)}m
              </span>
            </div>
            <div className={styles.supply}>
              Supply
              <span className={styles.info}>
                ${(Number(arr.supply) / 1000000).toFixed(2)}m
              </span>
            </div>
            <div className={styles.volume}>
              Volume(24Hr)
              <span className={styles.info}>
                ${(Number(arr.volumeUsd24Hr) / 1000000).toFixed(2)}m
              </span>
            </div>
            <div className={styles.changePer}>
              Change(24Hr)
              <span className={styles.info}>
                {Number(arr.changePercent24Hr).toFixed(2)}%{" "}
              </span>
            </div>
          </div>
          <button
            className={styles.btn}
            onClick={() => {
              setModal(true);
            }}
          >
            ADD TO CART
          </button>
          <Modal
            isVisible={isModal}
            title={"Add to cart"}
            content={<ModalAdd props={arr} />}
            onClose={() => setModal(false)}
          />
        </div>
      </>
    );
  } else return <h1>ERROR</h1>;
};

export default CoinItems;
