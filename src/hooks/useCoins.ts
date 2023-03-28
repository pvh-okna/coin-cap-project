import { useEffect, useState } from "react";
import { CoinRequest, ItemsType } from "../type";

export const useCoins = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({});

  useEffect(() => {
    // const interval = setInterval(() => {

    fetch("https://api.coincap.io/v2/assets")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setItems(data);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return { error, items, isLoaded };
};
