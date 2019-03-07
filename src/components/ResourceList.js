import React from 'react';
import { useResources } from './hooks/useResources'

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  // const fetchResource = async(resource) => {
  //   const response = await axios.get(
  //     `http://jsonplaceholder.typicode.com/${resource}`
  //   );
  //   setResources(response.data);
  // }
  //
  // useEffect( () => {
  //   fetchResource(resource);
  // }, [resource])
  return (
    <ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>
  );
}

export default ResourceList;
