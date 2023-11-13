import { useState, useEffect } from 'react';

const useFetchData = (source) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');


  useEffect(() => {
    async function fetchData() {
      try {

        const data = await fetch(source);
        const result = await data.json();

        if (result) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        setError(err.message)
      }
    }

    fetchData()
  }, [source])

  return [loading, error, data]
}

export default useFetchData;