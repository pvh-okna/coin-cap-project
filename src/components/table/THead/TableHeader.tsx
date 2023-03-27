import React from 'react';
import styles from "../TBody/style.module.css";

const TableHeader = () => {
    return (
        <div className={styles.wrapperTHead}>
            <div className={styles.coinHRank}>Rank</div>
            <div className={styles.coinName}>Name</div>
            <div className={styles.coinPrice}>Price</div>
            <div className={styles.coinMarketCap}>MarketCap</div>
            <div className={styles.coinVwap}>VWAP(24Hr)</div>
            <div className={styles.coinSupply}>Supply</div>
            <div className={styles.coinVolume}>Volume(24Hr)</div>
            <div className={styles.coinChange}>Change(24Hr)</div>
        </div>
    );
};

export default TableHeader;