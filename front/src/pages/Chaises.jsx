import React from 'react';
import Product from '../components/Product';
import { useState, useEffect } from "react";

const Chaises =() => {
    const [chaises, setChaises] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/supply/chaises")
            .then((res) => { 
                return res.json();
    })
    .then((result) => {
    console.log(result);
    setChaises(result);
    });
    }, []);

        return (
            <div>
                <h2 style={{fontWeight: 100}}><img style={{width:'6%'}} src="../img/chair.png" alt="Chair from Flaticon"/> • Notre sélection de Chaises •</h2>
                    {chaises.map((chaise) => (
                        <div key={chaise.id}>
                            <Product product={chaise} />
                        </div>
                    ))}
            </div>
                );
};


export default Chaises;