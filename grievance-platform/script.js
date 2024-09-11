
// Other form submission handlers remain the same
document.getElementById('statusForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Checking grievance status...');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent successfully!');
});



document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Registered successfully!');
    window.location.href= 'login.html' ;
});

const adminCredentials = {
    username: 'admin',
    password: 'admin123'
};

function userlogin(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please enter username and password');
        return false;
        
    } else {
        alert('Login Successful!');
        window.location.href= 'index.html';
        return true; // Prevent form submission
    }
}

function adminLogin() {
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        alert('Admin login successful!');
        window.location.href= 'admin.html'
        return true;
    } else {
        alert('Invalid admin credentials. Please try again.');
        return false; // Prevent form submission
    }
}

function populateGrievances() {
    const tableBody = document.querySelector('#grievanceTable tbody');
    grievances.forEach(grievance => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${grievance.id}</td>
            <td>${grievance.user}</td>
            <td>${grievance.subject}</td>
            <td>${grievance.description}</td>
            <td><img src="${grievance.image}" alt="${grievance.subject}" width="50"></td>
            <td>${grievance.status}</td>
            <td>
                <button onclick="forwardGrievance(${grievance.id})">Forward</button>
                <button onclick="resolveGrievance(${grievance.id})">Resolve</button>
                <button class="delete" onclick="deleteGrievance(${grievance.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Populate user table
function populateUsers() {
    const tableBody = document.querySelector('#userTable tbody');
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>
                <button onclick="promoteUser(${user.id})">Promote</button>
                <button class="delete" onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Admin actions
function forwardGrievance(id) {
    alert(`Grievance ${id} forwarded to relevant authority.`);
}

function resolveGrievance(id) {
    alert(`Grievance ${id} marked as resolved.`);
}

function deleteGrievance(id) {
    if (confirm(`Are you sure you want to delete grievance ${id}?`)) {
        alert(`Grievance ${id} deleted.`);
    }
}

function promoteUser(id) {
    alert(`User ${id} promoted to Admin.`);
}

function deleteUser(id) {
    if (confirm(`Are you sure you want to delete user ${id}?`)) {
        alert(`User ${id} deleted.`);
    }
}

// Initialize tables on page load
document.addEventListener('DOMContentLoaded', () => {
    populateGrievances();
    populateUsers();
});

const loginForm = document.getElementById('loginForm');

        // Add an event listener to the form submission
loginForm.addEventListener('submit', (e) => {
            // Prevent the default form submission behavior
    e.preventDefault();

            // Get the email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

            // Validate the email and password (you can add more complex validation logic here)
    if (email && password) {
                // Redirect to the index.html page
        window.location.href = 'index.html';
    } else {
                // Display an error message (you can add more complex error handling logic here)
            alert('Please enter both email and password');
        }
    });