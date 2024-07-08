import React from 'react';
import Product from '../components/Product';
import { useState, useEffect } from "react";

const Decos =() => {
    const [decos, setDecos] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/supply/decoration")
            .then((res) => { 
                return res.json();
    })
    .then((result) => {
    console.log(result);
    setDecos(result);
    });
    }, []);

        return (
            <div>
                <h2 style={{fontWeight: 100}}><img style={{width:'6%'}} src="../img/plant.png" alt="Plant from Flaticon"/> • Notre sélection decoration •</h2>
                    {decos.map((deco) => (
                        <div key={deco.id}>
                            <Product product={deco} />
                        </div>
                    ))}
            </div>
                );
};


export default Decos;