import { useState, useEffect } from 'react';
import axios from 'axios';

export const useResources = (resource) => {
  const [resources, setResources] = useState([]);
  useEffect( () => {
    ( async () => {
      const response = await axios.get(
        `http://jsonplaceholder.typicode.com/${resource}`
      )
      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources
}
