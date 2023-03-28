import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
//import { useCoin } from "../../hooks/useCoin";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useHistoryCoin } from "../../hooks/useHistory";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import axios from "axios";
import { ItemsType } from "../../type";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const CoinPage = () => {
  const routeParams = useParams();
  const coinId = String(routeParams.id);
  // const coinArr = useCoin(coinId);
  const navigate = useNavigate();
  const labels = [];
  const value = [];
  const historyArr: any = useHistoryCoin(coinId);
  // const [coins, setCoins] = useState({});
  // useEffect(() => {
  //   axios.get(`https://api.coincap.io/v2/assets/${coinId}`).then((res) => {
  //     setCoins(Object.assign(coins, res.data.data));
  //   });
  // }, []);
  if (Array.isArray(historyArr.data)) {
    historyArr.data.splice(0, 340);
    for (let id of historyArr.data) {
      labels.push(id.date.slice(0, 10));
      value.push(id.priceUsd);
    }
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Price changes",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "",
        data: value,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      <div className={styles.arrow} onClick={() => navigate("/")}>
        <HiOutlineArrowLongLeft />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.name}> Bitcoin</div>
        <div className={styles.symbol}>BTC</div>
        <div className={styles.wrapperInfo}>
          <div className={styles.price}>
            Price <span className={styles.info}> $26901.41</span>
          </div>
          <div className={styles.marketCap}>
            MarketCap <span className={styles.info}>$520462.99m</span>
          </div>
          <div className={styles.supply}>
            Supply<span className={styles.info}>$19.33m</span>
          </div>
          <div className={styles.volume}>
            Volume(24Hr)<span className={styles.info}>$6052.79m</span>
          </div>
          <div className={styles.changePer}>
            Change(24Hr)<span className={styles.info}>-0.78% </span>
          </div>
        </div>

        <Line options={options} data={data} />
      </div>
    </>
  );
};
export default CoinPage;
