
import React from "react";
import styles from "./SobreNosotros.module.css";

const SobreNosotros = () => {
    return (
        <div style={{ margin: '50px'}}>
            <h2 style={{
                display: 'flex', 
                justifyContent: 'center'}}>
                <img 
                    style={{
                        width: '80px', 
                        padding: '10px', 
                        margin: '10px', 
                        backgroundColor: 'black', 
                        borderRadius: '10px'}} 
                    src="https://i.ibb.co/qsF1bL6/Recurso-9.png" 
                    alt="logo 2" />
                <span 
                    style={{
                        color: '#3b3e40',
                        marginTop: '20px'}}>SOBRE</span>&nbsp;
                <span 
                    style={{
                        color: '#a61a16', 
                        marginTop: '45px'}}>NOSOTROS</span></h2>
            <div 
                style={{
                    display: "flex", 
                    flexDirection: 'column', 
                    textAlign: 'center'}}>
                <div 
                    style={{
                        display: "flex", 
                        flexDirection: 'row', 
                        justifyContent: 'center'}}>
                    <span style={{width: '800px'}}><h2 style={{margin: '0px'}}>Somos una empresa especializada en todos los aspectos de construcción y
                        remodelación residencial y comercial,</h2><h4 style={{margin: '0px'}}>con excelentes resultados en el
                        sector inmobiliario. Creamos y renovamos proyectos de ensueño con alta calidad y
                        efectividad, con precios competitivos y óptimo servicio al cliente, brindando
                        acompañamiento profesional y cumpliendo todas las expectativas.</h4></span>
                </div>
                <div style={{display: "flex", flexDirection: 'row', justifyContent: 'center'}}>
                    <div className={styles.flippableCardContainer}>
                       <div className={styles.frontCard}>
                            <img className={styles.image} src="https://i.ibb.co/SNRxc6b/mision.jpg" alt="misión"/>
                            <h2 className={styles.title}>MISIÓN</h2>
                       </div>
                       <div className={styles.backCard}>
                            <span className={styles.letter}> Tenemos un compromiso con nuestros colaboradores y clientes, somos el
                            resultado del trabajo en equipo para proporcionar excelencia, sostenibilidad,
                            efectividad y acompañamiento, generando calidad de vida en la consecución de 
                            metas y objetivos, superando las expectativas de nuestros clientes, quienes 
                            son el motor para el funcionamiento efectivo de los proyectos trazados.
                            2023</span>
                       </div >
                    </div>
                    <div className={styles.flippableCardContainer}>
                        <div className={styles.frontCard}>
                            <img className={styles.image} src="https://i.ibb.co/pKp2QzB/vision.jpg" alt="visión"/>
                            <h2 className={styles.title}>VISIÓN</h2>
                        </div>
                       <div className={styles.backCard}>
                            <span className={styles.letter}> Posicionarnos como líderes en el sector de la construcción y ser 
                            reconocidos en esta industria, contribuyendo al mejoramiento del bienestar de
                            nuestros clientes, siendo un referente empresarial que propende por el
                            desarrollo social, económico y del medio ambiente, ofreciendo servicios de 
                            alta calidad y superando las expectativas más exigentes.
                            </span>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SobreNosotros;
