import { useEffect, useState } from "react";

export const useCoinsHeader = () => {
  const [items, setItems] = useState([{}]);

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets?limit=3")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.data);
      });
  }, []);

  return items;
};
