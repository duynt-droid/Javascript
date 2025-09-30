// /// BT1: tạo object car: 


let car = {
   brand: "mazda",
    model: "3",
    year: "2018",
    color: "red",
    getAge: function () {
        let currentYear = new Date().getFullYear();
        this.Age = currentYear - this.year;    
        return`${this.Age}` ;
    },

getInfo: function () {
      return ` ${this.brand} ${this.model} ${this.year} ${this.color}`;
  },

paint: function (newColor) {
this.color = newColor;
       return this.color;
 },
isOld: function () {
        let currentYear = new Date().getFullYear();
        this.Age = currentYear - this.year;
        return this.Age > 10;
    },

};
console.log("Tuổi của xe: " , car.getAge(), "năm");
console.log("Mô tả xe:" ,car.getInfo());
car.paint("blue");
console.log("Đổi màu mới cho xe:" ,car.color);
console.log(" Nếu tuổi xe > 10 năm:" ,car.isOld());



// BT2: tổng các phần tử
let numbers = [3, 7, 2, 9, 8, 10];
function sum (...numbers){
    var total = 0;
    for (var number of numbers){
        total += number;
    }
    console.log("Tính tổng:" ,total);
};




// tìm số lớn nhất/nhỏ nhất:
function findMaxMin (...numbers){
    var max = numbers[0];
    var min = numbers[0];       
    for (var number of numbers){
        if (number > max){
            max = number;
        }
        if (number < min){
            min = number;
        }   
    }
   return { max, min };
}
var result = findMaxMin(3, 7, 2, 9, 8, 10);
console.log("Số lớn nhất là:" ,result.max);
console.log(" Số nhỏ nhất là: " ,result.min);




// Đếm có bao nhiêu số chẵn:
function countEven (...numbers){
    var count = 0;
    for (var number of numbers){
        if (number % 2 === 0){
            count++;
        }
    }           
    return count;
}
    var count = countEven (3, 7, 2, 9, 8, 10);
    console.log("Số chẵn có trong mảng là:" , count);



///Tính trung bình:
function Average (...numbers){
    var total = 0;
    for (var number of numbers){
        total += number;
    }
    return average = total / numbers.length;
}
var average = Average (3, 7, 2, 9, 8, 10);
console.log("Giá trị trung bình là: " ,average);




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
console.log("Mảng số lẻ là:" , array);






 
