import { useEffect, useState } from "react";

export const useCoin = (id: string) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://api.coincap.io/v2/assets/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return items;
};
