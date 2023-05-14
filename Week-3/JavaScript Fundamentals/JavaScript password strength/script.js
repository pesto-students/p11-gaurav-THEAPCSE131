function isStrongPassword(password) {
  // Check length
  if (password.length < 8) {
    return false;
  }

  // Check for "password" substring
  if (password.toLowerCase().includes("password")) {
    return false;
  }

  // Check for at least one uppercase character
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // All conditions passed, return true
  return true;
}
// Example calls to isStrongPassword()
console.log(isStrongPassword("Abcdefg")); // false
console.log(isStrongPassword("password")); // false
console.log(isStrongPassword("abc123")); // false
console.log(isStrongPassword("Abcdefg1")); // true
