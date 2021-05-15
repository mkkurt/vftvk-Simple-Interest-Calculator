function handleSubmit() {
  var amount = document.getElementById("amount").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var result = document.getElementById("result");

  var profit = amount * (rate * 0.01) * years;
  var total = parseInt(amount) + parseInt(profit);

  if (years != 1) {
    var yearPlural = "years";
  } else {
    yearPlural = "year";
  }

  if (amount == "") {
    result.style.display = "block";
    result.innerHTML = "Please fill out the required inputs";
  } else {
    result.style.display = "block";
    result.innerHTML = `Your ${amount}$ will become ${total}$ after ${years} ${yearPlural}`;
  }
}

function handleRange() {
  var rateText = document.getElementById("rateText");
  var input = document.getElementById("rate").value;
  rateText.innerHTML = input + "%";
}
