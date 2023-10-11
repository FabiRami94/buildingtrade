
import React from "react";
import styles from "./Servicios.module.css";

const Servicios = () => {
    return(
        <div style={{margin: '30px'}}>
            <h2 style={{display: 'flex', justifyContent: 'center'}}>
               <span style={{color: '#3b3e40', marginTop: '20px'}}>NUESTROS</span>&nbsp;
               <span style={{color: '#a61a16', marginTop: '45px'}}>SERVICIOS</span></h2>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div className={styles.servicio}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <img 
                                className={styles.imagenesRemodelacion} 
                                src="https://i.ibb.co/vkvCbpF/Remodelacion-antes.jpg" 
                                alt="Servicio 1"></img>
                            <span className={styles.textoAntes}>Antes</span>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <img 
                                className={styles.imagenesRemodelacion} 
                                src="https://i.ibb.co/mhpdQqT/Remodelacion-despues.png" 
                                alt="Servicio 1.2"></img>
                            <span className={styles.textoAntes}>Después</span>
                        </div>
                    </div>
                    <h3 style={{margin: '10px 0px 10px 0px'}}>Remodelación</h3>
                    <span>Cambios y modenización de espacios en el inmueble, con actualización en
                    tendencias.</span>
                </div>
                <div className={styles.servicio}>
                    <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'column', position: 'relative', alignContent: 'center'}}>
                            <img 
                                className={styles.imagenesAcabados} 
                                src="https://i.ibb.co/zhbDWNx/Acabados-antes.jpg" 
                                alt="Acabados 1"></img>
                            <span className={styles.textoAntes2}>Antes</span>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', position: 'relative'}}>
                            <img 
                                className={styles.imagenesAcabados} 
                                src="https://i.ibb.co/v4TXXZc/Acabados-despues.jpg" 
                                alt="Acabados 1.2"></img>
                            <span className={styles.textoAntes2}>Después</span>
                        </div>
                    </div>
                    <h3 style={{margin: '10px 0px 10px 0px'}}>Acabados</h3>
                    <span>Terminaciones prolijas de los proyectos en obra gris con materiales de alta
                    calidad.</span>
                </div>
                <div className={styles.servicio}>
                    <div style={{justifyContent: 'center'}}>
                        <img 
                            className={styles.imagenConstruccion} 
                            src="https://i.ibb.co/p2Jb9L3/Construccion-y-mamposteria.jpg" 
                            alt="Servicio 3"></img>
                        <h3 style={{margin: '10px 0px 10px 0px'}}>Construcción y mampostería</h3>
                        <span>Realización de proyectos desde cero, desde sus cimientos hasta el 
                            levantamiento de la estructura y la realización de sus acabados.</span>
                    </div>
                </div>
                <div className={styles.servicio}>
                    <div style={{justifyContent: 'center'}}>
                        <img 
                            className={styles.imagenCarpinteria} 
                            src="https://i.ibb.co/jWkBjp8/Carpinteria.jpg" 
                            alt="Servicio 4"></img>
                        <h3 style={{margin: '10px 0px 10px 0px'}}>Carpintería</h3>
                        <span>Creación de todo tipo de mobiliario en madera RH, material idóneo 
                            resistente a humedad y comején, con excelentes acabados.</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Servicios;