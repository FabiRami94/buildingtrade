
import React from "react";
import styles from "./ApartamentoCard.module.css";
import { NavLink } from "react-router-dom";
import {IoLocation} from "react-icons/io5";

const ApartamentoCard = ({ id, imgUrl, localizacion, precio, descripcionBasica, datos }) => {
    return (
        <NavLink to={`/detalle/${id}`} style={{textDecoration: 'none'}}>
            <div className={styles.divPrincipal}>
                <img className={styles.imageApto} src={imgUrl} alt="apartamento"/>
                <span><IoLocation/>Localización: {localizacion}</span>
                <h3>{precio}</h3>
                <span>{descripcionBasica}</span>
                <span>{datos}</span>
            </div>
        </NavLink>
    )
};

export default ApartamentoCard;