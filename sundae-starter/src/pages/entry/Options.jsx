import axios from 'axios';
import {useEffect, useState} from "react";
import ScoopOption from "./ScoopOption.jsx";
import {Row} from "react-bootstrap";
import ToppingOption from "./ToopingOption.jsx";

export default function Options({optionType}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3030/${optionType}`)
            .then(response => setItems(response.data))
            .catch(error => {
                //TODO: handle error response
            })
    }, [optionType]);


    //TODO: Replace with ToppingOption once available
    const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption

    const optionItems = items.map(item => <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />)

    return <Row>{optionItems}</Row>;
}
