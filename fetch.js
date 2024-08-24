const character = document.getElementById("characters");
const find = document.getElementById("btn");

find.addEventListener("click", () => {
  const selectedCharacter = character.value;

  if (selectedCharacter) {
    fetch(`https://hp-api.herokuapp.com/api/characters`)
      .then((res) => res.json())
    //   .then((data) => console.log(data));
    .then(data => {
        data.forEach(character => {
          if(selectedCharacter === character.name){
            console.log('exists')
          }else{
            console.log('doesnt exist')
          }
        });
      })
  }else{
    console.log("no selected character")
  }
});
