
import React, { useState } from "react";
import {Link} from 'react-scroll';
import styles from './NavBar.module.css';

const NavBar = () => {

    const [clicked, setClicked] = useState(false)
    
    const handleClick = () => {
      setClicked(!clicked)
    }

    return(
        <div>
            <div className={styles.divGeneral}>
                <div>
                    <img 
                        style={{margin: '20px', height: '80px'}} 
                        alt={'Logo Empresa'} 
                        src="https://i.ibb.co/ph0TnLj/Recurso-3.png"/>
                </div>
                <div className={`${styles.divLinks} ${clicked ? styles.active : ''}`}>
                    <Link 
                        onClick={handleClick}
                        className={styles.linksStyles}
                        to="inicio"
                        smooth= {true}
                        offset={-180}
                        duration={500}>Inicio</Link>
                    <Link 
                        onClick={handleClick}
                        className={styles.linksStyles}
                        to="sobrenosotros"
                        smooth= {true}
                        offset={-150}
                        duration={500}>Sobre Nosotros</Link>
                    <Link 
                        onClick={handleClick}
                        className={styles.linksStyles}
                        to="servicios"
                        smooth= {true}
                        offset={-140}
                        duration={500}>Servicios</Link>
                    <Link 
                        onClick={handleClick}
                        className={styles.linksStyles}
                        to="proyectos"
                        smooth= {true}
                        offset={-140}
                        duration={500}>Proyectos</Link>
                    <Link 
                        onClick={handleClick}
                        className={styles.linksStyles}
                        to="compraapt"
                        smooth= {true}
                        offset={-140}
                        duration={500}>Inmuebles En Venta</Link>
                    <Link 
                        onClick={handleClick}
                        to="contacto"
                        smooth= {true}
                        offset={-100}
                        duration={500}><button className={styles.button}> Contáctanos</button></Link>
                </div>
                <div 
                onClick={handleClick}
                className={`${styles.navIcon5} ${clicked ? styles.open : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`${styles.divBig} ${clicked ? styles.activeDiv : ''}`}></div>
            </div>
            <div style={{height: '2px', backgroundColor: 'black'}}></div>
        </div>
    )
}

export default NavBar;