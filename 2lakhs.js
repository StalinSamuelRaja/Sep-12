let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET",'https://restcountries.com/v3.1/all')
xhr.send();
xhr.onload=function(){
    const data=JSON.parse(xhr.response);
    console.log(data);
    console.log(xhr.status);
    const FilterData=data.filter((val)=>val.population<200000)
    console.log(FilterData);
}; 


