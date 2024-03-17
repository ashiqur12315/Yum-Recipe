
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Body from './components/Body/Body'
import Carts from './components/Body/Carts';
import WantToCook from './components/Body/WantToCook';
import Header from './components/Header/Header'

import { useEffect, useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch('./recipe.json')
      .then(res => res.json())
      .then(data => setRecipes(data))

  }, [])

  const [wantToCook, setWantToCook] = useState([])
  const [currentCook, setCurrentCook] = useState([])
  
  const handleWantToCook = (item) =>{
    const ifExist = wantToCook.find( i => i.recipe_id == item.recipe_id);
    if (!ifExist){
      setWantToCook([...wantToCook, item]);
    }
    else{
      toast('Already exists in the Cooking item')
    }
  }
  
  const handleDelete = item => {
    const newWantToCook = wantToCook.filter( itm => itm.recipe_id != item.recipe_id);
    setWantToCook(newWantToCook);
    setCurrentCook([...currentCook, item])
    console.log(currentCook)
  }


  return (
    <>

      <Header></Header>
      <Body></Body>
      <ToastContainer />
      <div className='flex gap-4 justify-between'>
        <div className="grid grid-cols-2 w-6/10 gap-4">
          {
            recipes.map(recipes => <Carts recipes={recipes} handleWantToCook={handleWantToCook} key={recipes.recipe_id}></Carts>)
          }
        </div>
        <div className='flex-1 border-2 py-8 rounded-2xl'>
          <WantToCook wantToCook={wantToCook} handleDelete={handleDelete} currentCook={currentCook}></WantToCook>
        </div>
      </div>

    </>
  )
}

export default App
