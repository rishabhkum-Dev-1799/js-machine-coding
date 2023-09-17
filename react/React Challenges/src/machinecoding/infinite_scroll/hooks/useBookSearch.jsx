import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useBookSearch = (query, pageNumber) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data,setData]=useState([]);
  useEffect(() => {
    setLoading(true);
    let cancel;
    axios({
      method: 'GET',
      url: 'https://openlibrary.org/search.json',
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c)=>cancel=c)
    }).then(response => {
      setData(prevValue=>[...new Set ([...prevValue,...response.data?.docs])])
      setLoading(false)
    }).catch((error) => {
      if(axios.CanceledError){
        setLoading(false)
        return
      }
      console.log(error.message);
      setError((prevValue)=>error?.message)
      setLoading(false)
    })

    return ()=>cancel();
  }, [query, pageNumber])
  return {
    loading,
    error,
    data
  }
}

export default useBookSearch