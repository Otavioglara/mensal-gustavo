
const users = {
    user1: "password123",
    user2: "mypassword"
  };
  
  function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  

    if (users[username] && users[username] === password) {
      alert('Login successful!');
      errorMessage.style.display = 'none';
     
      return true;
    } else {
      errorMessage.textContent = 'Invalid username or password';
      errorMessage.style.display = 'block';
      return false;
    }
  }
  