function greet (name){//7b
  if(name !== undefined){
    console.log(`Hello! ${name}`);
  }else{
    console.log(`Hi there!`);//7c
  }
  
}
greet();//7a

function convertToFarenheit (Celsius){
  return (Celsius*9/5)+32;
}
console.log(convertToFarenheit(25));//7d

function convertToCelsius(Farenheit){
  return (Farenheit-32)*5/9
}
console.log(convertToCelsius(86))//7e

function convertTemperature(degrees,unit){//7f
  if(unit === 'C'){
    return convertToFarenheit(degrees)
  }else if(unit ==='F'){
    return convertToCelsius(degrees);
  }else
  return ('Unit wromg!')
}
console.log(convertTemperature(25,'C'))
console.log(convertTemperature(86,'F'))
console.log(convertTemperature(25,'x'))

function convertLength(Length, from, to){//7g
  if (from === to){
    return (`${Length} ${from}`);
  }else if(from === 'miles' && to === 'km'){
    return (`${Length*1.6} ${to}`);
  }else if(from === 'km'&& to === 'miles'){
    return (`${Length/1.6} ${to}`);
  }else{
    return (`invalid unit:${to},${from}`)
  }
}
console.log(convertLength('50','miles','km'));
console.log(convertLength('32','km','miles'));
console.log(convertLength('50','km','km'));
console.log(convertLength('32','miles','miles'));
console.log(convertLength('32','kmx','kms'));