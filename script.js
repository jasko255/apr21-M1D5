/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

let test = 'a string'

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

let sum = 10 + 20

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random = Math.floor(Math.random() * 21)
console.log(random);

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {
    name: 'Janusz', 
    surname: 'Kondziarz', 
    age: 29
}

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

delete me.age
console.log(me);

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

me.skills = ['JS']

console.log('snd me', me);
/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

me.skills.pop()

console.log('empty arr', me);

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

let dice = function() {
    let numbers = [1, 2, 3, 4, 5, 6]
    let myRandom = Math.floor(Math.random() * 6)
    return numbers[myRandom]
}

console.log('random from 1 to 6', dice());

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

let whoIsBigger = function (a, b) {
    let myArr = [a, b]

    return Math.max(...myArr) + ' is bigger'
}

console.log(whoIsBigger(0, 2));
/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

let splitMe = function(str) {
    // const re = /\s*(?:;|$)\s*/
    // let splitIt = str.split()
    return str.split(" ")

}
console.log('------------------------------------------------------');
console.log('split this: ', splitMe('My name is Luca'));

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. 
    If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

let deleteOne = function(str1, boolean) {
    if (boolean === true) {
        return str1.slice(1)
    } else {
        return str1.slice(0, str1.length - 1)
    }

}

console.log(deleteOne('loveeeer', true));
/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
let onlyLetters = function(str2) {
    let noDigit = str2.replace(/\d+/ , '')
    return noDigit
}

console.log('no digits: ',onlyLetters('I am 29 years old'));
/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/

// let isThisAnEmail = function (str3){
//     let seeIf = 

// }

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

let whatDayIsIt = function() {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]
    let today = new Date().getDay()
    
    return days[today]
}

console.log('Today is: ', whatDayIsIt());
/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/



let rollTheDices = function(n){
    let arrMy = []
     
    for(let i = 0; i < n; i++) {
        arrMy.push(dice())
       
    }
    let sumMyAr = arrMy.reduce((a, b) => a + b, 0) 
    let result = {
        sum: sumMyAr,
        values: arrMy
    }
    return result
}

console.log(rollTheDices(5));

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/
// let howManyDays = function(date){
//     const date1 = new Date('7/13/2010');
//     const date2 = new Date().getMonth().getDay().getFullYear();
//     const diffTime = Math.abs(date2 - date1);
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); }



// const date2 = new Date().getMonth();
// console.log(date2);

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

let isTodayMyBirthday = function(){
    let myBirthday = 11
    let myBirthMonth = 5
    let toDaay = new Date()
    let actualMonth = new Date()
    
    return  myBirthday === toDaay.getDate() && myBirthMonth === actualMonth.getMonth() + 1 
}
console.log('Is it my BDay 2day?', isTodayMyBirthday());

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters,
    and returns the given object after deleting its property named as the given string.
*/


const movies1 =  {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    }

let deleteProp = function(obj5, str5){
     delete obj5[str5]
    return obj5
}

console.log('delete property', deleteProp(movies1, 'Type'));


const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ]

  /* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

  let olderMovie = function(){
    let myYears = []
    for (let i = 0; i < movies.length; i++){
        myYears.push(movies[i]['Year'])
    }

    return Math.max(...myYears)
}

console.log('Older Movies ', olderMovie());



/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

let countMovies = function (){
    let numberMovies = movies.length
   
    return numberMovies
}

console.log('Number of movies: ',countMovies());

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/
let onlyTheTitles = function(){
    let myTitles = []
    for (let i = 0; i < movies.length; i++){
        myTitles.push(movies[i].Title)
    }
    return myTitles
}

console.log('My titles: ', onlyTheTitles() );

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/
let onlyInThisMillennium = function(){
    let myMillArr = []
    for (let j = 0; j < movies.length; j++){
        if(movies[j].Year > 2000){
            myMillArr.push(movies[j])
        }
    }
    return myMillArr
}


console.log('our millenium movies: ', onlyInThisMillennium());

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

let getMovieById = function(id){
    let givenId = []
    for (let i = 0; i < movies.length; i++){
        if(id === movies[i].imdbID){
            givenId.push(movies[i])
        }
    }
    return givenId
}

console.log('given id ', getMovieById("tt2395427"));

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

let sumAllTheYears = function (){
    let sumYears = []
    
    let myTotal
    for (let i = 0; i < movies.length; i++) {
        sumYears.push(movies[i].Year)
        myTotal += sumYears[i]
    }
  
    return myTotal
}

console.log('sum all years: ', sumAllTheYears());

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/

let searchByTitle = function(str7){
    let myMovies = []
    for (let i = 0; i < movies.length; i++) {
        if(movies[i].Title.indexOf(str7) >= 0 ){
            myMovies.push(movies[i])
        }
    }
    return myMovies
}

// console.log(searchByTitle('Avengers'));

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

let searchAndDivide = function(str8){
   let obj8 = {
       match: [],
       unmatch: []
   }
   for(let i = 0; i < movies.length; i++) {
       if (movies[i].Title.indexOf(str8) >= 0 ) {
           obj8.match.push(movies[i])
       } else {
           obj8.unmatch.push(movies[i])
       }
   }
   return obj8
}

console.log('Match and unmatch movies: ', searchAndDivide('Lord'));

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/

let removeIndex = function(int9){
    delete movies[int9]
    return movies

}

console.log('--------------------------/n-------------------------------------/n--------', removeIndex(1));
// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

let halfTree = function(height){
    let star = ''

    for (let i = 0; i < height; i += 1){
        console.log(star+= '*' );
    }
    
}

console.log(halfTree(7));

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

let isItPrime = function (int10){
    let primeNum = int10 / 2
    return primeNum % 1 === 0 ? 'Is not' : 'Is prime'
}

console.log('Is prime?? ', isItPrime(1));

/* This movies array is used throughout the exercises. Please don't change it :)  */