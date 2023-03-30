import { useEffect, useState } from "react";
import { ItemsType } from "../type";
import axios from "axios";
export const useCoins = (inView: boolean) => {
  const [coins, setCoins] = useState<ItemsType[]>([]);
  const [currentPage, setCurrentRage] = useState(0);

  useEffect(() => {
    axios
      .get(`https://api.coincap.io/v2/assets?limit=10&offset=${currentPage}`)
      .then((res) => {
        setCoins([...coins, ...res.data.data]);
        setCurrentRage((prevState) => prevState + 10);
      });
  }, [inView]);
  return coins;
};
