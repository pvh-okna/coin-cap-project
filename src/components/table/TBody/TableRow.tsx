import React, {FC} from 'react';
import styles from './style.module.css';
import {ItemsType} from "../../../type";


type CoinType = {
    props:ItemsType
}
const TableRow : FC<CoinType> = ({props}) => {


    return (
        <>
            <div className={styles.wrapperRow}>

                <div className={styles.coinRank}>{props.rank}</div>
                <div className={styles.coinName}>
                    {props.name}
                    <span className={styles.coinSymbol}>{props.symbol} </span>
                    </div>
                <div className={styles.coinPrice}>${Number(props.priceUsd).toFixed(2)}</div>
                <div className={styles.coinMarketCap}>${(Number(props.marketCapUsd)/1000000).toFixed(2)}m</div>
                <div className={styles.coinVwap}>${Number(props.vwap24Hr).toFixed(2)}</div>
                <div className={styles.coinSupply}>${(Number(props.supply)/1000000).toFixed(2)}m</div>
                <div className={styles.coinVolume}>${(Number(props.volumeUsd24Hr)/1000000).toFixed(2)}m</div>
                <div className={styles.coinChange}>{Number(props.changePercent24Hr).toFixed(2)}%</div>
                <span className={styles.btnAdd}>+</span>
            </div>


        </>
    );
};

export default TableRow;