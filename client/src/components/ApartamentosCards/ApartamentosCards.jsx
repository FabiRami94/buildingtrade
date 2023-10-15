
import React from "react";
import ApartamentoCard from "../ApartamentoCard/ApartamentoCard";
import styles from "./ApartamentosCards.module.css";
import { aptos } from "../../assets/aptos";

const ApartamentosCards = () => {
    return(
        <div className={styles.cards}>
            {aptos.map((apto) => (
                <ApartamentoCard 
                    key={apto.id}
                    id={apto.id} 
                    imgUrl={apto.imgUrl} 
                    localizacion={apto.localizacion}
                    precio={apto.precio}
                    descripcion={apto.descripcion}
                    datos={apto.datos}
                />
            ))}
        </div>
    )
};

export default ApartamentosCards;