let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET",'https://restcountries.com/v3.1/all')
xhr.send();
xhr.onload=function(){
    const data=JSON.parse(xhr.response);
    console.log(data);
    console.log(xhr.status);
    
    const reduceData=data.reduce((acc,val)=>{
        return acc + val.population
    },0);
    console.log(reduceData);
}; 
