import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    setData(null);
    setError(null);

    fetch(`http://127.0.0.1:9554/${endpoint}`, {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setLoading(false);
        setError(err);
      });

    return () => abortController.abort();
  }, [endpoint]);
  return { data, loading, error };
};

export default useFetch;
