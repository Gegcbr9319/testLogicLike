import { FC } from 'react';
import styles from './Card.module.scss';


interface IResponse {
    bgColor : 'string';
    id : 'string';
    image : 'string';
    name : 'string';
    tags : string[]
    }

export const Card : FC<IResponse> = ({bgColor, id, image, name, tags}) => {

    return (
       <div className={styles.card}>
        <div className={styles.img} style={{backgroundColor:bgColor}}>
        <img src={image} alt={name} style={{height:'100%'}}/>
        </div>
        
        <p className={styles.name}>{name}</p>
       </div>
    )
}