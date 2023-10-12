
import React, { useEffect, useRef, useState } from "react";
import styles from "./Proyectos.module.css";
import {data} from "../../assets/data";

const Proyectos = () => {

  return(
    <div>
      <h2 style={{
        display: 'flex', 
        justifyContent: 'center'}}>
        <span style={{color: '#3b3e40', marginTop: '20px'}}>RROYECTOS</span></h2>
    </div>
  )

    // const listRef = useRef();
    // const [currentIndex, setCurrentIndex] = useState(0);
  
  
    // useEffect(() => {
    //   const listNode = listRef.current;
    //   const imgNode = listNode.querySelectorAll("li > img")[currentIndex];
  
    //   if (imgNode) {
    //     imgNode.scrollIntoView({
    //       behavior: "smooth"
    //     });
    //   }
  
    // }, [currentIndex]);
  
  
    // const scrollToImage = (direction) => {
    //   if (direction === 'prev') {
    //     setCurrentIndex(curr => {
    //       const isFirstSlide = currentIndex === 0;
    //       return isFirstSlide ? 0 : curr - 1;
    //     })
    //   } else {
    //     const isLastSlide = currentIndex === data.length - 1;
    //     if (!isLastSlide) {
    //       setCurrentIndex(curr => curr + 1);
    //     }
    //   }
    // }
  
    // const goToSlide = (slideIndex) => {
    //   setCurrentIndex(slideIndex);
    // }
  
    // return (
    //   <div style={{height: '720px'}}>
    //     <h2 style={{
    //       display: 'flex', 
    //       justifyContent: 'center'}}>
    //       <span style={{color: '#3b3e40', marginTop: '20px'}}>RROYECTOS</span></h2>
    //     <h3 style={{
    //       display: 'flex', 
    //       justifyContent: 'center'}}>
    //       <span style={{color: '#3b3e40', marginTop: '20px'}}>NOMBRE DEL CONJUNTO</span></h3>
    //     <div className={styles.mainContainer}>
    //       <div className={styles.sliderContainer}>
    //         <button className={styles.leftArrow} onClick={() => scrollToImage('prev')}>&#10092;</button>
    //         <button className={styles.rightArrow} onClick={() => scrollToImage('next')}>&#10093;</button>
    //         <div className={styles.containerImages}>
    //           <ul className={styles.divUl} ref={listRef}>
    //             {
    //               data.map((item) => {
    //                 return (
    //                   <li className={styles.divLi} key={item.id}>
    //                     <img className={styles.image} src={item.imgUrl} width={600} height={400} />
    //                   </li>)
    //               })
    //             }
    //           </ul>
    //         </div>
    //         <div className={styles.dotsContainer}>
    //           {
    //             data.map((_, idx) => (
    //               <button key={idx}
    //                 className={`${styles.dotContainerItem} ${idx === currentIndex ? styles.active : ""}`}
    //                 onClick={() => goToSlide(idx)}>
    //                 &#9865;
    //               </button>))
    //           }
    //         </div>
    //       </div>
    //     </div >
    //   </div>
    // )
}

export default Proyectos;


