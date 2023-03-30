import React from "react";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";

const TableRow = ({ props }: any) => {
  const navigate = useNavigate();
  const clickCoin = (id: string) => {
    navigate(`/coin/${id}`);
    window.scroll({ top: 0 });
  };

  const handleCoin = (name: string, price: string, id: string) => {
    const storageArr = JSON.parse(localStorage.getItem("bag")!) || [];
    storageArr.push({ id: id, name: name, price: price });
    localStorage.setItem("bag", JSON.stringify(storageArr));
  };

  return (
    <>
      <>
        <div className={styles.wrapperRow} onClick={() => clickCoin(props.id)}>
          <div className={styles.coinRank}>{props.rank}</div>
          <div className={styles.coinName}>
            {props.name}
            <span className={styles.coinSymbol}>{props.symbol} </span>
          </div>
          <div className={styles.coinPrice}>
            ${Number(props.priceUsd).toFixed(2)}
          </div>
          <div className={styles.coinMarketCap}>
            ${(Number(props.marketCapUsd) / 1000000).toFixed(2)}m
          </div>
          <div className={styles.coinVwap}>
            ${Number(props.vwap24Hr).toFixed(2)}
          </div>
          <div className={styles.coinSupply}>
            ${(Number(props.supply) / 1000000).toFixed(2)}m
          </div>
          <div className={styles.coinVolume}>
            ${(Number(props.volumeUsd24Hr) / 1000000).toFixed(2)}m
          </div>
          <div className={styles.coinChange}>
            {Number(props.changePercent24Hr).toFixed(2)}%
          </div>
        </div>

        <div
          className={styles.btnAdd}
          onClick={() => {
            handleCoin(props.name, props.priceUsd, props.id);
          }}
        >
          +
        </div>
      </>
    </>
  );
};

export default TableRow;
