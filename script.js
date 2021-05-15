function handleSubmit() {
  var amount = document.getElementById("amount").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var profit = amount * (rate * 0.01) * years;
  var payment = (parseInt(amount) + parseInt(profit)).toFixed(2);
  var result = document.getElementById("results");
  result.innerHTML = `What you receive: ${payment}`;
}
function handleRange() {
  var rateText = document.getElementById("rateText");
  var input = document.getElementById("rate").value;
  rateText.innerHTML = input + "%";
}
