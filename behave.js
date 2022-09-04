(function() {
   //  for SignUp 
    const signupBtn = document.querySelector('.signupBtn');
    const loginBtn = document.querySelector('.loginBtn');
    const moveBtn = document.querySelector('.moveBtn');
    const signup = document.querySelector('.signup');
    const login = document.querySelector('.login');

    let UsersData = [];

    const addUser = () => {

      let user = {
        fname: document.querySelector('#fname').value,
        lname: document.querySelector('#lname').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value,
        confirmPassword: document.querySelector('#confirmPassword').value
      }

      // To push the user's data into UsersData array 
      UsersData.push(user);

      // console.log(UsersData);
      // To convert object to JSON string
      const jsonObj = JSON.stringify(UsersData);

      // To store the data in local storage 
      localStorage.setItem('UsersData', jsonObj);

    }

    document.addEventListener('DOMContentLoaded', () => {
       document.querySelector('.submit').addEventListener('click', addUser);
    });

    signupBtn.addEventListener('click', () => {
       moveBtn.classList.remove('moveBtnClick');
       signup.classList.add('signupForm');
       login.classList.remove('loginForm');
       moveBtn.innerHTML = 'SignUp';

    });

    loginBtn.addEventListener('click', () => {
       moveBtn.classList.add('moveBtnClick');
       login.classList.add('loginForm');
       signup.classList.remove('signupForm');
       moveBtn.innerHTML = 'Login';
    });

   //  for login 
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
   }
   console.log(loginData[0]);

   document.addEventListener('DOMContentLoaded', () => {
      loginSubmit.addEventListener('click', checking);
   });
})();