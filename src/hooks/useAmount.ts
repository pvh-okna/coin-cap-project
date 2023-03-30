import { useEffect, useState } from "react";

export const useAmount = (ids: string) => {
  const [items, setItems] = useState([{}]);

  useEffect(() => {
    fetch(`https://api.coincap.io/v2/assets?ids=${ids}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.data);
      });
  }, []);
  return items;
};
