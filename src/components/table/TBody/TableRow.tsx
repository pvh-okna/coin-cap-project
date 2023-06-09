import React, { useState } from "react";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import Modal from "../../../pages/modal";
import ModalItem from "../../../pages/modal/modalItem";
import ModalAdd, { ModalType } from "../../modalAdd";
import { ItemsType } from "../../../type";

const TableRow = (props: ModalType) => {
  const [isModal, setModal] = useState(false);
  const navigate = useNavigate();
  const clickCoin = (id: string) => {
    navigate(`/coin/${id}`);
    window.scroll({ top: 0 });
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div
          className={styles.wrapperRow}
          onClick={() => clickCoin(props.props.id)}
        >
          <div className={styles.coinRank}>{props.props.rank}</div>
          <div className={styles.coinName}>
            {props.props.name}
            <span className={styles.coinSymbol}>{props.props.symbol} </span>
          </div>
          <div className={styles.coinPrice}>
            ${Number(props.props.priceUsd).toFixed(2)}
          </div>
          <div className={styles.coinMarketCap}>
            ${(Number(props.props.marketCapUsd) / 1000000).toFixed(2)}m
          </div>
          <div className={styles.coinVwap}>
            ${Number(props.props.vwap24Hr).toFixed(2)}
          </div>
          <div className={styles.coinSupply}>
            ${(Number(props.props.supply) / 1000000).toFixed(2)}m
          </div>
          <div className={styles.coinVolume}>
            ${(Number(props.props.volumeUsd24Hr) / 1000000).toFixed(2)}m
          </div>
          <div className={styles.coinChange}>
            {Number(props.props.changePercent24Hr).toFixed(2)}%
          </div>
        </div>
        <div
          className={styles.btnAdd}
          onClick={() => {
            setModal(true);
          }}
        >
          +
        </div>
      </div>
      <Modal
        isVisible={isModal}
        title={"Add to cart"}
        content={<ModalAdd props={props.props} />}
        onClose={() => setModal(false)}
      />
    </>
  );
};

export default TableRow;
