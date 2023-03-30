import React from "react";
import { useParams } from "react-router";
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
import CoinItems from "./coin";

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

  const navigate = useNavigate();
  const labels = [];
  const value = [];
  const historyArr: any = useHistoryCoin(coinId);

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
        <CoinItems />
        <Line options={options} data={data} />
      </div>
    </>
  );
};
export default CoinPage;
