
import React, { useState } from "react";
import {GrInstagram} from "react-icons/gr";
import {IoLocation} from "react-icons/io5";
import {HiOutlinePhone} from "react-icons/hi";
import {AiOutlineMail} from "react-icons/ai";
import styles from "./Contact.module.css";
import validation from "../../assets/validation.js";

const Contact = () => {

    const [newInput, setNewIInput] = useState(
        {
            nombre: "",
            correo: "",
            mensaje: "",
        }
    );

    const [errors, setErrors] = useState({
        nombre: "Campo obligatorio*",
        correo: "Campo obligatorio*",
        mensaje: "Campo obligatorio*",
    });

    const onChangeHandler = (event) => {

        setNewIInput({...newInput, [event.target.name] : event.target.value})
        console.log(event.target.value)
        validation(
            {...newInput, [event.target.name]: event.target.value}, 
            event.target.name, 
            setErrors, 
            errors
        );
        console.log(errors)
    }

    const buttonDisable = () => {
        let isDisable;
        for(let error in errors){
            if(errors[error] === ""){
                isDisable = false
            } else {isDisable = true; 
                break};
        } 
        return isDisable;
    }


    return(
        <div style={{backgroundColor: '#1d1d1b', height: '410px', textAlign: 'center  '}}>
            <h2 className={styles.title}>CONTÁCTANOS</h2>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <form 
                    action="/envioDeEmail"
                    method="POST"
                    enctype="multipart/form-data" 
                    style={{
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center'}}>
                    <div>
                        <label className={styles.letter}>Nombre:</label>
                        <input onChange={onChangeHandler} name="nombre" className={styles.input} placeholder="Escribe un nombre..."></input>
                    </div>
                    <p className={styles.errorsLetter}>{errors.nombre}</p>
                    <div>
                        <label className={styles.letter}>Correo:</label>
                        <input onChange={onChangeHandler} name="correo" style={{marginLeft: '23px'}} className={styles.input} placeholder="Escribe un correo..."></input>
                    </div>
                    <p className={styles.errorsLetter}>{errors.correo}</p>
                    <div>
                        <label className={styles.letter}>Mensaje:</label>
                        <textarea 
                            onChange={onChangeHandler}
                            name="mensaje"
                            style={{outlineColor: '#a61a16', marginBottom: '-2px'}} 
                            className={styles.input} 
                            rows="5" cols="60" 
                            placeholder="Escribe un mensaje..."></textarea>
                    </div>
                    <p className={styles.errorsLetter}>{errors.mensaje}</p>
                    <button type="submit" disabled={buttonDisable()} className={styles.sendButton}>Enviar</button>
                </form>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h3 className={styles.subtitles} style={{marginTop: '0px'}}>Teléfono</h3>
                    <span className={styles.letter}>
                        <HiOutlinePhone  size={20} style={{color: '#a61a16'}}/>  +57 302 772 2941</span>
                    <h3 className={styles.subtitles}>E-mail</h3>
                    <span className={styles.letter}>
                        <AiOutlineMail  size={20} style={{color: '#a61a16'}}/>  bt.buildingtrade@gmail.com</span>
                    <h3 className={styles.subtitles}>Locación</h3>
                    <span className={styles.letter}>
                        <IoLocation size={20} style={{color: '#a61a16'}}/>  Barranquilla, Colombia</span>
                </div>
            </div>  
            <div style={{
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginTop: '10px'}}>     
                <p style={{color: "#f2f2f2"}} >Copyright © Building Trade 2022 All rights reserved</p>
                <a href="https://www.instagram.com/buildingtrade.co/" target="__blank">
                    <GrInstagram style = {{padding: '10px'}} className={styles.icon} size={20}/>
                </a>
            </div> 
        </div>
    )
};

export default Contact;