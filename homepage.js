const logout = document.querySelector('.logout');
// To get the string from localStorage
const str = localStorage.getItem('UsersData');

// To convert string to an object 
const parseObj = JSON.parse(str);

document.querySelector('#fname').innerHTML = parseObj[0].fname;

logout.addEventListener('click', preventBack());

function preventBack(){window.history.forward();}
    setTimeout("preventBack()", 0);
    window.onunload=function(){null};

