function signup(){
   let fullname = document.querySelector('#fullname');
   let email = document.querySelector('#email');
   let username = document.querySelector('#username');
   let pwd = document.querySelector('#password');

   let userArr = [];

   let user = {
      fullname: fullname.value,
      email: email.value,
      username: username.value,
      password: pwd.value,
   }

   userArr.push(user);

   let json = JSON.stringify(userArr);
   localStorage.setItem('UsersData', json);
   console.log('user added');
}

function loginFunc(e){
   let username = document.querySelector('#usernameLogin').value;
   let pwd = document.querySelector('#passwordLogin').value;
   let form = document.querySelector('.login');

   let str = localStorage.getItem('UsersData');
   let data = JSON.parse(str);
   console.log(username + ' ' + pwd);
   console.log(data);

   if(str == null || str == undefined || str == ''){
       alert('Wrong username!');
   } else if(username === data[0].username && pwd === data[0].password) {
       form.setAttribute('action', './homepage.html');
   } else {
       alert('Wrong username/password!');
   }
}

const signup1 = document.querySelector('.signup');
const login = document.querySelector('.login');
const msg   = document.querySelector('.introMsg');
const signupOption = document.querySelector('.signupOption');
const loginOption = document.querySelector('.loginOption');

// For clicking on Login form 
loginOption.addEventListener('click', () => {
   login.classList.add('loginForm');
   signup1.classList.remove('signupForm');
   msg.innerHTML = `<p>Login here, upload your painting and show it to the world!</p>`;
    console.log("Clicked!");
});

// For clicking on Signup form 
signupOption.addEventListener('click', () => {
   signup1.classList.add('signupForm');
   login.classList.remove('loginForm');
   msg.innerHTML = `<p>Register here, upload your painting and show it to the world!</p>`;
});


