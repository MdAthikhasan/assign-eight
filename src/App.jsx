 import React from 'react'
 import Photo from './Customhook/Photo';
import Album from './Customhook/Album';
import Todos from './Customhook/Todos';

 const App = () => {
   return (
     <div style={{display:'grid' ,gridTemplateColumns:'repeat(4,1fr)', gap:'10px'}}> 
       <Photo />
       <Album />
       <Todos/>

     </div>
   )
 }
 
 export default App