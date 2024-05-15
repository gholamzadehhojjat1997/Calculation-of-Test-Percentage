const allTests = document.getElementById("allTests");
const correctTests = document.getElementById("correctTests");
const wrongTests = document.getElementById("wrongTests");
const calculatorButton = document.getElementById("calculatorButton");
const smallContainer = document.querySelector(".smallContainer");
calculatorButton.addEventListener("click", () => {
  if (
    allTests.value.length == 0 ||
    correctTests.value.length == 0 ||
    wrongTests.value.length == 0
  ) {
    window.alert("تمام فیلد ها باید پر شوند");
  } else if (
    Number(allTests.value) <
    Number(correctTests.value) + Number(wrongTests.value)
  ) {
    window.alert("مجموع سوالات صحیح و غلط بیشتر از تعداد کل سوالات است");
  } else {
    smallContainer.style.display = "flex";
    show.innerHTML =
      Number(
        ((correctTests.value * 3 - wrongTests.value) / (allTests.value * 3)) *
          100
      ).toFixed(1) +
      " " +
      "درصد";
  }
});
