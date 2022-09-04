(function(){
   // for login 
   // const email = document.querySelector('#loginEmail').value;
   // const loginPassword = document.querySelector('#loginPassword').value;
   const loginSubmit = document.querySelector('.loginSubmit');
   const form = document.querySelector('.login');

   // To get the string from localStorage
   const str1 = localStorage.getItem('UsersData');

   // To convert string to an object 
   const parseObj1 = JSON.parse(str1);

   let loginData = [];

   const checking = () => {
      // const email = document.querySelector('#loginEmail').value;
      // const loginPassword = document.querySelector('#loginPassword').value;
      let loginCredentials = {
         email: document.querySelector('#loginEmail').value,
         password: document.querySelector('#loginPassword').value
      }
      // for(let i=0; i<parseObj1.length; i++){
      //    if(email == parseObj1[i].email && loginPassword == parseObj1[i].password) {
      //       login.setAttribute('action', './homepage.html');
      //    } else {
      //       alert("Your email/password is wrong.");
      //    }
      // }

      loginData.push(loginCredentials);
    //   return false;
   }
//    console.log(loginData);

   document.addEventListener('DOMContentLoaded', () => {
      loginSubmit.addEventListener('click', checking);
   });
})();