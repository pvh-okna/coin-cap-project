import { useEffect, useState } from "react";

export const useHistoryCoin = (id: string) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return items;
};
