import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {korSelect} from "../../redux/korzinaSlice.js";
import {Button} from "@mui/material";

const Korzina = () => {
    const {korzina} = useSelector(korSelect)
    const [counts, setCounts] = useState(korzina.map(item => ({id: item._id, count: 0})));

    const plus = (price) => {
        setCounts(counts.map(item => {
            if (item.id === price) {
                return {...item, count: item.count + 1};
            }
            return item;
        }));
    }

    const minus = (price) => {
        setCounts(counts.map(item => {
            if (item.id === price && item.count > 0) {
                return {...item, count: item.count - 1};
            }
            return item;
        }));
    }

    const getCount = (price) => {
        const item = counts.find(item => item.id === price);
        return item ? item.count : 0;
    }

    return (
        <div>
            {
                korzina.map(i => <div>
                    <div>
                        <img src={i.picture} alt=""/>
                    </div>
                    <span>{i.name}</span>
                    <span>{i.price}</span>
                    <Button variant='contained' onClick={() => plus(i._id)}>plus</Button>
                    <Button>{getCount(i._id)}</Button>
                    <Button variant='contained' onClick={() => minus(i._id)}>minus</Button>
                </div>)
            }
        </div>
    )
};

export default Korzina;