
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { aptos } from "../../assets/aptos.js";
import styles from "./DetalleApt.module.css";
import { IoArrowBackCircle } from "react-icons/io5";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import SwiperDetalleApto from "../SwiperDetalleAptos/SwiperDetalleAptos.jsx";

const DetalleApt = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [open, setOpen] = useState({
        description: false,
        datos: false
    });

    const backHandler = () => {
        navigate(-1);
    }

    const infoApto = aptos[id - 1]

    const openBarHandler = (event) => {
        const name = event.target.name;
    setOpen((prevOpen) => ({
        ...prevOpen,
        [name]: !prevOpen[name]
    }));
    }

    return(

        <div>
            <div style={{display: "flex", flexDirection: 'row'}}>
                <button className={styles.button} onClick={backHandler}> <IoArrowBackCircle /> BACK</button>
                <div style={{ flex: 2, textAlign: 'center' }}>
                    <img 
                            style={{
                                width: '80px', 
                                padding: '10px', 
                                margin: '10px', 
                                backgroundColor: 'black', 
                                borderRadius: '10px'}} 
                            src="https://i.ibb.co/qsF1bL6/Recurso-9.png" 
                            alt="logo 2" />
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                <div className={styles.aptoInfo}>
                    <h1>{infoApto.nombre} {infoApto.id}</h1>
                    <h3>{infoApto.dirreccion}</h3>
                    <h2>{infoApto.precio}</h2>
                    <div>
                        <button name="description" className={styles.openBar} onClick={openBarHandler}>
                            <span style={{color: 'white'}}>Descripción <FaArrowCircleDown/></span>
                        </button>
                        <h4 className={styles.description} 
                            style={{ width: '80%', display: open.description ? 'block' : 'none' }}>{infoApto.descripcionExtensa}</h4>
                    </div>
                    <div>
                        <button name="datos" className={styles.openBar} onClick={openBarHandler}>
                            <span style={{color: 'white'}}>Datos <FaArrowCircleDown/></span>
                        </button>
                        <span style={{ width: '80%', display: open.datos ? 'block' : 'none' }}>{infoApto.datos} MÁS COMPLETOS Y GRAFICOS</span>     
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <a href="https://wa.me/+573004770111" target="_blank" className={styles.contactoDiv}>
                        <div>
                            <FaWhatsappSquare size={60} color="rgb(37, 211, 102)"/>
                        </div>
                        <div style={{marginTop: '1rem'}}>
                            <span style={{
                                fontSize: '2rem', 
                                color: 'black', 
                                fontWeight: 'bold', 
                                marginLeft: '0.5rem',          
                                }}>Solicita una visita</span>
                        </div>
                    </a>
                </div>
                    <div style={{width: '50%', height: '400px'}}>
                        <SwiperDetalleApto></SwiperDetalleApto>
                    </div>
            </div>
        </div>
    )
};

export default DetalleApt;