'use client';
import styles from './really.module.css';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Really = () => {
  const [value, setValue] = useState(50);
  let name = usePathname();
  name = name.replace('/', '');
  name = name.replace('/no/really', '');

  const handleChange = (event: { target: { value: string | number; }; }) => {
    const numericValue = Number(event.target.value); // Convert to number
    setValue(100 - numericValue);

    if (numericValue === 100) {
      window.location.href = `/${name}/yes`;
    }
  };
  return (
    <div className={styles.body}>
      <div className={styles.stack}>
        <h1>Really?</h1>
        <p>Are you sure?</p>
        <p>Move the slider to the right to confirm</p>
        <div className={styles.slider_container}>
          <input type="range" min="0" max="100" className={styles.slider} id="myRange" value={value} onChange={handleChange}/>
        </div>
        
      </div>
    </div>
  );
}

export default Really;
