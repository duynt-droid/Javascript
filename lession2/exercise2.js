// /// BT1: tạo object car: 

// // Trả về tuổi xe:
// let car = {
//    brand: "mazda",
//     model: "3",
//     year: "2018",
//     color: "red",
//     getAge: function () {
//         let currentYear = new Date().getFullYear();
//         this.Age = currentYear - this.year;    
//         return`${this.Age}` ;
//     },
// };
// console.log(car.getAge());




// // Mô tả xe:
// let car = {
//    brand: "mazda",
//     model: "3",
//     year: "2018",
//     color: "red",
//     getInfo: function () {
//         return ` ${this.brand} ${this.model} ${this.year} ${this.color}`;
//     },
// };
// console.log(car.getInfo());




// ///đổi màu Xe:
// let car = {
//   brand: "mazda",
//   model: "3",
//   year: "2018",
//   color: "red",
// paint: function (newColor) {
// this.color = newColor;
//         return this.color;
//  },
// };
// car.paint("blue");
//  console.log(car.color);





// // trả về true/false nếu xe đã trên 10 năm:
// let car = {
//   brand: "mazda",
//   model: "3",       
//   year: "2018",
//   color: "red",
//     isOld: function () {
//         let currentYear = new Date().getFullYear();
//         this.Age = currentYear - this.year;
//         return this.Age > 10;
//     },
// };
// console.log(car.isOld());






// // BT2: tổng các phần tử
// function sum (...numbers){
//     var total = 0;
//     for (var number of numbers){
//         total += number;
//     }
//     console.log(total);
// }
// sum(3,7,2,9,8,10);





// // tìm số lớn nhất/nhỏ nhất:
// function findMaxMin (...numbers){
//     var max = numbers[0];
//     var min = numbers[0];       
//     for (var number of numbers){
//         if (number > max){
//             max = number;
//         }
//         if (number < min){
//             min = number;
//         }   
//     }
//    return { max, min };
// }
// var result = findMaxMin(3, 7, 2, 9, 8, 10);
// console.log(result.max);
// console.log(result.min);




// // Đếm có bao nhiêu số chẵn:
// function countEven (...numbers){
//     var count = 0;
//     for (var number of numbers){
//         if (number % 2 === 0){
//             count++;
//         }
//     }           
//     return count;
// }
//     var count = countEven (3, 7, 2, 9, 8, 10);
//     console.log(count);






// ///Tính trung bình:
// function Average (...numbers){
//     var total = 0;
//     for (var number of numbers){
//         total += number;
//     }
//     return average = total / numbers.length;
// }
// var average = Average (3, 7, 2, 9, 8, 10);
// console.log(average);




// Tạo mảng mới chứa số lẻ:
function createarray (...numbers){
    var array = [];
    for (var number of numbers){
        if (number % 2 !== 0){
            array.push(number);
        }
    }
    return array;
}
var array = createarray (3, 7, 2, 9, 8, 10);
console.log(array);






 
