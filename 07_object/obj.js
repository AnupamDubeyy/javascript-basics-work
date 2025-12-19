const jsUser = {
            name: "Anupam",
            age: 19 ,
            location: "Ghaziabad" ,
            email: "anupamdubey3434@gmail.com",
            isLoggedIn: false ,
}
console.log(jsUser) ;
console.log(jsUser.email) ;
console.log(jsUser["email"]) ;

jsUser.age = 20 ;
console.log(jsUser.age) ;

jsUser["location"] = "Noida" ;
console.log(jsUser["location"]) ;

jsUser.greeting = function(){
    console.log("Hello JS User Anupam Dubey") ;
}
console.log(jsUser.greeting()) ;