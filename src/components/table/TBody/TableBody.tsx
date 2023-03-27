import React, {useState} from 'react';
import {res} from "../../../data/data";
import TableRow from "./TableRow";
import {ItemsType} from "../../../type";

const TableBody = () => {
    const [coins, setCoins] = useState(res.data)
    const coinArr=res.data;
    console.log(coinArr)
    return (
        <>
            {coins.map(((coin: ItemsType)=> <TableRow props={coin}/>))}
        </>
    );
};

export default TableBody;