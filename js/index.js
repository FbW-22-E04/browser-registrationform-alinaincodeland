function previous(element) {
  let fatherDiv = element.parentNode.id;
  switch (fatherDiv) {
    case "addressDiv":
      element.parentNode.style.display = "none";
      document.getElementById("personalDiv").style.display = "block";
      document.getElementById("profileDiv").style.display = "none";
      document.getElementById("resultDiv").style.display = "none";
      break;
    case "profileDiv":
      element.parentNode.style.display = "none";
      document.getElementById("personalDiv").style.display = "none";
      document.getElementById("addressDiv").style.display = "block";
      document.getElementById("resultDiv").style.display = "none";

      break;
    case "resultDiv":
      element.parentNode.style.display = "none";
      document.getElementById("personalDiv").style.display = "none";
      document.getElementById("addressDiv").style.display = "none";
      document.getElementById("profileDiv").style.display = "block";

      break;

    default:
      break;
  }
}

const personalDiv = document.querySelector("#personalDiv");
const addressDiv = document.querySelector("#addressDiv");
const registerBtn = document.querySelector(".registerbtn");

registerBtn.addEventListener("click", () => {
  personalDiv.style.display = "none";
  addressDiv.style.display = "block";
});
