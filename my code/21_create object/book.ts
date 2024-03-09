interface book {
title:string;
author:string;
publicationyear:number;


}
let booklist:book[]=[
      {title:"Kimiya-e-Saadat", author:"Imam Ghazali", publicationyear:1992 },
      {title:"Ar-Raheeq Al-Makhtum", author:"Safir Rehman", publicationyear:1979},
      {title:"Tarkh Khilafate Usmaniya", author:"Mohmmad Aziz", publicationyear:2021}
];
console.log("Books List");

for (let i =0 ; i < booklist.length; i++){
    console.log("Title:", booklist[i].title);
    console.log("Author:", booklist[i].author);
    console.log("Publication Year:", booklist[i].publicationyear);
    console.log("=====================");

}