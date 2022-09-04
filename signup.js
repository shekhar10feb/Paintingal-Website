(function() {
   // for SignUp 
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

   
})();