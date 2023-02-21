// Variables From Dom

const elForm = document.querySelector(".js-form")
const elInputSearch = elForm.querySelector(".js-input")
const elSelect = elForm.querySelector(".js-select")
const elAtoZ = document.querySelector(".js-a-to-z")
const elPokeList = document.querySelector(".poke-list")
const elMinCandy = document.querySelector(".js-candy-min")
const elMaxCandy = document.querySelector(".js-candy-max")
const elCardPoke = document.querySelector(".poke-item")
const elStar = document.querySelector(".star-bookmark")
const elBookmark = document.querySelector(".bookmark")


// Render Poke

function renderPoke (item){
    
    const templatePoke= document.querySelector(".poke-template").content;
    const fragmentPoke = document.createDocumentFragment();
    
    elPokeList.innerHTML = "";
    
    item.forEach(poke => {
        
        const elClone = templatePoke.cloneNode(true);
        
        elClone.querySelector(".poke-number").textContent = poke.num;
        elClone.querySelector(".poke-img").src = poke.img;
        elClone.querySelector(".poke-img").alt = poke.name
        elClone.querySelector(".poke-weight").textContent = poke.weight;
        elClone.querySelector(".poke-candy-count").textContent = `candyCount: ${poke.candy_count}`;
        elClone.querySelector(".poke-name").textContent = poke.name;
        elClone.querySelector(".poke-category").textContent = poke.weaknesses.join(" / ");
        
        fragmentPoke.appendChild(elClone);
        
    });
    
    elPokeList.appendChild(fragmentPoke)
}

//Categoties

const categoryNewArr = [];

function categoriesPoke(poke){
    
    poke.forEach(item => {
        item.weaknesses.forEach(genre => {
            if(!categoryNewArr.includes(genre)){
                categoryNewArr.push(genre)
            }
            categoryNewArr.sort()
        })
    })
    
};

// Render Category

function renderCategory(item){
    const newCategoryFragment = document.createDocumentFragment();
    item.forEach(category => {
        const newOption = document.createElement("option");
        newOption.value = category;
        newOption.textContent = category;
        newCategoryFragment.appendChild(newOption)
    });
    elSelect.appendChild(newCategoryFragment)
}
categoriesPoke(pokemons)
renderCategory(categoryNewArr)

// Sorted by A to Z and by Weight

function renderSort(pokemonSort , optionValue){
    
    if(optionValue === "A to Z"){
        pokemonSort.sort((a , b) =>{
            if(a.name < b.name){
                return -1
            }else if(a.name > b.name){
                return 1
            }else {
                return 0
            }
        })}
        if(optionValue === "Z to A"){
            pokemonSort.sort((a , b) =>{
                if(a.name < b.name){
                    return 1
                }else if(a.name > b.name){
                    return -1
                }else {
                    return 0
                }
            })}
            if(optionValue === "From Thin"){
                pokemonSort.sort((a , b) =>{
                    if(parseFloat(a.weight) < parseFloat(b.weight)){
                        return -1
                    } else if (parseFloat(a.weight) > parseFloat(b.weight)){
                        return 1
                    } else{
                        return 0
                    }
                })
            }
            if(optionValue === "From Fat"){
                pokemonSort.sort((a , b) =>{
                    if(parseFloat(a.weight) < parseFloat(b.weight)){
                        return 1
                    } else if (parseFloat(a.weight) > parseFloat(b.weight)){
                        return -1
                    } else{
                        return 0
                    }
                })
            }
            
        }

// Listen FORM and
        
elForm.addEventListener("submit" , (evt )=> {
    evt.preventDefault();
    
    const inputSearchValue = elInputSearch.value.trim();
    const inputSelectValue = elSelect.value.trim();
    const inputAtoz = elAtoZ.value.trim();
    const inputMinCandy = elMinCandy.value.trim();
    const inputMaxCandy = elMaxCandy.value.trim();
    
    const regex = new RegExp(inputSearchValue , "gi");
    
    const filterPoke = pokemons.filter(item => item.name.match(regex) && (inputSelectValue === "all" || item.weaknesses.includes(inputSelectValue)) && ((inputMinCandy == "" || item.candy_count >= Number(inputMinCandy)) && (inputMaxCandy == "" || item.candy_count <= Number(inputMaxCandy))));
            
    if(filterPoke.length > 0){
        renderSort(filterPoke,inputAtoz)
        renderPoke(filterPoke);     
    }else {
        elPokeList.textContent = "Pokemon is Not Found"
    }
    
})


// Listen Star






renderPoke(pokemons)
        
        