import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        // console.log(data.todos);
      });
  }, []);

  return [data];
}

export default useFetch;
