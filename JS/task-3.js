function generatePassword(length = 8) {
    const chars = 'ЙЦУКЕНГШЩЗХЇЄЖДЛОРПАВІФЯЧСМИТЬБЮйцукенгшщзхїфівапролджєячсмитьбюABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    
    return password;
}

function checkPassword(password, confirmPassword) {
    return password === confirmPassword ? "Вітаю паролі співпали" : "Хмм спробуй ще раз";
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

    const userChoice = confirm("Хочеш створити свій пароль тисни ОК. Згенерувати пароль, тисни скасувати");

    if (userChoice) {
        userPassword = prompt("Вводь пароль:");
    } else {
        userPassword = generatePassword(length);
        const showPassword = confirm("Показати згенерований пароль?");
        if (showPassword) {
            alert(`Згенерований пароль: ${userPassword}`);
        }
    }

    while (!meetsRequirements(userPassword)) {
        alert("Хмм, напевне твій пароль, не відповідає безпеці. Пароль має містити пеликі та малі літерк, та цифру :)");
        const retryChoice = confirm("Введеш новий пароль, якщо так то тисни 'ОК' чи 'Скасувати' для створення пароля.");
        if (retryChoice) {
            userPassword = prompt("Ввводь новий пароль:");
        } else {
            userPassword = generatePassword(length);
            const showPassword = confirm("Хочеш побачити згенерований пароль?");
            if (showPassword) {
                alert(`Згенерований пароль: ${userPassword}`);
            }
        }
    }

    const confirmPassword = prompt("Введи пароль ще раз для підтвердження :");
    const result = checkPassword(userPassword, confirmPassword);
    alert(result);
}

generateAndCheckPassword(8);
