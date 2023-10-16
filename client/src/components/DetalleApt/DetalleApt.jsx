
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { aptos } from "../../assets/aptos.js"

const DetalleApt = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const backHandler = () => {
        navigate(-1);
    }

    const infoApto = aptos[id - 1]

    return(

        <div>
            <button onClick={backHandler}>BACK</button>
            <h1>Soy el Apto #{id}</h1>
            <h3>Dirección</h3>
            <h2>{infoApto.precio}</h2>
            <a href="https://wa.me/+573004770111" target="_blank">
                <button>Solicita visita WZZP</button>
            </a>
            <img src={infoApto.imgUrl} alt={`Apto #${id}`}/>
            <img src="" alt="Miniaturas" ></img>
            <h4>{infoApto.descripcionExtensa} CCOMPLETA</h4>
            <span>{infoApto.datos} MÁS COMPLETOS Y GRAFICOS</span>

        </div>
    )
};

export default DetalleApt;