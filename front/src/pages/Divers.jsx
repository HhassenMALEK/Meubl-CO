import React from 'react';
import Product from '../components/Product';
import { useState, useEffect } from "react";

const Divers =() => {
    const [trucs, setTrucs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/supply/divers")
            .then((res) => { 
                return res.json();
    })
    .then((result) => {
    console.log(result);
    setTrucs(result);
    });
    }, []);

        return (
            <div>
                <h2 style={{fontWeight: 100}}><img style={{width:'6%'}} src="../img/3d.png" alt="3D from Flaticon"/> • Notre sélection bric à brac•</h2>
                    {trucs.map((truc) => (
                        <div key={truc.id}>
                            <Product product={truc} />
                        </div>
                    ))}
            </div>
                );
};


export default Divers;