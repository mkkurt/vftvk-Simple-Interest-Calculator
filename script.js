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

// SWITCH DARK MODE
function handleDark() {
  var getStyle = function (element, property) {
    return window.getComputedStyle
      ? window.getComputedStyle(element, null).getPropertyValue(property)
      : element.style[
          property.replace(/-([a-z])/g, function (g) {
            return g[1].toUpperCase();
          })
        ];
  };
  var backgroundColor = getStyle(document.body, "background-color");
  var boxColor = document.getElementById("form-wrapper");
  var moon = document.getElementById("darkmode");
  if (backgroundColor == "rgba(0, 0, 0, 0)") {
    document.body.style.backgroundColor = "black";
    moon.style.color = "white";
    boxColor.style.backgroundColor = "rgb(188, 111, 241)";
    boxColor.style.color = "rgb(0, 0, 0)";
  } else {
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0)";
    moon.style.color = "black";
    boxColor.style.backgroundColor = "rgb(82, 5, 123)";
    boxColor.style.color = "rgb(255, 255, 255)";
  }
}
