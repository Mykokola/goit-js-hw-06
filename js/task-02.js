const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
// ingredients.forEach(item => {
// const elemList = document.createElement("li")
//   elemList.textContent = item
//   elemList.classList.add('item')
//   ingredientsList.append(elemList)
// })

let  result =  ingredients.map((item) => {
  const elemList = document.createElement("li");
  elemList.textContent = item;
  elemList.classList.add("item");
  return elemList
});
ingredientsList.append(...result);
//ВИРІШИВ ЗРОБИТИ 2 СПОСОБАМИ НЕ ЗНАВ ЯКИЙ БІЛЬШ ПІДХОДЯЩИЙ
