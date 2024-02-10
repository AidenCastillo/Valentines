'use client';
import { useState } from 'react';
import styles from './seriously.module.css';
import { usePathname } from 'next/navigation';

const Seriously = () => {
    const [value, setValue] = useState('');
    let name = usePathname();
    name = name.replace('/', '');
    name = name.replace('/no/really/seriously', '');
    

    const handleChange = (event: { target: { value: String; }; }) => {
        const inputValue = event.target.value;
        const targetWord = 'dateMe?';
        const newValue = targetWord.substr(0, inputValue.length);
        setValue(newValue);

        if (newValue === targetWord) {
        window.location.href = `/${name}/yes`;
        }
    };

    return (
        <div className={styles.body}>
            <div className={styles.stack}>
                <h1>Seriously?</h1>
                <p>How could you seriously say no????</p>
                <p>There&apos;s no going back now</p>
                <p>Type &quot;confirm&quot;</p>
                <input type="text" id="" name="" value={value} onChange={handleChange}/>
            </div>
        </div>
    );
};

export default Seriously;
