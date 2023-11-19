
import styles from  "./Home.module.css";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaWhatsappSquare } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";

const Home = () => {

    const swiperRef = useRef(null);

    useEffect(() => {

      const interval = setInterval(() => {
        // Cambia a la siguiente diapositiva
        if (swiperRef.current) {
          swiperRef.current.slideNext();
        }
      }, 4000);
  
      return () => {
        // Limpia el temporizador al desmontar el componente
        clearInterval(interval);
      };

    }, []);
  
    return(
        <div>
             <Swiper 
                className={styles.swiperPrincipal}
                loop={true}
                spaceBetween={0} // Espacio entre imagenes.
                slidesPerView={1} // Cantidad de imagenes a la vez.
                speed={3000}  // Tiempo de transición de imagenes.
                onSwiper={(swiper) => (swiperRef.current = swiper)}>
                <SwiperSlide className={styles.slide1}>
                    <div className={styles.container}>Slide 1</div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide2}>
                    <div className={styles.container}>Slide 2</div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide3}>
                    <div className={styles.container}>Slide 3</div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide4}>
                    <div className={styles.container}>Slide 4</div>
                </SwiperSlide>
            </Swiper>
            <a href="https://wa.me/+573004770111" target="_blank" className={styles.contactoDiv}>
              <span style={{
                fontSize: '2rem', 
                color: 'white', 
                fontWeight: 'bold', 
                marginRight: '1rem'
                }}>Contáctanos</span>
              <FaWhatsappSquare size={60} color="rgb(37, 211, 102)"/>
            </a>
        </div>
    )
}

export default Home;