let products = [
  { id: 1, name: "Milk", count: 100 },
  { id: 2, name: "Yakult", count: 100 },
  { id: 3, name: "Butter", count: 100 },
  { id: 4, name: "Water", count: 100 },
];
let vtXoa = 2;
let findIndexProduct = products.findIndex(function (element, index) {
  return element.id === vtXoa;
});
products.splice(findIndexProduct, 1);
console.log(products);
//
//
//
for (let product of products) {
  if (product.id == 3) {
    product.count = 0;
    break;
  }
}
console.log(products);
//
//
//
let a = "Butter";
for (let product of products) {
  for (let key in product) {
    if (product[key] == a) {
      console.log(key, product);
    } else {
      console.log("Không có chuỗi cần tìm");
    }
  }
}

// let find = products.find(function (element, index) {
//   return element.name == "Butter";
// });
// console.log(find);
