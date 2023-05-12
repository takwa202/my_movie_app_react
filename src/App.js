import MovieList from "./components/MovieList";
import {mvl} from './components/Data'
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from "./components/Filter";
import AddMovies from "./AddMovies";
import {useState} from 'react';
import   './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Descreption from "./components/Descreption";

function App() {
  const [input,setInput] = useState('');
  const [mvls,setVml] = useState(mvl);
  const [rate,setRate] = useState(0) ;
 
 
const handelAdd = (newm) => {
  setVml([...mvls,newm])
}
 
const handleRating = (rate) => {
  setRate(rate)

  // other logic
}

// const filterstars =(rating)=>{
// setVml(mvls.filter((el)=>el.rating === rating));
//   }

  return (
    <div className="App">
<Routes>
<Route exact path='/' element={  

<div>
  <Filter  handleRating ={handleRating  } rating={rate}   setInput={setInput} /> 
  <MovieList mvl={mvls}  rating={rate} setRate = {setRate} input={input} setInput={setInput}   />
  <AddMovies handelAdd={handelAdd} />
</div>



} />
   <Route exact path='/desc/:id' element={<Descreption mvl={mvls} />} />
</Routes>

    </div>
   );
} 


export default App ;
