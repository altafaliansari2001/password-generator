//Selecting Elements from the HTML


let amount = document.querySelector("#amount");
let form = document.querySelector("#PasswordGenerator"); // Fixed form ID
let uppercase = document.querySelector("#uppercase");
let lowercase = document.querySelector("#lowercase");
let number = document.querySelector("#numbers"); // Fixed ID for numbers
let symbols = document.querySelector("#symbols");
let input = document.querySelector("#input");
let copyButton = document.querySelector("#copy")

//Character Code Arrays


let UPPERCASE_CHAR_CODES = arrayFromHighToLow(65, 90);
let LOWERCASE_CHAR_CODES = arrayFromHighToLow(97, 122);
let NUMBER_CHAR_CODES = arrayFromHighToLow(48, 57);
let SYMBOL_CHAR_CODES = arrayFromHighToLow(33, 47)
    .concat(arrayFromHighToLow(58, 64))
    .concat(arrayFromHighToLow(91, 96))
    .concat(arrayFromHighToLow(123, 126));

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const amountNumber = parseInt(amount.value); // Fixed variable declaration
    const includeUppercase = uppercase.checked; // Fixed variable naming
    const includeLowercase = lowercase.checked;
    const includeNumbers = number.checked;
    const includeSymbols = symbols.checked;

    const password = generatePassword(
        amountNumber,
        includeUppercase,
        includeLowercase,
        includeNumbers,
        includeSymbols
    );

    input.value = password; // Changed `innerText` to `value` for input fields Displaying the Password


});

//Generating the Password

function generatePassword(
    amountNumber,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
) 
{
    let charCodes = [];
    if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES);
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);

    if (charCodes.length === 0) {
        alert("Please select at least one character type.");
        return "";
    }

    const passwordCharacters = [];
    for (let i = 0; i < amountNumber; i++) {
        const characterCode =
            charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }

    return passwordCharacters.join("");
}

// Copy password to clipboard
copyButton.addEventListener("click", () => {
    if (passwordDisplay.value) {
        navigator.clipboard.writeText(passwordDisplay.value).then(() => {
            alert("Password copied to clipboard!");
        });
    } else {
        alert("No password to copy!");
    }
});


//Creates an array of numbers from a starting value (low) to an ending value (high)
function arrayFromHighToLow(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) { // Fixed loop condition
        array.push(i);
    }
    return array;
}

function syncAmount(e) {
    const value = e.target.value;
    amount.value = value;
}


/*document.querySelector("#PasswordGenerator").addEventListener("submit", (e) => {
    e.preventDefault();

    let length = parseInt(document.querySelector("#amount").value);
    let includeUppercase = document.querySelector("#uppercase").checked;
    let includeLowercase = document.querySelector("#lowercase").checked;
    let includeNumbers = document.querySelector("#numbers").checked;
    let includeSymbols = document.querySelector("#symbols").checked;

    let charCodes = [];
    if (includeLowercase) charCodes = charCodes.concat(arrayFromRange(97, 122));
    if (includeUppercase) charCodes = charCodes.concat(arrayFromRange(65, 90));
    if (includeNumbers) charCodes = charCodes.concat(arrayFromRange(48, 57));
    if (includeSymbols) charCodes = charCodes.concat(
        arrayFromRange(33, 47).concat(arrayFromRange(58, 64))
    );

    if (charCodes.length === 0) {
        alert("Please select at least one option!");
        return;
    }

    let password = Array.from({ length }, () =>
        String.fromCharCode(
            charCodes[Math.floor(Math.random() * charCodes.length)]
        )
    ).join("");

    document.querySelector("#input").value = password;
});

function arrayFromRange(low, high) {
    return Array.from({ length: high - low + 1 }, (_, i) => low + i);
}
*/