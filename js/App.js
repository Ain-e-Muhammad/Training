// //ES6 class
// class Person { 

//     constructor(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     //ES6 class functions are prototypes by default
//     calcAge(){
//         console.log("The age of" , this.firstName , "is" , (2021-this.birthYear));
//     }
// }

// const jess = new Person("Jessica", 1978)
// jess.calcAge()
// console.log(jess.__proto__)




// //Ajax Call
// const countriesContainer = document.querySelector('.countries')

// const getCountryData = function(country){
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`)
//     request.send()
    
//     //Rendering First Country
//     request.addEventListener('load', function(){
//       const [data]=  JSON.parse(this.responseText);
//       console.log(data)
//       RenderHtml(data)
//     //Rendering the first neighbour of that country
//       const neighbor = data.borders[0]
//       if(!neighbor)
//         return
//       const request2 = new XMLHttpRequest();
//       request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`)
//       request2.send()
//       request2.addEventListener('load', function(){
//         const data2 = JSON.parse(this.responseText)
//         console.log(data2)
//         RenderHtml(data2, 'neighbour')
//       })
//     });
    
// }

//Render HTML code
function RenderHtml(data, className='' ){
    const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.name}</h4>
      <h4 class="country__row"><span>Population: </span></h4><p>${data.population}</p>
      <h4 class="country__row"><span>Language: </span></h4><p>${data.languages[0].name}</p>
      <h4 class="country__row"><span>Currency: </span> </h4><p>${data.currencies[0].name}</p>
    </div>
  </article>`
    countriesContainer.insertAdjacentHTML('beforeend', html);
}

// // getCountryData('portugal');
// getCountryData('pakistan');



// //Promises
// const countriesContainer = document.querySelector('.countries')
// const btn = document.querySelector('.btn-country')
// const getCountryData = function(country){
//   //Country 1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`).then((res) => {
//     // console.log(res)
//     return res.json()
//   },
//   //Error Handling
//   (err) =>{
//     console.log("Error handling")
//   }
//   ).then((data) => {   
//     // console.log(data)
//     RenderHtml(data[0])
//     //Neighbor country
//     const neighbor = data[0].borders[0]
//     return fetch(`https://restcountries.eu/rest/v2/name/${neighbor}`)
//   }).then((res) => { // Chaining promises
//     return res.json()
//   }).then((data) => {
//     RenderHtml(data[0], 'neighbour')
//   })
// }
// btn.addEventListener('click', () =>{
//   getCountryData('pakistan')
// })


//Async Promises
const countriesContainer = document.querySelector('.countries')
const btn = document.querySelector('.btn-country')

const whereAmI = async (country) => {
  try{
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
  const data = await res.json()
  RenderHtml(data[0])
  }
  catch(err){
    console.log(err)
  }
}

btn.addEventListener('click', () =>{
  whereAmI('pakistan')
})