//function to show the price when packages are selected
function showprice(threemonthpriceValue) {
    document.querySelectorAll('.text-muted').forEach(span => span.classList.add('d-none'));
    document.getElementById(threemonthpriceValue).classList.remove('d-none');
}

//function to open modal wit selected details
function openModal() {
    // event.preventDefault();
    const fullname = document.getElementById('fullname').value.toUpperCase();
    const selectPackage = document.querySelector('input[name="product"]:checked');

    const selectGender = document.querySelector('input[name="genderselection"]:checked');
    if (!selectGender) {
        alert('Select a gender');
        return;
    }

    
    if(!fullname || !selectPackage) {
        alert('Please fill in your name and select a package.');
        return;
    }

    const emailInput = document.getElementById('emailInput').value;
    const phoneInput = document.getElementById('phoneInput').value;
    const genderSelect = document.querySelector('input[name="genderselection"]:checked');
    const gender = genderSelect.value; 
    const courseSelect = document.getElementById('courseSelection').value;
    const nationality = document.getElementById('Country').value;
    const region = document.getElementById('region').value;
    const package = selectPackage.value;
    const AddressInput = document.getElementById('AddressInput').value;
    let address = AddressInput.charAt(0).toUpperCase() + AddressInput.slice(1);
    const price = selectPackage.nextElementSibling.textContent;
    document.getElementById('modalCourses').textContent = courseSelect;
    document.getElementById('modalName').textContent = fullname;
    document.getElementById('modalEmail').textContent = emailInput;
    document.getElementById('modalPhone').textContent = phoneInput;
    document.getElementById('modalGender').textContent = gender;
    document.getElementById('modalPackage').textContent = package;
    document.getElementById('modalPrice').textContent = `#${price}`;
    document.getElementById('modalNationality').textContent = nationality;
    document.getElementById('modalRegion').textContent = region;
    document.getElementById('modalAddress').textContent = address;
    document.getElementById('modalDate').textContent = `${day}/${month}/${year} ${hour12}:${minutes}:${second}:${meridian}`;
    $('#confirmationModal').modal('show')

    
}
//date properties
const Time = new Date();
const year = Time.getFullYear();
const month = Time.getMonth() + 1;
const day = Time.getDate();
const weekday = Time.getDay();//future uses
const hour24 = Time.getHours();
const minutes = Time.getMinutes();
const second = Time.getSeconds();

const meridian = hour24 >= 12? "PM":"AM";
const hour12 = meridian % 12 || 12;


// finnal submit function
function finalSubmit() {
    alert('form submission is successfully!');
    $('#confirmationModal').modal('hide');

    document.getElementById('registrationform').reset();
    document.querySelectorAll('.text-muted').forEach(span => span.classList.add('d-none'));
}

//valid login function
const validUsername = "user";
const validPassword = "password";

function validateLogin(event) {
    event.preventDefault();
    // hide error ,message
    document.getElementById('errorMessage').style.display = "none";
    document.querySelector('.loader').style.display = "block";

    //simulate validation delay with setTimeOut
    setTimeout(() => {
        //get enter values
       const username = document.getElementById('username').value;
       const password = document.getElementById('password').value;

       //check if the enter cresdential is correct
       if(username === validUsername & password === validPassword){
        alert("login succcesful!");
        console.log('correct');
        //retricting any other action
       } else {
        document.getElementById('errorMessage').style.display = "block";
        document.querySelector('.loader').style.display = "none";
        console.log('not correct');
       };

    }, 1500);
};
