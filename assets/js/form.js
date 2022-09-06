
    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');
    var submitError = document.getElementById('submit-error');


    function validateName() {
      var name = document.getElementById('contact-name').value.trim();

      if (name.length <= 2) {
        nameError.innerHTML = 'Name is Required';
        nameError.style.color = 'red'
        return false;
      }

      if (!name.match(/^[A-Za-z][A-Za-z]*$/)) {
        nameError.innerHTML = 'invalid name';
        nameError.style.color = 'red'
        return false;
      }

      nameError.innerHTML = 'Name is valid';
      nameError.style.color = 'green'
      return true;
    }
    function validatesubmit() {
      var submit = document.getElementById('contact-subject').value;
      if (submit.length == 0) {
        submitError.innerHTML = 'subject is Required';
        submitError.style.color = 'red'
        return false;
      }
    }

    function validateEmail() {
      var email = document.getElementById('contact-email').value;
      if (email.length == 0) {
        emailError.innerHTML = 'Email is Required';
        emailError.style.color = 'red'
        return false;
      }

      if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML = 'Email is Invalid';
        emailError.style.color = 'red'
        return false;
      }
      emailError.innerHTML = 'Email is valid';
      emailError.style.color = 'green'
      return true;
    }
    

    
