import React, { FC } from "react";
import styles from "./style.module.scss";
import { ItemsType } from "../../../type";
import { useNavigate } from "react-router-dom";

type CoinType = {
  props: ItemsType;
};
const TableRow: FC<CoinType> = ({ props }) => {
  const navigate = useNavigate();
  const clickCoin = (id: string) => {
    navigate(`/coin/${id}`);
    window.scroll({ top: 0 });
  };
  return (
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
        <span className={styles.btnAdd}>+</span>
      </div>
    </>
  );
};

export default TableRow;
