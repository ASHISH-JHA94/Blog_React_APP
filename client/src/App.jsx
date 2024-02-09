
import {React,useContext,useState,useEffect} from 'react'
import Blog from './Components/Blog'
import Pagination from './Components/Pagination'
import Header from './Components/Header'
import {AppContext} from './Context/Appcontext'
import './App.css'




function App() {
  const {fetchBlogPosts}=useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, [])
  

  return (
    <div className='w-full h-full flex  flex-col justify-center items-center text-2xl gap-x-1'>
      <Header></Header>
      <Blog></Blog>
      <Pagination></Pagination>
    </div>
  )
}


export default App
