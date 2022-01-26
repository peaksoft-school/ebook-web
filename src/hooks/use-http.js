import { useState } from "react";
import { useEffect } from "react";
const useHttp = (config) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(config.url, config.data? 
            {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(config.data)
            }
            : {method: 'GET'}
        );
          const json = await res.json();
          setResponse(json);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }, []);
    return response;
  };
  
export default useHttp