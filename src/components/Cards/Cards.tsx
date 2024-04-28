import { FC } from "react";
import { Card } from "../Card/Card";
import styles from "./Cards.module.scss";

interface IResponse {
  bgColor: "string";
  id: "string";
  image: "string";
  name: "string";
  tags: string[];
}

interface IData{
    data:IResponse[];

}

export const Cards: FC<IData> = ( {data} ) => {


  return (
    <div className={styles.cards}>
      {data.map((item)=><Card {...item} key={item.id} />)} 

     
    </div>
  );
};
