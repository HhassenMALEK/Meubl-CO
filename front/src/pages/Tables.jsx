import React from 'react';
import Product from '../components/Product';
import { useState, useEffect } from "react";

const Tables =() => {
    const [tables, setTables] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/supply/tables")
            .then((res) => { 
                return res.json();
    })
    .then((result) => {
    console.log(result);
    setTables(result);
    });
    }, []);

        return (
            <div>
                <h2 style={{fontWeight: 100}}><img style={{width:'6%'}} src="../img/table.png" alt="Table from Flaticon"/>• Notre sélection de Tables •</h2>
                    {tables.map((table) => (
                        <div key={table.id}>
                            <Product product={table} />
                        </div>
                    ))}
            </div>
                );
};


export default Tables;