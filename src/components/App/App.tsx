import { useState, useEffect } from "react";
import { Cards, Menu } from "../index";

import styles from "./App.module.scss";
import axios from "axios";

interface IResponse {
  bgColor: "string";
  id: "string";
  image: "string";
  name: "string";
  tags: string[];
}

export const App = () => {
  const [filter, setFilter] = useState("");
  const [response, setRespone] = useState<IResponse[]>([]);
  const [filterResponce, setFilterResponce] = useState<IResponse[]>(response);

  const getCourses = async () => {
    try {
      const response = await axios.get(
        "https://logiclike.com/docs/courses.json"
      );
     
      if (response.data) {
        setRespone(response.data);
        setFilterResponce(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getFilterResponce = () => {
    if (filter === "Все темы") {
      setFilterResponce(response);
    } else {
      const arr: IResponse[] = [];

      response.map((item) => {
        if (item.tags.includes(filter)) {
          arr.push(item);
        }
      });

      setFilterResponce(arr);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  useEffect(() => {
    getFilterResponce();
  }, [filter]);

  return (
    <div className={styles.layout}>
      <Menu setFilter={setFilter} />
      <Cards data={filterResponce || []} />
    </div>
  );
};
