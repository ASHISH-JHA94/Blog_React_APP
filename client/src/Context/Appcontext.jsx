import { createContext,useState } from "react";
import { baseUrl } from "../baseUrl";
//create object using create contest
export const AppContext = createContext();


export default function AppcontextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null);

    //data filling
    async function fetchBlogPosts(page=1){
        setLoading(true);
        try{
            let url = `${baseUrl}?page=${page}`;
            const response=await fetch(url);
            const output=await response.json();
            console.log(output);
            
            setPage(page);
            setPosts(output?.posts);
            setTotalPages(output?.totalPages);

        }catch(err){
            console.log(err);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function PageChangeHandler(page){
        setPage(page);
        fetchBlogPosts(page);

    }

    const value = {
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        loading,
        setLoading,
        PageChangeHandler,
        fetchBlogPosts
    };

    return <AppContext.Provider value={value}>
                {children}
            </AppContext.Provider>



        


 }

   

   



