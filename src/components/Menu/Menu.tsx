import { ChangeEvent, FC, useState } from "react";
import styles from './Menu.module.scss';

interface IFilter {
  setFilter: (filter: string) => void;
}


export const Menu : FC<IFilter> = ({setFilter}) => {
  const [value, setValue] = useState('all');
  
  const changeValue = (e: ChangeEvent<HTMLInputElement>) =>{
    setValue(e.target.id);
    setFilter(e.target.value);
  }



  return (
    <div className={styles.inputs}>
       
      <input type="radio" className={styles.input} name="themes" id="all" value="Все темы" checked={value == 'all' ? true : false}  onChange={e => changeValue(e)}/>
      <label className={value == 'all' ? styles.label_checked : styles.label} htmlFor="all"><span className={styles.span}>Все темы</span></label> 
      <input type="radio" className={styles.input} name="themes" id="logic" value="Логика и мышление" checked={value == 'logic' ? true : false} onChange={e => changeValue(e)} />
      <label className={value == 'logic' ? styles.label_checked : styles.label} htmlFor="logic"><span className={styles.span}>Логика и мышление</span></label> 
      <input type="radio" className={styles.input} name="themes" id="riddle" value="Загадки" checked={value == 'riddle' ? true : false} onChange={e => changeValue(e)}/>
      <label className={value == 'riddle' ? styles.label_checked : styles.label} htmlFor="riddle"><span className={styles.span}>Загадки</span></label> 
      <input type="radio" className={styles.input} name="themes" id="puzzles" value="Головоломки" checked={value == 'puzzles' ? true : false} onChange={e => changeValue(e)}/>
      <label className={value == 'puzzles' ? styles.label_checked : styles.label} htmlFor="puzzles"><span className={styles.span}>Головоломки</span></label> 
      <input type="radio" className={styles.input} name="themes" id="travels" value="Путешествия" checked={value == 'travels' ? true : false} onChange={e => changeValue(e)}/>
      <label className={value == 'travels' ? styles.label_checked : styles.label} htmlFor="travels"><span className={styles.span}>Путешествия</span></label> 
    </div>
  );
};
