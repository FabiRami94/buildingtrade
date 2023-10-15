
import React from "react";
import ApartamentosCards from "../ApartamentosCards/ApartamentosCards";

const CompraApt = () => {
    return (
        <div style={{margin: '50px'}}>
            <h2 style={{display: 'flex', justifyContent: 'center'}}>
                <span style={{color: '#3b3e40', marginTop: '20px'}}>INMUEBLES</span>&nbsp;
                <span style={{color: '#a61a16', marginTop: '45px'}}>EN VENTA</span></h2>
                <ApartamentosCards/>
        </div>
    )
};

export default CompraApt;