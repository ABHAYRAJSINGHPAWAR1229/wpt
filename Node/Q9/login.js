// Define the user data in an array (username,password)
const users = [
    'user1,password1',
    'user2,password2',
    'user3,password3'
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check credentials
    const isValidUser = users.some(user => {
        const [storedUsername, storedPassword] = user.split(',');
        return storedUsername === username && storedPassword === password;
    });

    // Redirect based on validation
    if (isValidUser) {
        window.location.href = 'success.html'; // Redirect to success page
    } else {
        window.location.href = 'failure.html'; // Redirect to failure page
    }
});
