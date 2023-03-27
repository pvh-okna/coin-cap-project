import React, {useState} from 'react';
import {GrBasket} from "react-icons/gr";
import styles from './style.module.css';
import {res} from "../../data/data";
import {ItemsType} from "../../type";
import TableRow from "../../components/table/TBody/TableRow";
import Modal from "../../pages/modal";

const  Header = () => {
    const [coins, setCoins] = useState(res.data);
    const [isModal, setModal] = useState(false);

    return (
        <>
        <div className={styles.wrapperHeader}>
            <div className={styles.wrapperHeadItem}></div>
           <>
               {coins.filter((coin:ItemsType) => Number(coin.rank) < 4).map(((coin: ItemsType)=>(
                   <div className={styles.headItem}>{coin.name}
                   <span> ${Number(coin.priceUsd).toFixed(2)} </span></div>
               )))}
           </>
            <div className={styles.basket} onClick={()=>setModal(true)}><GrBasket/></div>
        </div>
            <Modal
                isVisible={isModal}
                title={"Modal Title"}
                content={"Add your coin"}
                onClose={()=>setModal(false)}/>
        </>
    );
};

export default Header;