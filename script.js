let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabnames) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabnames).classList.add("active-tab");
}

let sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.left = "-200px";
}


// ------------------
const scriptURL =
"https://script.google.com/macros/s/AKfycbxetOTR4e0JmyhYzYL_Gbs2k7xzlw92hwvUqzKDZWwAP87ANj4kSzaxTHy1uyOQ6Albug/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg"); //

// for form from gethub
form.addEventListener("submit", (e) => {
e.preventDefault();
fetch(scriptURL, { method: "POST", body: new FormData(form) })
  .then((response) => {
    msg.innerHTML = "Message sent successfully";
    setTimeout(function () {
      msg.innerHTML = "";
    }, 5000);
    form.reset();
  })
  .catch((error) => console.error("Error!", error.message));
});

// back to top
const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
backToTopButton.style.visibility = isBackToTopRendered
  ? "visible"
  : "hidden";
backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
backToTopButton.style.transform = isBackToTopRendered
  ? "scale(1)"
  : "scale(0)";
};

window.addEventListener("scroll", () => {
if (window.scrollY > 700) {
  isBackToTopRendered = true;
  alterStyles(isBackToTopRendered);
} else {
  isBackToTopRendered = false;
  alterStyles(isBackToTopRendered);
}
});



