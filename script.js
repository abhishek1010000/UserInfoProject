// let firstName = prompt("Enter First Name : ")
// let lastName = prompt("Enter Last Name : ")
// let country = prompt("Enter Country Name : ")
// let phoneNo = prompt("Enter Phone Number : ")
// let state = prompt("Enter State : ")
// let city = prompt("Enter City : ")
// let village = prompt("Enter Village : ")

// let fname = document.getElementById("fname");
// let lname = document.getElementById("lname");
// let userCountry = document.getElementById("country");
// let userPN = document.getElementById("pNumber");
// let userState = document.getElementById("state");
// let userCity = document.getElementById("city");
// let userVillage = document.getElementById("village");

// fname.value = firstName;
// lname.value = lastName;
// userCountry.value = country;
// userPN.value = phoneNo;
// userState.value = state;
// userCity.value = city;
// userVillage.value = village;

// Check if user information is already stored in local storage
const storedUserInfo = localStorage.getItem("userInformation");

if (storedUserInfo) {
    const userInfo = JSON.parse(storedUserInfo);

    // Display user information in the card
    document.getElementById("first-name").textContent = userInfo.firstName;
    document.getElementById("last-name").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("phone-number").textContent = userInfo.phoneNumber;
    document.getElementById("state").textContent = userInfo.state;
    document.getElementById("city").textContent = userInfo.city;
    document.getElementById("village").textContent = userInfo.village;
}else{
    storeUserInfo();
}

// Function to store user information in local storage
function storeUserInfo() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const country = prompt("Enter your country:");
    const phoneNumber = prompt("Enter your phone number:");
    const state = prompt("Enter your state:");
    const city = prompt("Enter your city:");
    const village = prompt("Enter your village:");

    const userInfo = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
        village,
    };

    // Store user information in local storage as a JSON string
    localStorage.setItem("userInformation", JSON.stringify(userInfo));

    // Display user information in the card
    document.getElementById("first-name").textContent = userInfo.firstName;
    document.getElementById("last-name").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("phone-number").textContent = userInfo.phoneNumber;
    document.getElementById("state").textContent = userInfo.state;
    document.getElementById("city").textContent = userInfo.city;
    document.getElementById("village").textContent = userInfo.village;
}

// Call the function to store user information
// storeUserInfo();