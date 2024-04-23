import { useState } from 'react';
import {Cards, Menu} from '../index';

import styles from './App.module.scss';

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
    <Menu />
    <h2>Start</h2>
     </>
  )
}


