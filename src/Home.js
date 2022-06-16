import { useState,useEffect} from "react";
import Blog_list from "./blog_list";

const Home = () => {
    const [error,setError]=useState(null);
    const [blogs,setBlogs] = useState(null);
    const [isPending, setIsPending]=useState(true);
    // const handleDelete = (id)=>{
    //     const newBlogs= blogs.filter(blog=>blog.id !== id);
    //     setBlogs(newBlogs);
    // }
    useEffect(()=>{
        fetch('http://localhost:8000/blogs').then(res=>{
            return res.json();
            if(!res.ok){
                throw Error('Error ');
            }
        }).then((data)=>{
            
            setBlogs(data);
            setIsPending(false);
            setError(null);
        }).catch((err)=>{
            setError(err.message);
            setIsPending(false);
        })
    },[]);
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div> Loading .... </div>}
            {blogs && <Blog_list blogs={blogs} title="All Blogs"  />} 
            
        </div>
     );
}
 
export default Home;