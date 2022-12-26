const allCategories = document.querySelectorAll('.item')
console.log(allCategories);
console.log("Number of categories:", allCategories.length);
for (const item of allCategories) {
    const titleEl = item.querySelector("h2")
    const allUnderCategories = item.querySelectorAll("li")
    
    console.log( "Category:", titleEl)
    console.log( "Element:", allUnderCategories.length)
}