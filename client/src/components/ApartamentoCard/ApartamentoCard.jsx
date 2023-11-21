
import React from "react";
import styles from "./ApartamentoCard.module.css";
import { NavLink } from "react-router-dom";
import {IoLocation} from "react-icons/io5";

const ApartamentoCard = ({ id, imgUrl, localizacion, precio, descripcionBasica, datos }) => {
    return (
        <NavLink to={`/detalle/${id}`} style={{textDecoration: 'none'}}>
            <div className={styles.divPrincipal}>
                <img className={styles.imageApto} src={imgUrl} alt="apartamento"/>
                <span style={{margin: '0.5rem 0rem 0rem 1rem'}}><IoLocation size={20} color="#a61a16"/>Localización: {localizacion}</span>
                <h3 style={{margin: '0.5rem 0.5rem 0.5rem 2rem'}}>{precio}</h3>
                <span style={{margin: '0.2rem auto'}}>{descripcionBasica}</span>
                <span style={{margin: '0.5rem auto'}}>{datos}</span>
            </div>
        </NavLink>
    )
};

export default ApartamentoCard;