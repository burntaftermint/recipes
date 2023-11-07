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

const renderRecipies = (recipeList=[]) => {
    recipeList.forEach(recipeObject => {
        
    })
}