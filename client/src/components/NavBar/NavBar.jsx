
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
                        offset={-100}
                        duration={500}>Inicio</Link>
                    <Link 
                        className={styles.linksStyles}
                        to="contacto"
                        smooth= {true}
                        offset={-100}
                        duration={500}>Contáctanos</Link>
                </div>
            </div>
            <div style={{height: '2px', backgroundColor: 'black'}}></div>
        </div>
    )
}

export default NavBar;