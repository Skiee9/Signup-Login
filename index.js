function signup(userName) {
    const users = ["user1", "user2", "user3"]; // Predefined usernames
    
    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}
console.log(signup("user1")); 
console.log(signup("newUser"));

function login(userName, password) {
    const users = ["user1", "user2", "user3"]; // Predefined usernames
    const correctPassword = "Emp@123";

    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    } else if (password !== correctPassword) {
        return "Wrong Password....";
    } else {
        return "Login Successful...";
    }
}

console.log(login("user1", "Emp@123")); 
console.log(login("user4", "Emp@123"));
console.log(login("user1", "wrongPassword"));