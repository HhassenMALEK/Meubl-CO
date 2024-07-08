import React from 'react';
import Product from '../components/Product';
import { useState, useEffect } from "react";

const Canap =() => {
    const [canapes, setCanapes] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/supply/canapes")
            .then((res) => { 
                return res.json();
    })
    .then((result) => {
    console.log(result);
    setCanapes(result);
    });
    }, []);

        return (
            <div>
                <h2 style={{fontWeight: 100}}><img style={{width:'6%'}} src="../img/sofa.png" alt="Sofa from Flaticon"/> • Notre sélection de Canapés •</h2>
                    {canapes.map((canape) => (
                        <div key={canape.id}>
                            <Product product={canape} />
                        </div>
                    ))}
            </div>
                );
};


export default Canap;