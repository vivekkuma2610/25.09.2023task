//How to compare two json have the same properties without order
function comparetwoJsonWithoutOrder(Obj1, obj2) {
  let sortedobj1 = JSON.stringify(obj1, Object.keys(obj1).sort());
    let sortedobj2 = JSON.stringify(obj2, Object.keys(obj2).sort());

    // Compare the string representations
    return sortedobj1 === sortedobj2;
}

let obj1 = {name: "person 1",age:5,};

let obj2 = {age: 5,name: "person 1"};

if (comparetwoJsonWithoutOrder(obj1, obj2)) {
    console.log("The objects are equal (ignoring order).");
} else {
    console.log("The objects are not equal.");
}




// Use the rest countries API url https://restcountries.com/v3.1/all and display all the country flag in console

let apiUrl = 'https://restcountries.com/v3.1/all';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => 
    {
    data.forEach(country => 
      {
      if (country.flags && country.flags.png) 
      {
        console.log(`Country: ${country.name.common}, Flag URL: ${country.flags.png}`);
      }
    });
  })
  .catch(error =>
     {
    console.error('Error fetching data:', error);
  });




 // Use the rest countries API url https://restcountries.com/v3.1/alland print all the countries names, regions, subregions.



  let api1Url = 'https://restcountries.com/v3.1/all';
fetch(api1Url)
  .then(response => response.json())
  .then(data =>
     {
    data.forEach(country => 
      {
      console.log(`Country: ${country.name.common}`);
      console.log(`Region: ${country.region}`);
      console.log(`Subregion: ${country.subregion}`);
        console.log(`Population: ${country.population}`);
      console.log('-------------------');
    });
  })
  .catch(error => 
    {
    console.error('Error fetching data:', error);
  });








