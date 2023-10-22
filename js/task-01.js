const categoriesList = document.getElementById("categories");
const categories = categoriesList.children;

console.log("Number of categories:", categories.length);

for (let i = 0; i < categories.length; i++) {
  const category = categories[i];
  const categoryName = category.querySelector("h2").textContent;
  const categoryItems = category.querySelectorAll("li").length;
  console.log("Category:", categoryName);
  console.log("Elements:", categoryItems);
}
