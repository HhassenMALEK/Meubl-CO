import React from 'react';
import Product from '../components/Product';
import { useState, useEffect } from "react";

const Lumis =() => {
    const [lumis, setLumis] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/supply/luminaires")
            .then((res) => { 
                return res.json();
    })
    .then((result) => {
    console.log(result);
    setLumis(result);
    });
    }, []);

        return (
            <div>
                <h2 style={{fontWeight: 100}}><img style={{width:'6%'}} src="../img/lamp.png" alt="Lamp from Flaticon"/> • Notre sélection de luminaires •</h2>
                    {lumis.map((lumi) => (
                        <div key={lumi.id}>
                            <Product product={lumi} />
                        </div>
                    ))}
            </div>
                );
};


export default Lumis;