import React, {useState} from 'react';
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setKorzina} from "../../redux/korzinaSlice.js";

const Product = ({i}) => {
    const dispatch = useDispatch()
    const [click, setClick] = useState(false)

    const getKor = () => {
        if (!click){
            dispatch(setKorzina(i))
            setClick(true)
        }else {
            alert('Вы уже добавили')
        }
    }

    return (
        <div>
            <div>
                <img src={i.picture} alt=""/>
            </div>
            <span>{i.name}</span>
            <span>{i.price}</span>
            <Button variant='outlined' onClick={getKor}>save</Button>
        </div>
    );
};

export default Product;