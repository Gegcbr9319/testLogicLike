import { useState } from 'react';
import {Cards, Menu} from '../index';

import styles from './App.module.scss';
import axios from 'axios';

export const App = () => {
  const [filter, setFilter] = useState("");


  const getCourses = async () => {
    try {
      const response = await axios.get('https://logiclike.com/docs/courses.json');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  getCourses();

  return (
    <>
    <Menu />
    <h2>Start</h2>
     </>
  )
}


