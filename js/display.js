const body = document.body
const dataContainer = document.querySelector('.data-container')
const searchContainer = document.querySelector('.search-container')
const homeBtn = document.querySelector('.homeBtn')

// display data;
let name,flag,population,region,capital;
function displayData(data) { 
   // console.log(data);
   if(data.status == 404) {
      alert("Country not found");
   }
   else {
      data.forEach(element => {     
         ({name,flag,population,region,capital} = element);

         const html = `
         <a class="links" href="#">
         <div class="data-card elements" name="${name}" onclick="showCountry(this)">
         <img src="${flag}" alt="Image failed to load">
            <h2>${name}</h2>
            <h5>Population: <span>${population}</span></h5>
            <h5>Region: <span>${region}</span></h5>
            <h5>Capital: <span>${capital}</span></h5>
         </div>
         </a>
         `
         dataContainer.insertAdjacentHTML('beforeend',html)

      });
   }   
}

// to display individual country's info;
 async function showCountry(thisOfElement) {
   // toggle search bar and 'back' btn
   searchContainer.classList.toggle('hide')
   homeBtn.classList.toggle('hide')
   dataContainer.classList.toggle('hide')

   let name = thisOfElement.getAttribute('name');

   let x;
   const url3 = `https://restcountries.com/v2/name/${name}?fullText=true`;
   const res =  await fetchData(url3).then(data => {   
      x = data[0];
   })
   dataContainer.innerHTML = '';

   const country = document.querySelector('.country')
      country.style.display = 'grid';

   // set all values;
   const setFlag = document.getElementById('flag').src = flag;
   const values = document.querySelectorAll('.value');
   
   values[0].innerHTML = name;
   values[1].innerHTML = x.nativeName;
   values[2].innerHTML = population;
   values[3].innerHTML = region;
   values[4].innerHTML = x.subregion;
   values[5].innerHTML = capital;

   // displaying top-level domain;
   values[6].innerHTML = x.topLevelDomain.join(',')

   // displaying currencies;
   values[7].innerHTML = x.currencies.map(obj => obj.name).join(',')
   
   // displaying languages;
   values[8].innerHTML = x.languages.map(obj => obj.name).join(',')

   // displaying borders;
   const UL3 = document.querySelector('.ul3');
   x.borders.forEach(border => {
      const listEle = `<li class="border">${border}</li>`
      UL3.insertAdjacentHTML('beforeend', listEle)
   })

}

// search based on user entry;
function search () {
   let searchCountry = document.querySelector(".search").value; 

   if(searchCountry){
      const url2 = `https://restcountries.com/v2/name/${searchCountry}`;
      dataContainer.innerHTML = '';// remove all the inner elements of the container
      fetchData(url2);//then display required data;
   }
   else {
      alert("Please enter valid country name");
   }
}
