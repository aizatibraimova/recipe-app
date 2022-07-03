
import './App.css';
import { useEffect, useState} from "react";
import video from './nutrition.mp4';
import MyRecipesComponent from './MyRecipesComponent';


function App() {

  const MY_ID = "6d2a53d5";
  const MY_KEY = "655c08146c3a90640eefec24a8a39f55"  

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('salmon')

  useEffect(() => {
    fetchData();
  }, [wordSubmitted])

  const fetchData = async() => {
    const response = await fetch(`https:api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    // console.log(data.hits)
    setMyRecipes(data.hits)
  }


  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch)
  }



  return(
    <div className='App'>
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
        <h1>What Should I Eat? </h1>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Enter your ingredient(s). . .'
          onChange={myRecipeSearch} value={mySearch}>
          </input>

          <div className='container'>
          <button><img src='https://img.icons8.com/doodle/344/sunny-side-up-eggs.png' width="35px" alt='icon'/></button>
          </div>
        </form>
      </div>

      <div className='container'>
        {myRecipes.map(element => (
          <MyRecipesComponent
          label={element.recipe.label}
          image={element.recipe.image}
          diet={element.recipe.dietLabels}
          ingredients={element.recipe.ingredientLines}
          link={element.recipe.url}/>
        ))}

      </div>

    </div>
  )
}

export default App;
