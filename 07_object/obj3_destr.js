const course = {
    courseName: "JavaScript Basics",
    price: "$29.99",
    instructor: "hitesh chuadhary"
}
const {instructor} = course ;
console.log(instructor); // hitesh chuadhary

const {courseName, price} = course ;
console.log(courseName);

const user = {
    userName: "anupam123",
    email: "anupam@gmail.com",
    password: "anupam@123",
    address: {
        street: "123 main st",
        city: "ghaziabad",
        state: "UP",
        country: "India"
    },
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.userName} has purchased ${this.courseList.length} courses`;
    }
}

user.buyCourse("JavaScript Basics");
user.buyCourse("React JS");
console.log(user.getCourseCount());

const {userName, password, address: {city}} = user ;
console.log(userName);
console.log(password);
console.log(city);