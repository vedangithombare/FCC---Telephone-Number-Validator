const inputNumber = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");

const clearContent = () => {
  resultDiv.innerHTML = "";
};

const checkValidNum = () => {
  let inputNum = inputNumber.value.trim();

  const firstPattern = /^1\s?(\d{3}-\d{3}-\d{4})$/;
  const secondPattern = /^1\s?\(\d{3}\)\s?\d{3}-\d{4}$/;
  const thirdPattern = /^\d{10}$/;
  const fourthPattern = /^(\d{3}-\d{3}-\d{4})$/;
  const fifthPattern = /^\(\d{3}\)\d{3}-\d{4}$/;
  const sixthPattern = /^1\s?\(\d{3}\)\s?\d{3}-\d{4}$/;
  const seventhPattern = /^1\s?\d{3}\s?\d{3}\s?\d{4}$/;

  const regex = [
    firstPattern,
    secondPattern,
    thirdPattern,
    fourthPattern,
    fifthPattern,
    sixthPattern,
    seventhPattern,
  ];

  if (inputNum.length === 0) {
    alert("Please provide a phone number");
    return;
  }

  const isValid = regex.some((reg) => reg.test(inputNum));

  resultDiv.textContent = isValid
    ? `Valid US number: ${inputNum}`
    : `Invalid US number: ${inputNum}`;
};

checkBtn.addEventListener("click", checkValidNum);
clearBtn.addEventListener("click", clearContent);
