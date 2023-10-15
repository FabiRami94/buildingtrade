
import React, { useState } from "react";
import styles from "./Proyectos.module.css";
import {data} from "../../assets/data";

const Proyectos = () => {

  const [imageShow, setImageShow] = useState(0);
  const [counter, setCounter] = useState(0);
  const [proyectCounter, setProyectCounter] = useState(1);

  const onClickHandler = (event) => {

    const {id} = event.target;

    if(id === 'Left2'){
      function moveToLeft () {
        setCounter(counter - 1)
        if(counter > 0){
          setImageShow(imageShow + 20)
        } else{
          setImageShow(-80)
          setCounter(4)
        }
      }
      moveToLeft();
    } else {
      
      function moveToRigth () {
        setCounter(counter + 1)
        if(counter < 4){
          setImageShow(imageShow - 20)
        } else{
          setImageShow(0);
          setCounter(0);
        }
      }
      moveToRigth();
    }
  }

  const onClickHandlerProyect = (event) => {

    const {id} = event.target;

    if(id === 'Left1'){

      function moveToLeftProyect () {
        setProyectCounter(proyectCounter - 1)
        if(proyectCounter <= 1){
          setProyectCounter(3)
          console.log(proyectCounter)
        }
      }
      moveToLeftProyect();
    } else {
      
      function moveToRigthProyect () {
        setProyectCounter(proyectCounter + 1)
        if(proyectCounter > 2){
          setProyectCounter(1)
          console.log(proyectCounter)
        }
      }
      moveToRigthProyect();
    }
  }

  return(
    <div>
      <h2 style={{
        display: 'flex', 
        justifyContent: 'center'}}>
        <span style={{color: '#3b3e40', marginTop: '20px'}}>RROYECTOS</span></h2>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <span id="Left1" onClick={onClickHandlerProyect} className={styles.flechaizquierda1}>&#8249;</span>
        <div className={styles.principalContainer}>
          <span id="Left2" onClick={onClickHandler} className={styles.flechaizquierda2}>&#8249;</span>
          <div className={styles.secondaryContainer}>
              <h2 style={{margin: '5px', textAlign: 'center'}}>{Object.keys(data[proyectCounter - 1])[0]}</h2>          
            <div className={styles.carruseles} style={{transform: `translateX(${imageShow}%)`}} id="slider">
              {
                data[proyectCounter - 1][`PROYECTO${proyectCounter}`].map((item) => (
                  <section key={item.id} className={styles.sliderSection}>
                    <img className={styles.image} alt={`foto ${item.id}`} src={item.imgUrl}/>
                  </section>
                ))
              }
            </div>
          </div>
          <span id="Rigth2" onClick={onClickHandler} className={styles.flechaderecha2}>&#8250;</span>
        </div>
        <span id="Rigth1" onClick={onClickHandlerProyect} className={styles.flechaderecha1}>&#8250;</span>
      </div>
    </div>
  )
}

export default Proyectos;


