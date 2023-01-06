let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let firstName = urlParams.get("fname");
let headingTag = document.getElementsByTagName("h1")[0];

headingTag.innerHTML = `Hello ${firstName}`;
