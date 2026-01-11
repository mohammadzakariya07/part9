const SESSION_LIMIT = 30 * 60 * 1000;

function checkSession() {
  const loginTime = sessionStorage.getItem("loginTime");
  if (!loginTime) {
    window.location.href = "./index.html";
    return;
  }
  startTimer();
}

function startTimer() {
  setInterval(() => {
    const remaining =
      SESSION_LIMIT - (Date.now() - sessionStorage.getItem("loginTime"));

    if (remaining <= 0) {
      alert("Session expired");
      logout();
    } else {
      const m = Math.floor(remaining / 60000);
      const s = Math.floor((remaining % 60000) / 1000);
      document.getElementById("timer").innerText =
        `Session: ${m}m ${s}s`;
    }
  }, 1000);
}

function logout() {
  sessionStorage.clear();
  window.location.href = "./index.html";
}
