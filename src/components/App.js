// create your App component here
import { useEffect,useState } from "react";

function App(){
  
  const[dogImageUrl,setDogImageUrl]=useState(null)
useEffect(()=>{
fetch("https://dog.ceo/api/breeds/image/random")
.then((response)=>response.json())
.then((data)=>{
setDogImageUrl(data.message)
})

},[])
return(
  <div>
{dogImageUrl ?(
  <img src={dogImageUrl} alt="A Random Dog"/>
):(
  <p>Loading...</p>
)}

  </div>
)
}
export default App
