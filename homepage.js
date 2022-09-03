// To get the string from localStorage
const str = localStorage.getItem('UsersData');

// To convert string to an object 
const parseObj = JSON.parse(str) || "[]";

document.querySelector('#fname').innerHTML = parseObj[0].fname;

