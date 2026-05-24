// Challenge: Group API Response Data by Category
// Problem Statement: You receive an array of objects representing products fetched from a MERN backend database. Write a clean data transformation function to group these items by their category field and calculate the total inventory value (price * stock) for each group.

// *   **Sample Output:**
//     ```javascript
//     {
//       Electronics: { items: ["Laptop", "Mouse"], totalValue: 105000 },
//       Apparel: { items: ["Shirt"], totalValue: 15000 }
//     }

const products = [
{ id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 2 },
{ id: 2, name: "Shirt", category: "Apparel", price: 1500, stock: 10 },
{ id: 3, name: "Mouse", category: "Electronics", price: 1000, stock: 5 }
];


function groupAndCalculateInventry(items) {
  return items.reduce((acc, item) => {
    const {name, category, price, stock} = item;
    let totalPrice = price*stock;
    if(!acc[category]){
      acc[category] = {
        items: [],
        totalValue: 0,
      }
    }
    acc[category].items.push(name);
    acc[category].totalValue+=totalPrice;
    return acc;
  }, {});
}
console.log(groupAndCalculateInventry(products));

