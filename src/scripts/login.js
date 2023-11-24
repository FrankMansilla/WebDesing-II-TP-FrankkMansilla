document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      const user = JSON.parse(localStorage.getItem(username));
      if (user && user.password === password) {
        alert("¡Inicio de sesión exitoso!");
        window.location.href = "index.html";
      } else {
        alert("Usuario o contraseña incorrectos.");
      }
    });
  
    registerForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const newUsername = document.getElementById("newUsername").value;
      const newPassword = document.getElementById("newPassword").value;
  
      if (localStorage.getItem(newUsername)) {
        alert("El usuario ya existe. Por favor, elige otro nombre de usuario.");
      } else {
        localStorage.setItem(newUsername, JSON.stringify({ password: newPassword }));
        alert("¡Registro exitoso!");
      }
    });
  });
  