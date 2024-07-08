import React from 'react';
import Product from '../components/Product';
import { useState, useEffect } from "react";

const Ranges =() => {
    const [ranges, setRange] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/supply/rangements")
            .then((res) => { 
                return res.json();
    })
    .then((result) => {
    console.log(result);
    setRange(result);
    });
    }, []);

        return (
            <div>
                <h2 style={{fontWeight: 100}}><img style={{width:'6%'}} src="../img/wardrobe.png" alt="Wardrobe from Flaticon"/> • Notre sélection de meubles à ranger •</h2>
                    {ranges.map((range) => (
                        <div key={range.id}>
                            <Product product={range} />
                        </div>
                    ))}
            </div>
                );
};


export default Ranges;