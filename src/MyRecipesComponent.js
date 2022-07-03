function MyRecipesComponent({label, image, diet, ingredients, link, showMore}) {
    
    


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
            
            <div className="container">
            <ul>
                {ingredients.map(ingredient => (
                    <li><img src="https://img.icons8.com/ios-filled/2x/checked.png" className="icon" alt="icon"/>{ingredient}</li>
                ))}
            </ul>
            </div>

            {/* <div>
                <p>
                    {showMore ? ingredients :ingredients.substring(0, 220)}
                    <button onClick ={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
                </p>
            </div> */}

            <div className="container">
                <a href={link}><button className="instructions">Cooking Instructions</button></a>
            </div>


        </div>
    )
}

export default MyRecipesComponent;