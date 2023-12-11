const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#pasWord');
const repass = document.querySelector('#passWord');
 

const submit = document.querySelector('button');

const firstNamevalidator = () => {
    const val = firstName.value;
    const alert = document.querySelector('.firstname-alert');

    if ((val.length < 3) || (val.length > 10)) {
        firstName.style.borderColor = 'red';
        alert.innerText = 'Invalid ferst Name ';
        alert.style.color = 'red';
    }
    else
    firstName.style.borderColor = 'green';
}

const lastNamevalidator = () => {
     const val = lastName.value;
     const alert = document.querySelector('.lastname-alert');

     if ((val.length < 3) || (val.length > 10)) {
        lastName.style.borderColor = 'red';
        alert.innerText = 'Invalis Last Name';
        alert.style.color = 'red';
     }
     else 
        lastName.style.borderColor = 'green';
}

const emailValidator = () => {
     const val = email.value;
     
     
     if (((val.length < 3 ) || (val.length > 10))  ) {
        const alert = document.querySelector('.email-alert');
        email.style.borderColor = 'red';
        alert.innerText = 'Email is not valid'
        alert.style.color = 'red';
     }
     else
        email.style.borderColor = 'green';
}

const passValidator = () => {
    const val = pass.value;
    const alert = document.querySelector('.pass-alert');

    if ((val.length < 3) || (val.length > 10)) {
        pass.style.borderColor = 'red';
        alert.innerText = 'Password must be at least 3 characters';
        alert.style.color = 'red';
    }
    else pass.style.borderColor = 'green';
}

const matchValidoter = () => {
    const pasval = pass.value;
    const rePassVal = rePass.value;
    const alert = document.querySelector('.repass-alert');

    if (pasval != rePassVal)  {
       rePass.style.borderColor = 'red';
       alert.innerText = 'Password not match';
       alert.style.color = 'red';
    }
    else {
       rePass.style.borderColor = 'green';
    }
}





submit.addEventListener('click', () => {
     firstNamevalidator();
     lastNamevalidator();
     emailValidator();
     passValidator();
     matchValidoter();
})