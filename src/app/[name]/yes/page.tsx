'use client';

import React, { useEffect, useRef } from 'react';
import styles from './yes.module.css';
import Image from 'next/image'; // Import the 'Image' component

const Yes = () => {
    const yippie = '/yippie.gif'; // Define the 'yippie' variable

    
    // randomly smoothly slide all the yippie images around the screen

    const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
    refs.forEach((ref) => {
      if (ref.current) {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let xSpeed = Math.random() * 4 - 2;
        let ySpeed = Math.random() * 4 - 2;
        let rotation = Math.random() * 360;
        let rotationSpeed = Math.random() * 4 - 2;
        let frameCount = 0;

        const moveImage = () => {
            // @ts-ignore: Object is possibly 'null'.
            if (x + ref.current.offsetWidth > window.innerWidth || x < 0) {
                xSpeed = -xSpeed;
            }
            // @ts-ignore: Object is possibly 'null'.
            if (y + ref.current.offsetHeight > window.innerHeight || y < 0) {
                ySpeed = -ySpeed;
            }
            x += xSpeed;
            y += ySpeed;
            rotation += rotationSpeed;

            // Change velocities every 100 frames
            if (frameCount % 500 === 0) {
                xSpeed = Math.random() * 4 - 2;
                ySpeed = Math.random() * 4 - 2;
            }
            // @ts-ignore: Object is possibly 'null'.
            ref.current.style.position = 'absolute';
            // @ts-ignore: Object is possibly 'null'.
            ref.current.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

            frameCount++;
            requestAnimationFrame(moveImage);
            };
            moveImage();
      }
    });
  }, []);

    

    return (
        <body className={styles.body}>
            <div className={styles.stack}>
                {refs.map((ref, index) => (
                    <div key={index} ref={ref} className={styles.movingImage}>
                        <Image src={yippie} alt="yippie" width={200} height={200} />
                    </div>
                ))}

                <div className={styles.container}>
                    <Image className={styles.valentinesDay} src={"/valentinesDay.png"} alt="valentinesDay" width={200} height={200} />
                    <h1>Yippie! You said yes!</h1>
                    <div>
                        <h2>Thanks for being my Valentine!</h2>
                        <h2>Let&rsquo;s make this a day to remember!</h2>
                    </div>
                    <div className={styles.heartContainer}>
                        <Image className={styles.heart} src={"/heart.png"} alt="heart" width={100} height={100} />
                        <Image className={styles.heart2} src={"/heart2.png"} alt="heart" width={100} height={100} />
                    </div>

                </div>
                
            </div>
        </body>
    );
};

export default Yes;
