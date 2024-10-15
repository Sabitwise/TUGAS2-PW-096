alert("Happy fulfilling :)");

const root = document.getElementsByClassName("root")[0];

//header wrapper
const headerWrp = document.createElement("div");
headerWrp.classList.add("header-wrp");
headerWrp.style.display = "flex";
headerWrp.style.justifyContent = "center";
headerWrp.style.height = "20vh";
headerWrp.style.color = "maroon";

//header and title
const header = document.createElement("header");
header.setAttribute("id", "header");
header.style.textAlign = "center";

const judul = document.createElement("h1");
judul.setAttribute("class", "judul");
judul.innerText = "Tugas-2 Praktikum Pemrograman Web";
judul.style.borderBottom = "2px solid maroon";
judul.style.paddingBottom = "5px";
judul.style.fontFamily = "papyrus";

//form setup
const form = document.createElement("form");
form.setAttribute("class", "user-form");
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.alignItems = "center";
form.style.justifyContent = "center";

//function to create form fields
function createField(labelText, inputType, inputId, inputName, placeholderText) {
  const wrapper = document.createElement("div");
  wrapper.style.marginBottom = "10px"; 
  wrapper.style.display = "flex";
  wrapper.style.alignItems = "center";
  wrapper.style.justifyContent = "flex-start";

  const label = document.createElement("label");
  label.setAttribute("for", inputId);
  label.innerText = labelText;
  label.style.marginRight = "10px"; 
  label.style.width = "100px";

  const input = document.createElement("input");
  input.setAttribute("type", inputType);
  input.setAttribute("id", inputId);
  input.setAttribute("name", inputName);
  if (placeholderText) input.setAttribute("placeholder", placeholderText);

  wrapper.appendChild(label);
  wrapper.appendChild(input);

  return wrapper;
}

// Create fields
const nameFieldWrapper = createField("Name: ", "text", "name", "name", "Atikah Shabrina Siregar");
const idFieldWrapper = createField("ID: ", "text", "id", "id", "231401096");
const classFieldWrapper = createField("Class: ", "text", "class", "class", "C");
const photoFieldWrapper = createField("Photo: ", "file", "photo", "photo", "");

//create the submit button
const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit"); 
submitButton.innerText = "Submit";

//create a container for display
const displayContainer = document.createElement("div");
displayContainer.classList.add("display-container");

const inputData = {
  name: "",
  id: "",
  class: "",
  photo: null
};

//handle form submission 
form.addEventListener("submit", function(event) {
  event.preventDefault();

inputData.name = document.getElementById("name").value;
inputData.id = document.getElementById("id").value;
inputData.class = document.getElementById("class").value;
inputData.photo = document.getElementById("photo").files[0];

  displayContainer.innerHTML = "";
  
  const nameResult = document.createElement("p");
  nameResult.innerText = `Name: ${inputData.name}`;
  const idResult = document.createElement("p");
  idResult.innerText = `ID: ${inputData.id}`;
  const classResult = document.createElement("p");
  classResult.innerText = `Class: ${inputData.class}`;
  const photoResult = document.createElement("p");
  photoResult.innerText = `Photo: ${inputData.photo}`;
  
  if (inputData.photo) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement("img");
      img.src = e.target.result; 
      img.style.maxWidth = "200px"; 
      img.style.marginTop = "10px"; 
      img.style.borderRadius = "10px";

      displayContainer.appendChild(img); 
      displayContainer.appendChild(nameResult);
      displayContainer.appendChild(idResult);
      displayContainer.appendChild(classResult);
      displayContainer.style.display = "block"; 
      alert(`Hello ${inputData.name}, Thank you for fulfilling!`);
    };
    reader.readAsDataURL(inputData.photo); 
  }
});


// Append elements to the form and header
form.appendChild(nameFieldWrapper);
form.appendChild(idFieldWrapper);
form.appendChild(classFieldWrapper);
form.appendChild(photoFieldWrapper);
form.appendChild(submitButton);

header.appendChild(judul);
headerWrp.appendChild(header);
headerWrp.appendChild(form);
root.appendChild(headerWrp);
root.appendChild(displayContainer);




//-----------------------------------style-----------------------------------
// Style the body
document.body.style.backgroundColor = "antiquewhite";

//font
const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);
form.style.fontFamily = "'Roboto', sans-serif";

//header
headerWrp.style.display = "flex";
headerWrp.style.flexDirection = "column"; 
headerWrp.style.alignItems = "center";
headerWrp.style.height = "auto"; 

//form
fontLink.style.width = "60%";
form.style.width = "700px";
form.style.padding = "20px";
form.style.boxSizing = "border-box";
form.style.backgroundColor = "pink";
form.style.borderRadius = "10px";
form.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)";
form.style.textAlign = "left";

const inputFields = form.querySelectorAll("input[type='text'], input[type='file']");
inputFields.forEach((input) => {
  input.style.width = "300px";
  input.style.padding = "10px";
  input.style.boxSizing = "border-box";
  input.style.marginBottom = "10px";
  input.style.border = "1px solid maroon";
  input.style.borderRadius = "5px";
  input.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)";
  input.style.backgroundColor = "white";
});

//submitbotton
submitButton.style.fontFamily = "'Roboto', sans-serif";
submitButton.style.padding = "10px 20px"; 
submitButton.style.backgroundColor = "maroon"; 
submitButton.style.color = "white"; 
submitButton.style.border = "none";
submitButton.style.borderRadius = "5px"; 
submitButton.style.cursor = "pointer"; 

//display-container
displayContainer.style.margin = "20px auto";
displayContainer.style.width = "50%";
displayContainer.style.padding = "20px";
displayContainer.style.backgroundColor = "pink";
displayContainer.style.borderRadius = "10px";
displayContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)";
displayContainer.style.display = "none";
displayContainer.style.textAlign = "center";
displayContainer.style.fontFamily = "'Roboto', sans-serif";
displayContainer.style.color = "maroon";
