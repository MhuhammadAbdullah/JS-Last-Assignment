// QUESTION 01

// var itemsArray = [
//     { name: "juice", price: 50, quantity: 3 },
//     { name: "cookie", price: 30, quantity: 9 },
//     { name: "shirt", price: 880, quantity: 1 },
//     { name: "pen", price: 100, quantity: 2 }
// ];

// var totalAllItems = 0;

// itemsArray.forEach(item => {
//     var totalItemPrice = item.price * item.quantity;
//     console.log(`${item.name} Total: ${totalItemPrice}`);
//     totalAllItems += totalItemPrice;
// });

// console.log(`Total price of all items: ${totalAllItems}`);


// QUESTION 02

// var user = {
//     name: "Ali",
//     email: "ali@example.com",
//     password: "12345",
//     age: 25,
//     gender: "Male",
//     city: "Karachi",
//     country: "Pakistan"
// };

// // Check properties
// console.log("Does 'age' exist?", user.hasOwnProperty("age"));
// console.log("Does 'country' exist?", user.hasOwnProperty("country"));
// console.log("Does 'firstName' exist?", user.hasOwnProperty("firstName"));
// console.log("Does 'lastName' exist?", user.hasOwnProperty("lastName"));


// QUESTION 03

// function Product(name, price, category) {
//     this.name = name;
//     this.price = price;
//     this.category = category;
// }

// // Creating multiple records
// let product1 = new Product("Laptop", 1200, "Electronics");
// let product2 = new Product("Shoes", 80, "Fashion");
// let product3 = new Product("Book", 20, "Education");

// console.log(product1);
// console.log(product2);
// console.log(product3);


// QUESTION 04
function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

let records = JSON.parse(localStorage.getItem("populationRecords")) || [];

function saveToLocalStorage() {
    localStorage.setItem("populationRecords", JSON.stringify(records));
}

function displayRecords() {
    const recordsDiv = document.getElementById("records");
    recordsDiv.innerHTML = records.map(record => 
        `<p><strong>Name:</strong> ${record.name}, 
        <strong>Gender:</strong> ${record.gender}, 
        <strong>Address:</strong> ${record.address}, 
        <strong>Education:</strong> ${record.education}, 
        <strong>Profession:</strong> ${record.profession}</p>`
    ).join("");
}

document.getElementById("recordForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById("address").value;
    const education = document.getElementById("education").value;
    const profession = document.getElementById("profession").value;

    const newRecord = new Person(name, gender, address, education, profession);
    records.push(newRecord);
    saveToLocalStorage();
    displayRecords();
});

// Display records on page load
displayRecords();