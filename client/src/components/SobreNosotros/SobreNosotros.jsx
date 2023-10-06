
import React from "react";

const SobreNosotros = () => {
    return (
        <div style={{backgroundColor: '#80858d', height: '500px', borderRadius: '30px', margin: '50px'}}>
            <h2 style={{display: 'flex', justifyContent: 'center'}}>
                    <span style={{color: '#3b3e40', marginTop: '20px'}}>SOBRE</span>&nbsp;
                    <span style={{color: '#a61a16', marginTop: '45px'}}>NOSOTROS</span></h2>
            <div style={{display: "flex", flexDirection: 'column'}}>
                <div style={{display: "flex", flexDirection: 'row'}}>
                    <img style={{width: '120px', margin: '20px'}} src="https://i.ibb.co/qsF1bL6/Recurso-9.png" alt="logo 2" />
                    <span style={{width: '600px'}}><h3>Somos una empresa especializada en todos los aspectos de construcción y
                        remodelación residencial y comercial,</h3><h5>con excelentes resultados en el
                        sector inmobiliario. Creamos y renovamos proyectos de ensueño con alta calidad y
                        efectividad, con precios competitivos y óptimo servicio al cliente, brindando
                        acompañamiento profesional y cumpliendo todas las expectativas.</h5></span>
                </div>
                <div style={{display: "flex", flexDirection: 'row'}}>
                    <div>Holaaa</div>
                    <div>Holaaa</div>
                </div>
            </div>
        </div>
    )
};

export default SobreNosotros;
