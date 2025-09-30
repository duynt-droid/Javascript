//BÀI 2:  Trò chơi đoán số

let numberRandom = Math.floor(Math.random() * 100) + 1;
let input;
let count = 0;

while (true) {
  input = parseInt(prompt("Nhập số bất kỳ "));

  if (isNaN(input) || input < 1 || input > 100) {
    alert(" Vui lòng nhập một số từ 1-100");
    continue; 
  }

  count++;

  if (input < numberRandom) {
    alert(" Số bạn đoán nhỏ hơn, hãy thử lại!");
  } else if (input > numberRandom) {
    alert(" Số bạn đoán lớn hơn, hãy thử lại!");
  } else {
    alert(` Bạn đã đoán đúng số ${numberRandom} sau ${count} lần đoán!`);
    break;
  }
}