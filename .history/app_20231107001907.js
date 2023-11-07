const appId = "4b9421ae";
const appKey = "bbff63d7d53d545896d77f31eca36816";
const baseUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${appId}&app_key=${appKey}`;

function loadRecipes(type="panner") {
    const url=baseUrl+ `&q=${type}`;
    fetch(url)
    .then(res => res.json())
    .then(data=>console.log(data.hits))
    .catch((error) => console.log(error));
}
loadRecipes();

const renderRecipes = (recipeList=[]) => {
    recipeList.forEach((recipeObj) => {
        const htmlStr = `<div class="recipe">
        <div class="recipe-title">Recipe Title</div>
        <div class="recipe-imge">
            <img src="images/recipe.jpeg" alt="Recipe">
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
</div>`
    })
}