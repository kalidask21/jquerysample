// cretae 

var cars = [
  {model : 'BMW', year :2009},
  {model : 'AUDI', year :2009},
  {model : 'VW', year :2009}
];

var years = [100,200,300,400];

var carsPrice = cars.map(function(car){
    car.price = 45000; 
    car.model = car.model + ' modified';
    return car;
});

var yearsMod = years.map(function(year){
    return year;
});
years.push(5000);

console.log(carsPrice);
console.log(cars);
console.log(years);
console.log(yearsMod);





