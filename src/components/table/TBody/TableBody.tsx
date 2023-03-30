import React from "react";
import TableRow from "./TableRow";
import { ItemsType } from "../../../type";
import { useInView } from "react-intersection-observer";
import { useCoins } from "../../../hooks/useCoins";

const TableBody = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const coins = useCoins(inView);
  return (
    <>
      {coins.map((coin: ItemsType) => (
        <TableRow props={coin} key={coin.id} />
      ))}

      <div ref={ref} />
    </>
  );
};
export default TableBody;
