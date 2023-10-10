
import React from "react";
import {Link} from 'react-scroll';
import styles from './NavBar.module.css';

const NavBar = () => {
    return(
        <div>
            <div className={styles.divGeneral}>
                <div>
                    <img style={{margin: '20px', height: '80px'}} alt={'Logo Empresa'} src="https://i.ibb.co/ph0TnLj/Recurso-3.png"/>
                </div>
                <div style={{alignContent: 'center'}}>
                    <Link 
                        className={styles.linksStyles}
                        to="inicio"
                        smooth= {true}
                        offset={-180}
                        duration={500}>Inicio</Link>
                    <Link 
                        className={styles.linksStyles}
                        to="sobrenosotros"
                        smooth= {true}
                        offset={-150}
                        duration={500}>Sobre Nosotros</Link>
                    <Link 
                        className={styles.linksStyles}
                        to="servicios"
                        smooth= {true}
                        offset={-140}
                        duration={500}>Servicios</Link>
                    <Link 
                        className={styles.linksStyles}
                        to="proyectos"
                        smooth= {true}
                        offset={-100}
                        duration={500}>Proyectos</Link>
                    <Link 
                        className={styles.linksStyles}
                        to="compraapt"
                        smooth= {true}
                        offset={-100}
                        duration={500}>Compra Apartamento</Link>
                    <Link 
                        to="contacto"
                        smooth= {true}
                        offset={-100}
                        duration={500}><button className={styles.button}> Contáctanos</button></Link>
                </div>
            </div>
            <div style={{height: '2px', backgroundColor: 'black'}}></div>
        </div>
    )
}

export default NavBar;