import React , {useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Posts from './components/Posts';
import Pagination from './components/Pagination';

const App = () => {
  const[posts,setPosts] = useState([]);
  const[loading,setLoading] = useState(false)
  const[currentPage, setCurrentPage] = useState(1)
  const[postsPerPage , setPostsPerPage] = useState(10)

  useEffect(() =>{
    const fetchPosts = async () => {
      setLoading(true)
      const result =  await axios.get('https://jsonplaceholder.typicode.com/posts') 
    
      setPosts(result.data)
      setLoading(false)
    }
    fetchPosts()
  },[])

  const indexOfLastPost = currentPage  * postsPerPage ;
  const indexOfFirstPost = indexOfLastPost - postsPerPage ;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
  return (
    <div className="container mt-5">
      <h3 className='text-primary mb-3'>React Pagination</h3>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totatlPosts={posts.length}  paginate={paginate} />
    </div>
  );
}

export default App;
