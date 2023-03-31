import styles from "../style.module.scss";
import { RxCross1 } from "react-icons/rx";
import React from "react";
import { render } from "react-dom";
import App from "../../../../App";
import Header from "../../../../containers/header";
import { ClickCoin } from "../../../../utils/getLocalStorage";
import { CoinType } from "../../../../type";
type LocalType = {
  props: CoinType;
};
export const Items = (props: LocalType) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div>{props.props.name}</div>
        <div>${Number(props.props.price).toFixed(2)}</div>
        <div
          onClick={() => {
            ClickCoin(props.props.id);
          }}
        >
          <RxCross1 className={styles.cross} />
        </div>
      </div>
    </>
  );
};
