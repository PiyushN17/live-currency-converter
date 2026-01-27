# Currency Converter – Real-Time Exchange Rate App

**Requirements**
- A modern web browser (Chrome, Firefox, Edge, Safari)  
- Active internet connection to fetch live currency data  
- A valid **FastForex API key** configured inside `script.js`  
- Basic understanding of HTML and JavaScript to modify or extend the project  
- No backend or server setup required (fully client-side application)  

**Technologies Used**
- **HTML** for structuring the currency selection, input fields, and result display  
- **Vanilla JavaScript** for handling user interactions, validation, and API integration  
- **Fetch API** for making asynchronous HTTP requests  
- **FastForex API** to retrieve supported currencies and real-time exchange rates  

**About the API**
- **FastForex Currency API**
  - Used to fetch the list of available global currencies  
  - Conversion endpoint provides real-time exchange rates  
  - Example endpoints:
    - Currency list:  
      `https://api.fastforex.io/currencies?api_key={API_KEY}`
    - Currency conversion:  
      `https://api.fastforex.io/convert?from={FROM}&to={TO}&amount={AMOUNT}&api_key={API_KEY}`
  - Returns currency codes, currency names, converted amount, and conversion rate  

**Features Implemented**
- Dynamically loads all supported currencies into dropdown menus  
- Allows users to convert between any two currencies  
- Accepts user-defined amount for conversion  
- Displays converted value and current exchange rate  
- Input validation for:
  - Missing currency selection  
  - Invalid or negative amounts  
  - Same source and target currency  
- Clear error messages for invalid user input  

**Application Flow**
- On page load, the app fetches and populates currency dropdowns  
- User selects source and target currencies  
- User enters an amount and clicks **Convert**  
- App validates input and requests conversion data from the API  
- Converted amount and exchange rate are displayed instantly  

**Notes**
- All logic runs entirely on the client side  
- API requests are handled asynchronously for smooth user experience  
- Conversion rates depend on the FastForex API and may vary in real time  
- Designed as a learning project to practice API integration and form validation  

**Possible Enhancements**
- Add currency swap button  
- Display historical exchange rates  
- Cache recent conversions  
- Add loading indicator during API requests  
- Improve UI and accessibility  
