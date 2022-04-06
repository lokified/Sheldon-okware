

const menu = document.querySelector('.nav_links');
const openBtn = document.querySelector('#open_menu_btn');
const closeBtn = document.querySelector('#close_menu_btn');
const body = document.querySelector('body');

openBtn.addEventListener('click', () => {

    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    openBtn.style.display = "none";    
});


closeBtn.addEventListener('click', () => {
    
    menu.style.display = "none";
    openBtn.style.display = "inline-block";
    menu.style.transition = "all 800ms ease-in-out"
    closeBtn.style.display = "none";
})


//send email

    let loader = document.querySelector(".loader");
    let firstName = document.querySelector(".firstName");
    let lastName = document.querySelector(".lastName");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let btn = document.querySelector(".submit");


    loader.style.display = "none";

function validate() {
    

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (firstName.value === "" || lastName.value === "" || email.value === "" || msg.value === "") {
        emptyerror();
      } else {
        loader.style.display = "flex";
        sendmail(email.value, msg.value);
        success();
        loader.style.display = "none";
      }
    });
  }
  validate();

  function sendmail(email, msg) {
    emailjs.send("service_p3gm9x7", "template_imb2zsc", {
      to_name: "Sheldon",
      from_name: email,
      message: msg,
    });
  }

  function emptyerror() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Fields cannot be empty!",
    });
  }

  function error() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }

  function success() {
    Swal.fire({
      icon: "success",
      title: "Success...",
      text: "Successfully sent message",
    });
}

