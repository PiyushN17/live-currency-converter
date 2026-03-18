const API_KEY = `f1408440c8-eb9bc9f1bd-t9iu1a`;
const currencyURL = `https://api.fastforex.io/currencies?api_key=${API_KEY}`;
alert("I'm using free forex.io API which may get expired after sometime leading to errors in this project. If this project is not working, please contact me here - piyush.nath1710@gmail.com");
const fromSelect = document.getElementById("fromCurrency");
const toSelect = document.getElementById("toCurrency");
const btn = document.getElementById('submitBtn');
const amount = document.getElementById('amount');
const error = document.getElementById('error');
const res = document.getElementById('result');
const conversion = document.getElementById('conversion');

async function loadCurrencies() {
  const response = await fetch(currencyURL);
  const data = await response.json();
  console.log(data);
  for (const [code, name] of Object.entries(data.currencies)) {
    const option1 = new Option(`${code} - ${name}`, code);
    const option2 = new Option(`${code} - ${name}`, code);

    fromSelect.add(option1);
    toSelect.add(option2);
  }

  fromSelect.value = "";
  toSelect.value = "";
}

loadCurrencies();

async function fetchCurrencyValue(from, to, amt) {
    let API_URL = `https://api.fastforex.io/convert?from=${from}&to=${to}&amount=${amt}&api_key=${API_KEY}`;
    let output = await fetch(API_URL);
    let response = await output.json();
    res.innerText = `${amt} ${from} = ${response.result[to]} ${to}`;
    conversion.innerText = `Conversion Rate: ${response.result.rate}`;
}

btn.addEventListener('click', function() {
    if(fromSelect.value === '' || toSelect.value === '') {
        error.innerText = 'Please select a currency';
    }
    else if(amount.value === '' || amount.value <= 0) {
        error.innerText = 'Please enter valid amount';
    }
    else if(fromSelect.value === toSelect.value) {
        error.innerText = 'Both values cannot be same';
    }
    else {
        error.innerText = '';
        fetchCurrencyValue(fromSelect.value, toSelect.value, amount.value);
    }
})
