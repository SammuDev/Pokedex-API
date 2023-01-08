import { useEffect, useState } from 'react';

const searchPokemons = ({url}: string) => {
  const [a, setA] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      setA(data)
    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    getData();
    console.log(getData());
  }),[];
}

export default searchPokemons
