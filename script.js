let currentLang = "en";

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  location.reload();
}

function loadLanguage() {
  currentLang = localStorage.getItem("lang") || "en";
  const t = translations[currentLang];

  document.getElementById("title").innerText = t.title;
  document.getElementById("subtitle").innerText = t.subtitle;
  document.getElementById("login").innerText = t.login;
  document.getElementById("username").placeholder = t.username;
  document.getElementById("password").placeholder = t.password;
  document.getElementById("button").innerText = t.button;
  document.getElementById("footer").innerText = t.footer;
}

function login() {
  if (
    document.getElementById("username").value === "operator01" &&
    document.getElementById("password").value === "aadhaar123"
  ) {
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("loginTime", Date.now());
    window.location.href = "./dashboard.html";
  } else {
    document.getElementById("error").innerText =
      translations[currentLang].error;
  }
}
