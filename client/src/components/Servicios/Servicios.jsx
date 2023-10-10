
import React from "react";
import styles from "./Servicios.module.css";
import {BsFillHouseAddFill} from 'react-icons/bs';
import {GiBrickWall} from 'react-icons/gi';
import {MdCarpenter, MdDesignServices} from 'react-icons/md';

const Servicios = () => {
    return(
        <div style={{margin: '30px'}}>
            <h2 style={{display: 'flex', justifyContent: 'center'}}>
               <span style={{color: '#3b3e40', marginTop: '20px'}}>NUESTROS</span>&nbsp;
               <span style={{color: '#a61a16', marginTop: '45px'}}>SERVICIOS</span></h2>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div className={styles.servicio}>
                    <img alt="Servicio 1"></img>
                    <h3>Remodelación</h3>
                    <span>Cambios y modenización de espacios en el inmueble, con actualización en
                    tendencias.</span>
                    <div>
                        <BsFillHouseAddFill color="#1d1d1b" size={40} style={{marginTop: '10px'}}/>
                    </div>
                </div>
                <div className={styles.servicio}>
                    <img alt="Servicio 2"></img>
                    <h3>Acabados</h3>
                    <span>Terminaciones prolijas de los proyectos en obra gris con materiales de alta
                    calidad.</span>
                    <div>
                        <MdDesignServices color="#1d1d1b" size={40} style={{marginTop: '10px'}}/>
                    </div>
                </div>
                <div className={styles.servicio}>
                    <img alt="Servicio 3"></img>
                    <h3>Construcción y mampostería</h3>
                    <span>Realización de proyectos desde cero, desde sus cimientos hasta el 
                        levantamiento de la estructura y la realización de sus acabados.</span>
                    <div>
                        <GiBrickWall color="#1d1d1b" size={40} style={{marginTop: '10px'}}/>
                    </div>
                </div>
                <div className={styles.servicio}>
                    <img alt="Servicio 4"></img>
                    <h3>Carpintería</h3>
                    <span>Creación de todo tipo de mobiliario en madera RH, material idóneo resistente a
                        humedad y comején, con excelentes acabados.</span>
                    <div>
                        <MdCarpenter color="#1d1d1b" size={45} style={{marginTop: '10px'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Servicios;