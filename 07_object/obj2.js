// singleton 

const tinderUser = new Object();   // these are the two ways of creating an object 
const tinderUSer = {} ;

console.log(tinderUser);
console.log(tinderUSer);

tinderUser.id = "123abc" ;
tinderUser.name = "Anupam" ;
tinderUser.isLoggedIn = false ;

const regularUser = {
    email : "anupam@gmail.com" ,
    fullName : {
        userFullName :{
            firstName : "Anupam" ,
            lastName  : "Dubey" ,
        }
    }
}
console.log(regularUser.fullName.userFullName) ;
console.log(regularUser.fullName.userFullName.firstName) ;

const obj1 = {1 : "a", 2 : "b"} ;
const obj2 = {3: "c", 4: "d"} ;

const obj3 = Object.assign({}, obj1, obj2) ;
console.log(obj3) ;



users[1].email
console.log(tinderUser) ;

console.log(Object.keys(tinderUser)) ;
console.log(Object.values(tinderUser)) ;
console.log(Object.entries(tinderUser)) ;

console.log(tinderUser.hasOwnProperty("name")) ;