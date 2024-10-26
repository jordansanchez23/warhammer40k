// Get the current URL
const currentUrl = window.decodeURI(window.location.href);

// The elements where the form data will be displayed
const firstName = document.querySelector("#displayFirstName");
const lastName = document.querySelector("#displayLastName");
const orgTitle = document.querySelector("#displayEmail");
const email = document.querySelector("#displayEmail"); 
const phoneNumber = document.querySelector("#displayPhoneNumber");
const faction = document.querySelector("#displayFaction"); 
const description = document.querySelector("#displayBio"); 
const timeStamp = document.querySelector("#displayTimeStamp");

// Split the URL to get query parameters
let splitInfo = currentUrl.split('?')[1]?.split('&') || []; 

// Initialize an object to hold the form data
let formInfo = {};

// Process each query parameter
splitInfo.forEach(element => {
    const splitElement = element.split("=");
    // Decode each value to handle spaces and special characters
    formInfo[decodeURIComponent(splitElement[0])] = decodeURIComponent(splitElement[1] || '');
});



// Populate the HTML elements with the data from the formInfo object
firstName.textContent = formInfo.firstName || "N/A"; 
lastName.textContent = formInfo.lastName || "N/A";
orgTitle.textContent = formInfo.orgTitle || "N/A"; 
email.textContent = formInfo.email || "N/A";
phoneNumber.textContent = formInfo.phoneNumber || "N/A";
faction.textContent = formInfo.faction || "N/A"; 
description.textContent = formInfo.bio || "N/A"; 
timeStamp.textContent = formInfo.timeStamp || new Date().toLocaleString(); 