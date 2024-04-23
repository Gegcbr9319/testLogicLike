import { ChangeEvent, useState } from "react";




export const Menu = () => {
  const [value, setValue] = useState('Все темы');
  
  const changeValue = (e: ChangeEvent<HTMLInputElement>) =>{
    setValue(e.target.value);
  }
  return (
    <div>
       
      <input type="radio" name="themes" id="all" value="Все темы" checked={value == 'Все темы' ? true : false}  onChange={e => changeValue(e)}/>
      <label htmlFor="all">Все темы</label> 
      <input type="radio" name="themes" id="logic" value="Логика и мышление" checked={value == 'Логика и мышление' ? true : false} onChange={e => changeValue(e)} />
      <label htmlFor="logic">Логика и мышление</label> 
      <input type="radio" name="themes" id="riddle" value="Загадки" checked={value == 'Загадки' ? true : false} onChange={e => changeValue(e)}/>
      <label htmlFor="riddle">Загадки</label> 
      <input type="radio" name="themes" id="puzzles" value="Головоломки" checked={value == 'Головоломки' ? true : false} onChange={e => changeValue(e)}/>
      <label htmlFor="puzzles">Головоломки</label> 
      <input type="radio" name="themes" id="travels" value="Путешествия" checked={value == 'Путешествия' ? true : false} onChange={e => changeValue(e)}/>
      <label htmlFor="travels">Путешествия</label> 
    </div>
  );
};
