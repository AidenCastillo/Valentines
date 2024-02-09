'use client';

import { usePathname } from 'next/navigation';
import styles from './no.module.css';
import Image from 'next/image';

const No = () => {
    let name = usePathname();
    name = name.replace('/', '');
    // remove the /no/ from the pathname
    console.log(name);
    name = name.replace('/no', '');

    return (
        <div className={styles.body}>
            <div className={styles.stack}>
                <Image src="/dogWithDuck.gif" alt="dog with duck" width={200} height={200} />
                <h1>Are you sure about that?</h1>
                <div className={styles.question_container}>
                    <h2>Do you really not want to be my Valentine?</h2>
                    <div className={styles.button_container}>
                        <div className={styles.yes_button}>
                            <a href={`/${name}/yes`}><Image src="/yes.png" alt="Yes" width={100} height={100} /></a>
                        </div>
                        <div className={styles.no_button}>
                            <a href={`/${name}/no/really`}><Image src="/no.png" alt="No" width={100} height={100} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default No;
