var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");
var rs = document.querySelector(".rs-label")

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  if(rangeSlider.value > 500) {
    rs.style.color = "rgb(248, 0, 0)"
  } else {
    rs.style.color = "rgb(37, 194, 79)"
  }
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (bulletPosition * 578) + "px";
}



let inputRange = document.getElementById("rs-range-line");
let spanInstallationSize = document.querySelector(".js-installationSize");
let spanAnnualProduction = document.querySelector(".js-annualProduction");
let spanInstallationCost = document.querySelector(".js-installationCost");
let spanInstallationCostWithDotation = document.querySelector(".js-installationCostWithDotation");
let spanAnnualBill = document.querySelector(".js-annualBill");
let spanAnnualBillWithInstallation = document.querySelector(".js-annualBillWithInstallation");
let spanYouSave = document.querySelector(".js-youSave");

inputRange.addEventListener("input", () => {
    let valueRangeInput = inputRange.value;
    let annualProduction = ((valueRangeInput / 0.61) * 12).toFixed(0);
    let installationSize = ((annualProduction / 1000) * 1.3).toFixed(2);
    let installationCost = (installationSize * 3000).toFixed(0);
    let installationCostWithDotation = installationCost - 5000;
    let annualBill = valueRangeInput * 12;
    let annualBillWithInstallation = (valueRangeInput * 0.52).toFixed(2);
    let youSave = (annualBill * 25) - installationCost - (annualBillWithInstallation * 25);

    spanInstallationSize.innerText = installationSize + " kWp";
    spanAnnualProduction.innerText = annualProduction + " kWh";
    spanInstallationCost.innerText = installationCost + " zł";
    spanInstallationCostWithDotation.innerText = installationCostWithDotation + " zł";
    spanAnnualBill.innerText = annualBill + " zł";
    spanAnnualBillWithInstallation.innerText = annualBillWithInstallation + " zł";
    spanYouSave.innerText = youSave + " zł";
});


