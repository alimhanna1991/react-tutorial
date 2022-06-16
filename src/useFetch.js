import {useState, useEffect } from "react";
const useFetch = (url)=>{
    const [error,setError]=useState(null);
    const [data,setData] = useState(null);
    const [isPending, setIsPending]=useState(true);
    useEffect(()=>{
        fetch(url).then(res=>{
            return res.json();
            if(!res.ok){
                throw Error('Error ');
            }
        }).then((data)=>{
            
            setData(data);
            setIsPending(false);
            setError(null);
        }).catch((err)=>{
            setError(err.message);
            setIsPending(false);
        })
    },[url]);
    return {data, isPending,error}
}
export default useFetch;