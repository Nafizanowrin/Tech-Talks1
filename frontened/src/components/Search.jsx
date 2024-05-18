import React from 'react'
import { useGlobalContext } from '../context/Context'

function Search() {


const {query, searchPost} = useGlobalContext();

  return (


    <>

<div className="search-sec">

  <div className="search-img">
  <img src="https://miro.medium.com/v2/resize:fit:554/1*vuJHrhjlkx5H9XxB4zcwtA.jpeg"></img>
 </div>

  

    
   <form onSubmit={(e) => e.preventDefault()}>
    
    
    <div  className="search">

          <input
          
          type='text'
          placeholder='search here...'
          value={query}
          onChange={(e) => searchPost(e.target.value)} />
                 
                                                            
    </div>
    
   </form>   

   </div>
    </>
  )
}

export default Search