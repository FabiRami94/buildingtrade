
import React, { useEffect, useRef, useState } from "react";
import styles from "./Proyectos.module.css";
import {data} from "../../assets/data";

const Proyectos = () => {

    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
  
  
    useEffect(() => {
      const listNode = listRef.current;
      const imgNode = listNode.querySelectorAll("li > img")[currentIndex];
  
      if (imgNode) {
        imgNode.scrollIntoView({
          behavior: "smooth"
        });
      }
  
    }, [currentIndex]);
  
  
    const scrollToImage = (direction) => {
      if (direction === 'prev') {
        setCurrentIndex(curr => {
          const isFirstSlide = currentIndex === 0;
          return isFirstSlide ? 0 : curr - 1;
        })
      } else {
        const isLastSlide = currentIndex === data.length - 1;
        if (!isLastSlide) {
          setCurrentIndex(curr => curr + 1);
        }
      }
    }
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    }
  
    return (
      <div className={styles.mainContainer}>
        <h2 style={{display: 'flex', justifyContent: 'center'}}>
                <span style={{color: '#3b3e40', marginTop: '20px'}}>RROYECTOS</span></h2>
        <div className={styles.sliderContainer}>
          <div className={styles.leftArrow} onClick={() => scrollToImage('prev')}>&#10092;</div>
          <div className={styles.rightArrow} onClick={() => scrollToImage('next')}>&#10093;</div>
          <div className={styles.containerImages}>
            <ul ref={listRef}>
              {
                data.map((item) => {
                  return <li key={item.id}>
                    <img src={item.imgUrl} width={500} height={280} />
                  </li>
                })
              }
            </ul>
          </div>
          <div className={styles.dotsContainer}>
            {
              data.map((_, idx) => (
                <div key={idx}
                  className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                  onClick={() => goToSlide(idx)}>
                  &#9865;
                </div>))
            }
          </div>
        </div>
      </div >
    )
}

export default Proyectos;


