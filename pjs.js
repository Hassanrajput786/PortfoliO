



document.addEventListener('DOMContentLoaded', function() {
  const readMoreBtn = document.getElementById('readMoreBtn');
  const hiddenContent = document.querySelector('.hidden');

  readMoreBtn.addEventListener('click', function() {
    if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
      hiddenContent.style.display = 'block';
      readMoreBtn.innerText = 'Read Less';
    } else {
      hiddenContent.style.display = 'none';
      readMoreBtn.innerText = 'Read More';
    }
  });
});

      let togglebtn=document.querySelector('#checkbox');
     
      togglebtn.addEventListener('change', () => {
         if (togglebtn.checked){
        document.body.classList.add('dark-mode')
      }else {
          document.body.classList.remove('dark-mode')
      }
      });


   var typed1 = new Typed(".typing", {
  strings: ["Freelancer", "Developer", "Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// Initialize Typed.js for the second instance
var typed2 = new Typed(".typing2", {
  strings: ["Freelancer", "Developer", "Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
   


  document.forms['register-form'].onsubmit = function (event) {
    let errors = document.querySelectorAll(".error");
    for (let error of errors) {
        error.style.display = "none";
    }
            // document.querySelector(".success").innerHTML = ""; // Removed this line, as it's not necessary
 
 let hasErrors = false; //

            if(this.username.value.trim() === ""){
                document.querySelector(".username-error").innerHTML = "Full Name Can't be blank";
                document.querySelector(".username-error").style.display = "block";
                document.querySelector(".username-error").style.fontSize = '0.7rem';
                document.querySelector(".username-error").style.marginTop = '-0.9rem';
                document.querySelector(".username-error").style.marginLeft = '0.3rem';
                document.querySelector(".username-error").style.color = "red";
                document.querySelector(".item").style.border = "1px solid red";
                 hasErrors = true;
            }

            if(this.email.value.trim() === ""){
                document.querySelector(".email-error").innerHTML = "Email Address Can't be blank";
                document.querySelector(".email-error").style.display = "block";
                document.querySelector(".email-error").style.fontSize = '0.7rem';
                document.querySelector(".email-error").style.marginTop = '-0.9rem';
                document.querySelector(".email-error").style.marginLeft = '0.3rem';
                document.querySelector(".email-error").style.color = "red";
               document.querySelector(".ite").style.border = "1px solid red";
                 hasErrors = true;
            }
             if(this.subject.value.trim() === ""){
                document.querySelector(".subject-error").innerHTML = "Subject Can't be blank";
                document.querySelector(".subject-error").style.display = "block";
                document.querySelector(".subject-error").style.fontSize = '0.7rem';
                document.querySelector(".subject-error").style.marginTop = '-0.9rem';
                document.querySelector(".subject-error").style.marginLeft = '0.3rem';
                document.querySelector(".subject-error").style.color = "red";
                document.querySelector(".it").style.border = "1px solid red";
                 hasErrors = true;
            }
             if(this.message.value.trim() === ""){
                document.querySelector(".textarea-error").innerHTML = "Message Can't be blank";
                document.querySelector(".textarea-error").style.display = "block";
                document.querySelector(".textarea-error").style.fontSize = '0.7rem';
                document.querySelector(".textarea-error").style.marginTop = '-0.9rem';
                document.querySelector(".textarea-error").style.marginLeft = '0.3rem';
                 document.querySelector(".textarea-error").style.color = "red";
                 document.querySelector(".i").style.border = "1px solid red"; 
                 hasErrors = true;
            }
    if (hasErrors) {
        event.preventDefault();
        return false;
    }
        };