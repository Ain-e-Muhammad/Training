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


//Ajax Call
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries')

const getCountryData = function(country){
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`)
    request.send()
    
    request.addEventListener('load', function(){
        const [data]=  JSON.parse(this.responseText);
        console.log(data)
        RenderHtml(data)
    });
}

function RenderHtml(data){
    const html = `<article class="country">
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

getCountryData('portugal');
getCountryData('pakistan');
