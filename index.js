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