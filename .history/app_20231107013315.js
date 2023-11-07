const appId = "4b9421ae";
const appKey = "bbff63d7d53d545896d77f31eca36816";
const baseUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${appId}&app_key=${appKey}`;
const recipeContainer = document.querySelector("#recipe-container");

function loadRecipes(type="panner") {
    const url=baseUrl+ `&q=${type}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => renderRecipes(data.hits))
    .catch((error) => console.log(error));
}
loadRecipes();

const renderRecipes = (recipeList=[]) => {
    recipeList.forEach((recipeObj) => {
            const { 
                label: recipeTitle,
                 ingredientLines,
                  image:recipeImage 
                } = recipeObj.recipe;
        const htmlStr = `<div class="recipe">
                <div class="recipe-title">${recipeTitle}</div>
                <div class="recipe-image">
                    <img src="${recipeImage}" alt="Recipe">
                </div>
        
       
        <div class="recipe-text">
            <ul>
                <li>Step 1</li>
                <li>Step 2</li>
                <li>Step 3</li>
                <li>Step 4</li>
                <li>Step 5</li>
            </ul>
        </div>
    </div>`;
    recipeContainer.insertAdjacentHTML("beforeend", htmlStr);
    })
}