// fetch data from API;
function fetchData(url) {
   return fetch(url)
            .then(response => response.json())
            .then(data => {
               displayData(data)
               return data
            })
            .catch(err => {
               console.log(err);
            })
}
const url1= "https://restcountries.com/v2/all"; //default data to be displayed
fetchData(url1);
