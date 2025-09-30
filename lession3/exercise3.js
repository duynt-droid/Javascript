//Bài 1:

let products = [
 { id: 1, name: "Laptop Pro 2025", price: 1500, stock: 3, category: "Electronics" },
 { id: 2, name: "Phone Max", price: 800, stock: 10, category: "Electronics" },
 { id: 3, name: "Casual Shirt", price: 40, stock: 50, category: "Clothes" },
 { id: 4, name: "Running Shoes", price: 90, stock: 20, category: "Clothes" },
 { id: 5, name: "Science Book", price: 15, stock: 100, category: "Stationery" },
];

let cart = [
 { productId: 1, quantity: 1 },
 { productId: 3, quantity: 2 },
 { productId: 5, quantity: 5 },
];

//1. In ra danh sách sản phẩm trong kho theo format:
let newproducts = products.map(function (proc) {
  return `${proc.name} - ${proc.price} - ${proc.stock}`;
});

console.log("1. In danh sách sản phẩm trong kho" ,newproducts);

//2. Kiểm tra xem tất cả sản phẩm có giá lớn hơn 10 không
let allproducts = products.every(function(product){
    return product.stock >10;
});

console.log("2. Sản phẩm có giá trị lớn hơn 10" , allproducts);

//3. Kiểm tra xem có sản phẩm nào hết hàng (stock = 0) không.
let findproducts = products.some(function(product1){
    return product1.stock === 0;

});

console.log(" 3. Sản phẩm hết hàng", findproducts);

//4. Tìm sản phẩm có id = 2 (Phone Max).
let filterproducts = products.filter(function(product2){
    return product2.id ===2 ;

});

console.log(" 4. Tìm sản phẩm có id=2", filterproducts);


//5. Lấy danh sách sản phẩm thuộc Clothes.
let categoryproducts = products.filter(function(product3){
    return product3.category === "Clothes";

});

console.log(" 5. Danh sách sản phẩm", categoryproducts);

//6. Tính tổng số tiền giỏ hàng (dựa vào cart và products). (dùng reduce)

let total = cart.reduce(function (sum, item) {
    let product4 = products.find(function(total1) {
        return total1.id === item.productId;
    });
    let result = sum + (product4.price * item.quantity);
    return result;
}, 0);

console.log("6. Tổng số tiền giỏ hàng" ,total);


//7. Tính tổng số lượng sản phẩm còn lại trong kho. (dùng reduce)

 let totalnumberaftersale = products.reduce((effect, product5) => {
  let numbercart = cart.find(function(cart1){
      return  cart1.productId === product5.id;

});
   let remaining = product5.stock - (numbercart ? numbercart.quantity : 0);
    return effect + remaining;
  }, 0);

console.log("7. Tổng số lượng sp còn lại trong kho" , totalnumberaftersale);


//8. Tìm các sản phẩm có tên chứa "Pro" (gợi ý: dùng includes).

let productPro = products.find(function(name1){
    return name1.name.includes("Pro")
});
console.log("8. Tìm sản phẩm chưa tên Pro" ,productPro);


//9. Kiểm tra xem trong giỏ hàng có sản phẩm "Book" nào không?

let letterBook = cart.some(item => {
  let product = products.find(function(letter){
         return letter.id === item.productId;
  });

  if (product) {
    if (product.name.includes("Book")) {
      return true;   
    } else {
      return false; 
    }
  } else {
    return false;
  }
});

console.log("9. Giỏ hàng có sản phẩm Book nào không:", letterBook);

//10. Sắp xếp sản phẩm theo giá (sort) 

products.sort((c, d) => c.price - d.price);
console.log("10.1: Sắp xếp theo giá tăng dần" ,products);


products.sort((c, d) => d.price - c.price);
console.log("10.2: Sắp xếp theo giá giảm dần" ,products);


