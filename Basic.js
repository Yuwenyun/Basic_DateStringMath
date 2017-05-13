var today = new Date();
alert(today);
alert(today.getTime()); //convert today into milli-second

var weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
alert(weekday[today.getDay() - 1]);
alert(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
alert(today.getFullYear() + "/" + today.getMonth() + "/" + today.getDate());

var ms = Date.parse("May 10, 2017"); //parse() will convert string to milli-second
var day = new Date(ms); // use milli-second to create new date
//compare date
if(today > day)
    alert("Hello Owen");

//find the years between 2014 and 2050 whose first day is Monday
for(var year = 2014; year <= 2050; year++)
{
    var date = new Date(year, 0, 1); //index of January is 0
    if(date.getDay() === 0) //index of Monday is 0
        alert(year);
}

//find days left till next Chrismas
var today = new Date();
var cmas = new Date(today.getFullYear(), 11, 25);
if(today.getMonth() === 11 && today.getDate() >= 25)
{
    cmas.setFullYear(today.getFullYear + 1);
}
var oneday = 1000 * 60 * 60 * 24; //oneday in milli-second
alert(Math.ceil((cmas.getTime() - today.getTime())/oneday) + " days left till next Chrismas");


var text = "Hello Owen";
//access char in the string
var a = text.charAt(1); //e
var b = text[4]; //o
//compare string
var text1 = "Hello Vincent";
if(text < text1)
    alert(text);
alert(text.length);
alert(text.substring(2, 4)); //startindex - endindex


/*
 * "==" and "===" acts same to compare two object
 * but "==" will do conversion automatically while "==="
 * won't
 */

//true, value is the same, type ignored
alert("abc" == new String("abc"));
//false, type is not ignored
alert("abc" === new String("abc"));

//alert(typeof "abc"); //string
//alert(typeof new String("abc")); //object

/*
 * all properties and methods of Math are static.
 * access properties or methods: Math.PI
 */
var a = -45.4;
var b = [0, 4, 2, -5];
alert(Math.abs(a));
alert(Math.ceil(a)); //return smallest int >= a
//max() should be called max(1,3,-2), since b is an array,
//use spread operator '...' to spread the elements in the array
alert(Math.max(...b)); //return max number
alert(Math.min(...b));
alert(Math.pow(2, 4)); //16
alert(Math.random()); //return random num range [0,1)
//produce random num between 3 - 10
alert(Math.random() * (10 - 3) + 3);
