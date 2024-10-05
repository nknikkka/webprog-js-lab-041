function generatePassword(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    
    return password;
}

function checkPassword(password, confirmPassword) {
    return password === confirmPassword ? "Паролі співпадають" : "Паролі не співпадають";
}

function meetsRequirements(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    
    return hasUpperCase && hasLowerCase && hasDigit;
}

function generateAndCheckPassword(length = 8) {
    let passwordChoice;
    let userPassword;

    const userChoice = confirm("Бажаєте ввести власний пароль? Натисніть 'ОК' для так, 'Cancel' для створення пароля.");

    if (userChoice) {
        userPassword = prompt("Будь ласка, введіть свій пароль:");
    } else {
        userPassword = generatePassword(length);
        const showPassword = confirm("Показати згенерований пароль?");
        if (showPassword) {
            alert(`Згенерований пароль: ${userPassword}`);
        }
    }

    while (!meetsRequirements(userPassword)) {
        alert("Пароль не відповідає вимогам: він має містити хоча б одну велику літеру, одну маленьку літеру та одну цифру.");
        const retryChoice = confirm("Бажаєте ввести новий пароль самостійно? Натисніть 'ОК' для так, 'Cancel' для створення пароля.");
        if (retryChoice) {
            userPassword = prompt("Будь ласка, введіть новий пароль:");
        } else {
            userPassword = generatePassword(length);
            const showPassword = confirm("Показати новий згенерований пароль?");
            if (showPassword) {
                alert(`Згенерований пароль: ${userPassword}`);
            }
        }
    }

    const confirmPassword = prompt("Будь ласка, підтвердіть свій пароль:");
    const result = checkPassword(userPassword, confirmPassword);
    alert(result);
}

generateAndCheckPassword(8);
