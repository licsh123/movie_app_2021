import React from "react";

function Food({name,picture}){
  console.log(name);
  return(
    <div>
      <h2>I like {name}</h2>
      <img src={picture}/>
    </div>
  );
}

function renderFood(dish){
  console.log(dish)
  return <Food name={dish.name} picture={dish.image}/>
}

const foodILike = [{
  name:"Kimchi",
  image:"http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
},
{
  name:"Kimchi2",
  image:"http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
}]

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
