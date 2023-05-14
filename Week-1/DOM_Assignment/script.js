//============= getElementById
document.getElementById("Demo").innerHTML = "Hello World ";

//============ getElementsByClassName
let collectionClass = document.getElementsByClassName("Demo2");
for (let i = 0; i < collectionClass.length; i++) {
  if (collectionClass[i].textContent === "My color is Green") {
    collectionClass[i].style.color = "green";
  } else {
    collectionClass[i].style.color = "red";
  }
}

//============= getElementsByTagName
let collectionP = document.getElementsByTagName("p");
for (let i = 0; i < collectionP.length; i++) {
  collectionP[i].innerHTML = "Hi" + i;
}

//==============
let NameCollection = document.getElementsByName("myName");
for (let i = 0; i < NameCollection.length; i++) {
  NameCollection[i].innerHTML = "Abhishek Pathak";
}
//============= querySelector
document.getElementById("TestBtn").addEventListener("click", demoQR_fn);
function demoQR_fn() {
  let x = document.getElementById("demoQR");
  x.querySelector("h4").style.backgroundColor = "green";
  x.querySelector("h4").style.color = "white";
}

//============= querySelectorAll
document.getElementById("TestBtn2").addEventListener("click", demoQR_fn2);
function demoQR_fn2() {
  let y = document.getElementById("demoQR2");
  let Boxcol = y.querySelectorAll("h4");
  for (let i = 0; i < Boxcol.length; i++) {
    Boxcol[i].style.color = "red";
  }
}
//=======================================================================
const para = document.createElement("p");
para.innerHTML = "This is a paragraph.";
document.body.appendChild(para);
