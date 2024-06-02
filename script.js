let year = 2028;
if(year % 4 === 0){
    console.log("it is a leap year");
}
else if( year % 100 != 0 || year % 400 == 0 ){
    console.log(year + " is not s leap year")
}
else {
    console.log(year + " enter enter another year again ")
}