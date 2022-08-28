function MyRecipesComponent({label, image, diet, ingredients, link}) {
    
    


    return(
        <div>
            <div className="container">
                <h2>{label}</h2>
            </div>

            <div className="container">
                <p>{diet}</p>
            </div>

            <div className="container">
                <img className="foodpic" src={image} width="300px" alt="food"/>
            </div>
            
            
            <ul className="list">
                {ingredients.map(ingredient => (
                    <li><img src="https://img.icons8.com/ios-filled/2x/checked.png" className="icon" alt="icon"/>{ingredient}</li>
                ))}
            </ul>
            


            <div className="container">
                <a href={link}><button className="instructions">Cooking Instructions</button></a>
            </div>


        </div>
    )
}

export default MyRecipesComponent;