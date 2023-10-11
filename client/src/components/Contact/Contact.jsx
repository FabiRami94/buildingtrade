
import React, { useState } from "react";
import {GrInstagram} from "react-icons/gr";
import {IoLocation} from "react-icons/io5";
import {HiOutlinePhone} from "react-icons/hi";
import {AiOutlineMail} from "react-icons/ai";
import styles from "./Contact.module.css";

const Contact = () => {

    const [newInput, setNewIInput] = useState(
        {
            nombre: "",
            correo: "",
            mensaje: "",
        }
    );

    const onChangeHandler = (event) => {

        setNewIInput({...newInput, [event.target.name] : event.target.value})
        console.log(event.target.value)
    }


    return(
        <div style={{backgroundColor: 'black', height: '360px', textAlign: 'center  '}}>
            <h2 className={styles.title}>CONTÁCTANOS</h2>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div>
                        <label className={styles.letter}>Nombre:</label>
                        <input onChange={onChangeHandler} name="nombre" className={styles.input} placeholder="Escribe un nombre..."></input>
                    </div>
                    <div>
                        <label className={styles.letter}>Correo:</label>
                        <input onChange={onChangeHandler} name="correo" style={{marginLeft: '23px'}} className={styles.input} placeholder="Escribe un correo..."></input>
                    </div>
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
                </div>
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
            <button>Enviar</button>
            <a href="https://www.instagram.com/buildingtrade.co/" target="_black">
                <GrInstagram style = {{padding: '20px'}} className={styles.icon} size={40}/>
            </a>
        </div>
    )
};

export default Contact;