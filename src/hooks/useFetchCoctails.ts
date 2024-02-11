import { useState, useEffect } from "react";


export const useFetchCoctails = (requestName: string, queryData: string) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${requestName}.php?${queryData}`);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [requestName ,queryData]);
  return { data };
};