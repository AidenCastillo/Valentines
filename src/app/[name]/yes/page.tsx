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
          if (x + ref.current.offsetWidth > window.innerWidth || x < 0) {
            xSpeed = -xSpeed;
          }
          if (y + ref.current.offsetHeight > window.innerHeight || y < 0) {
            ySpeed = -ySpeed;
          }
          x += xSpeed;
          y += ySpeed;
          rotation += rotationSpeed;

          // Change velocities every 100 frames
          if (frameCount % 1000 === 0) {
            xSpeed = Math.random() * 4 - 2;
            ySpeed = Math.random() * 4 - 2;
          }

          ref.current.style.position = 'absolute';
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
                    <h1>Yippie! You said yes!</h1>
                    <div>
                        <h2>Thanks for being my Valentine!</h2>
                    </div>
                </div>
                
            </div>
        </body>
    );
};

export default Yes;
