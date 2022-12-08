var elPokeList = document.querySelector(".poke-list");

chopilganPoke = pokemons.slice(0 , 21);

for (var poke of chopilganPoke) {
    
    var newItem = document.createElement("li");
    var newTitle = document.createElement("h2");
    var newImg = document.createElement("img");
    var newTime = document.createElement("p");
    var newId = document.createElement("span");
    
    
    newTitle.textContent = poke.name;
    newImg.src = poke.img;
    newTime.textContent = poke.spawn_time;
    newId.textContent = poke.num
    
    
    
    newItem.append(newId, newImg ,newTitle , newTime , );
    elPokeList.append(newItem);
    
    
}