import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import { ItemsType } from "../../../type";
import { useCoins } from "../../../hooks/useCoins";
import axios from "axios";
import coinPage from "../../../pages/coinPage";

const TableBody = () => {
  const [coins, setCoins] = useState<ItemsType[]>([]);
  const [currentPage, setCurrentRage] = useState(0);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      axios
        .get(`https://api.coincap.io/v2/assets?limit=10&offset=${currentPage}`)
        .then((res) => {
          console.log(res);
          setCoins([...coins, ...res.data.data]);
          setCurrentRage((prevState) => prevState + 10);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      coins.length < 500
    ) {
      setFetching(true);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <>
      {coins.map((coin: ItemsType) => (
        <TableRow props={coin} key={coin.id} />
      ))}
    </>
  );
};
export default TableBody;
