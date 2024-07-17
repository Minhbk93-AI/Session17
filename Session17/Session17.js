// let students = ["A Hai Yen", "Nghia", "A Duong", "A Huynh", "Hung", "Ngoc"];
//for...of
// for (let student of students) {
//   console.log(students.indexOf(student), student);
// }

// //for...in
// for (let index in students) {
//   console.log(index, students[index]);
// }
// //forEach
// students.forEach(function (element, index) {
//   console.log(index, element);
// });
//Map()
//Toàn bộ sinh viên có trong mảng students
//Ngọc Sora thi hackathon
//Hải Yến thi HAckathon
// let newArr = students.map(function (element, index) {
//   return `${element} thi hackathon`;
// });
// console.log(newArr);

//Fillter()
// let fillterStudents = students.filter(function (element, index) {
//   return element.startsWith("A") === true;
// });
// console.log(fillterStudents);

// //Find() Trả về phần tử đầu tiên thảo mãn điều kiện
// let findStudents = students.find(function (element, index) {
//   return element.startsWith("A") === true;
// });
// console.log(findStudents);

// //findIndex() Trả về phần tử  thỏa mãn điều kiện
// let findIndexStudents = students.findIndex(function (element, index) {
//   return element.startsWith("A") === true;
// });
// console.log(findIndexStudents);

//Reduce- Giảm, cô đọng các phần tử có trong 1 mảng về thành hợp nhất
// let number = [10, 20, 30, 50, 90, 200];
// // number.reduce(function(acc, cur){}, initialValue);
// //acc - accmuulator( Biến tích lũy)
// //cur- current Value( Giá trị của phần tử hiện tại đang duyệt)

// //Initial value- Giá trị khởi tạo dành cho biến tích lũy

// //Tinh tong
// let result = number.reduce(function (acc, cur) {
//   acc = acc + cur;
//   return acc;
// }, 0); //let acc=0

// let result2 = number.reduce(function (acc, cur) {
//   acc = acc * cur;
//   return acc;
// }, 1);

// let result3 = number.reduce(function (acc, cur) {
//   acc = acc + cur;
//   return acc;
// }, 0);
// console.log(result);
// console.log(result2);
// console.log(result3 / number.length);

//SOME() ; EVERY();
// let students = ["A Hai Yen", "Nghia", "A Duong", "A Huynh", "Hung", "Ngoc"];
// let checkStarWithA = students.every(function (element, index) {
//   return element.startsWith("A") === true;
// });
// console.log(checkStarWithA);

//SORT- Sắp xếp
// let number = [10, 20, -30, 50, -90, 200];
// //-90 -30 10 20 50 100
// number.sort(function (a, b) {
//   return a - b;
// });
// console.log(number);

// number.sort(function (a, b) {
//   return b - a;
// });
// console.log(number);
// a,b  cặp số bên cạnh nhau
//a-b: Sắp xếp tăng dần
//b-a: Sắp xếp giảm dần

//OBJECT: Là 1 kiểu dữ liệu dùng để mô tả các đối tượng trong thực tế thông quá
//  Properties(Thuộc tính- Tính chất) và Methods(Hành động)
// Mô tả đối tượng Hải Yến
//tuổi 25
//quê quán: Hà Nam
//tình trạng hôn nhân: đã kết hôn
//mấy con: 1
//xinh: không biết
//......
// let person = {
//   name: "Hải Yến", // Thuộc tính name(key:value)
//   age: 25, //Thuộc tính age
//   hometown: "Paris",
//   married: true,
//   children: 2,
//   beautiful: "don't know",
//   hobbies: ["eating out", "Sleeping", "gaming"],
// };

// let person_2 = {
//   name: "Dương",
//   age: 23,
//   hometown: "Hanoi",
//   married: false,
//   beautiful: "don't know",
//   hobbies: ["eating out", "Sleeping", "gaming"],
// };

// console.log(person);
// console.log(person_2);
// //
// //

// //C- CREAT- Thêm mơi 1 thuộc tính vào đối tượng
// person.jobs = ["Developer", "Nurse", "Teacher"];
// console.log(person);
// //
// //
// //R- READ ONE: Lấy ra  1 value( giá trị) của một thuộc tính
// console.log(`${person.name} ơi dậy đi học thôi`);
// //
// //
// for (let hobby of person.hobbies) {
//   console.log(`${person.name} loves ${hobby}`); CÁCH 1
// console.log(`${person["name"]} loves ${hobby}`); CÁCH 2
// }
//
//
//R - READ ALL: LẤY RA TOÀN BỘ VALUE(GIÁ TRỊ) CỦA MỘT THUỘC TÍNH
// //FOR... IN
// for (let key in person) {
//   //   key; "name", "age",.....
//   console.log(`${key}: ${person[key]}`); //person["name"], person["age"],....
// }

// //
// //
// //UPDATE()
// person["age"] = 26;
// console.log(person);
// //
// //
// //DELETE()
// delete person.age; //CHI XOÁ THUỘC TÍNH KHÔNG XOA ĐỐI TƯỢNG
// console.log(person);

//
// Danh sách các đối tượng có tính chất tương đồng nhau
let student = [
  {
    id: "SV0001",
    name: "Hải Yến",
    age: 25,
  },
  {
    id: "SV0002",
    name: "Ngoc",
    age: 30,
  },
];
console.log("Sinh viên", student[0].name);
console.log("Sinh viên", student[1].name);

for (let students of student) {
  console.log(students.name);
  console.log(students.age);
  console.log(students.id);
}
