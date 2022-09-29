const logout = document.querySelector('.logout');

// To get the string from localStorage
let str = localStorage.getItem('UsersData');

// To convert string to an object 
const parseObj = JSON.parse(str);
console.log(parseObj);

document.querySelector('.name').innerHTML = parseObj[0].fullname;
document.querySelector('.username').innerHTML = parseObj[0].username;

logout.addEventListener('click', preventBack());

// To stop previous button of the browser
function preventBack(){
    window.history.forward();
}
    
setTimeout("preventBack()", 0);
window.onunload=function(){null};

// To change the display picture 
const profilePictureDiv = document.querySelector('.profilePicDiv');
const profilePic = document.querySelector('#profilePic');

const inputFile = document.getElementById('inputFile');
const previewImage = profilePictureDiv.querySelector('.image-preview__image');

profilePictureDiv.addEventListener('click', ()=>{
  inputFile.click();
});

inputFile.addEventListener('change', getPicture);

// This function will 
function getPicture() {
  const file = this.files[0];
  
  console.log(file);
  console.log(`File name: ${file.name}`);
  console.log(`Last modified: ${file.lastModified}`);
  
  if(file) {
    const reader = new FileReader();
    
    previewImage.style.display = 'block';
    
    reader.addEventListener('load', function() {
      // console.log(this);
      previewImage.setAttribute('src', this.result);
    });
    
    reader.readAsDataURL(file);
  } else {
    previewImage.style.display = null;
    previewImage.setAttribute('src', '');
  }
}

// Edit Button 
const editBtn = document.querySelector('#editBtn');
const usernameDiv = document.querySelector('.usernameDiv'); 

editBtn.addEventListener('click', editBio);

function editBio() {
    const page = document.createElement('div');
    page.classList.add('editBio');
    
    page.innerHTML = `
                    <div class='closeBtn'>
                      <p>Add your bio</p>
                      <button id='close'>X</button>
                    </div>
                    <div class='inputDiv'>
                      <textarea name="" id="inputBio" placeholder='Enter your bio'></textarea>
                    </div>
                    <div class='saveDiv'>
                      <button type='button' id='saveBtn'>Save</button>                     
                    </div>`;
    usernameDiv.appendChild(page);

    // To close the edit bio page 
    const closeBtn = document.querySelector('#close');

    closeBtn.onclick = function closeFunc() {
        this.parentElement.parentElement.remove();

        // We return 'false' to prevent the default action.
        return false;
    };

    // To save using save button 
    const saveBtn = document.querySelector('#saveBtn');
    const bio = document.querySelector('#inputBio');

    saveBtn.onclick = function saveFunc() {

        document.querySelector('.bio').innerHTML = bio.value;
        this.parentElement.parentElement.remove()
        console.log('Hey!');
        
        // If no str data exist, then create an array 
        // Otherwise, convert the localStorage string to an array 
        str = str ? JSON.parse(str) : {};
        
        // Add new data to localStorage array 
        str[0]['bio'] = bio.value;
        
        // Save back to localStorage 
        localStorage.setItem('UsersData', JSON.stringify(str));
        // page.style.display = 'none';
        document.querySelector('.bio').innerHTML = str[0].bio;

       // We return 'false' to prevent the default action. 
       return false;
    }
};

