'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from './name.module.css';
import Image from 'next/image'; // Import the Image component

const InitialPage = () => {
    let name = usePathname();
    name = name.replace('/', '');
    return (
        <body className={styles.body}>
            <div className={styles.stack}>
                <div className={styles.container}>
                    <Image className={styles.koala} src="/koala.png" alt='koala' width={200} height={200}/>
                    <h1>Be my Valentine {name}</h1>
                    <div className={styles.question_container}>
                        <h2>Do you want to be my Valentine?</h2>
                        <div className={styles.button_container}>
                            {/* link to /[name]/yes with image*/}
                            <div className={styles.yes_button}>
                                <a href={`/${name}/yes`}>
                                    <img src="/yes.png" alt="Yes" width={100} height={100}/>
                                </a>
                            </div>
                            {/* link to /[name]/no */}
                            <div className={styles.no_button}>
                                <a href={`/${name}/no`}>
                                    <img src="/no.png" alt="No" width={100} height={100}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default InitialPage;
