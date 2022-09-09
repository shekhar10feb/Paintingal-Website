function signup(e){
   // event.preventDefault();

   let email = document.querySelector('#email').value;
   let username = document.querySelector('#username').value;
   let pwd = document.querySelector('#password').value;

   let userArr = [];

   let user = {
       email: email,
       username: username,
       password: pwd,
   }

   userArr.push(user);

   let json = JSON.stringify(userArr);
   localStorage.setItem('user', json);
   console.log('user added');
}

function loginFunc(e){
   // event.preventDefault();

   // console.log(123);
   let username = document.querySelector('#usernameLogin').value;
   let pwd = document.querySelector('#passwordLogin').value;
   let result = document.querySelector('#result');
   let form = document.querySelector('.login');

   let str = localStorage.getItem('user');
   let data = JSON.parse(str);
   console.log(username + ' ' + pwd);
   console.log(data);

   if(str == null){
       alert('Wrong username!');
   } else if(username === data[0].username && pwd === data[0].password) {
       form.setAttribute('action', './homepage.html');
   } else {
       alert('Wrong username/password!');
   }
}

const signupOption = document.querySelector('.signupOption');
const signup1 = document.querySelector('.signup');
const loginOption = document.querySelector('.loginOption');
const login = document.querySelector('.login');
const msg   = document.querySelector('.introMsg');

loginOption.addEventListener('click', () => {
   login.classList.add('loginForm');
   signup1.classList.remove('signupForm');
   msg.innerHTML = `<p>Login here, upload your painting and show it to the world!</p>`;
   console.log("Clicked!");
});

signupOption.addEventListener('click', () => {
   signup1.classList.add('signupForm');
   login.classList.remove('loginForm');
   msg.innerHTML = `<p>Register here, upload your painting and show it to the world!</p>`;
})


