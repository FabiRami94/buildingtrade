
import React from "react";
import styles from  "./Home.module.css";

const Home = () => {
    return(
        <div className={styles.sliderBox}>
            <ul>
                <li>
                    {/* <img src="" alt="slider 1"/> */}
                    <div style={{backgroundColor: 'red', height: '800px', width: '100%'}}></div>
                    <span className={styles.texto}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptatum 
                        sint sed tempora nisi cupiditate sit omnis rerum vel labore qui quos atque 
                        sunt nihil eligendi assumenda distinctio, doloribus minus.</span>
                </li>
                <li>
                    {/* <img src="" alt="slider 1"/> */}
                    <div style={{backgroundColor: 'blue', height: '800px', width: '100%'}}></div>
                    <span className={styles.texto}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptatum 
                        sint sed tempora nisi cupiditate sit omnis rerum vel labore qui quos atque 
                        sunt nihil eligendi assumenda distinctio, doloribus minus.</span>
                </li>
                <li>
                    {/* <img src="" alt="slider 1"/> */}
                    <div style={{backgroundColor: 'green', height: '800px', width: '100%'}}></div>
                    <span className={styles.texto}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptatum 
                        sint sed tempora nisi cupiditate sit omnis rerum vel labore qui quos atque 
                        sunt nihil eligendi assumenda distinctio, doloribus minus.</span>
                </li>
                <li>
                    {/* <img src="" alt="slider 1"/> */}
                    <div style={{backgroundColor: 'yellow', height: '800px', width: '100%'}}></div>
                    <span className={styles.texto}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est voluptatum 
                        sint sed tempora nisi cupiditate sit omnis rerum vel labore qui quos atque 
                        sunt nihil eligendi assumenda distinctio, doloribus minus.</span>
                </li>
            </ul>
        </div>
    )
}

export default Home;