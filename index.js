
const stateCityMap = {
      "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Kakinada", "Tirupati", "Anantapur", "Rajahmundry", "Kadapa"],
      "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Tawang", "Pasighat", "Bomdila", "Ziro", "Roing", "Tezu", "Aalo", "Changlang"],
      "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tinsukia", "Tezpur", "Bongaigaon", "Karimganj", "Diphu"],
      "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Arrah", "Begusarai", "Katihar", "Munger"],
      "Chhattisgarh": ["Raipur", "Bhilai", "Durg", "Bilaspur", "Korba", "Raigarh", "Jagdalpur", "Ambikapur", "Rajnandgaon", "Dhamtari"],
      "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda", "Bicholim", "Curchorem", "Sanquelim", "Canacona", "Quepem"],
      "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar", "Anand", "Nadiad"],
      "Haryana": ["Gurugram", "Faridabad", "Panipat", "Ambala", "Yamunanagar", "Hisar", "Karnal", "Rohtak", "Sonipat", "Panchkula"],
      "Himachal Pradesh": ["Shimla", "Mandi", "Solan", "Dharamshala", "Kullu", "Bilaspur", "Una", "Nahan", "Hamirpur", "Kangra"],
      "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh", "Deoghar", "Giridih", "Ramgarh", "Phusro", "Chas"],
      "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Dharwad", "Belagavi", "Ballari", "Shivamogga", "Tumakuru", "Vijayapura"],
      "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Alappuzha", "Kannur", "Palakkad", "Kottayam", "Malappuram"],
      "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Ratlam", "Rewa", "Satna", "Katni"],
      "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Aurangabad", "Solapur", "Amravati", "Kolhapur", "Sangli"],
      "Manipur": ["Imphal", "Thoubal", "Kakching", "Churachandpur", "Bishnupur", "Ukhrul", "Tamenglong", "Senapati", "Jiribam", "Moreh"],
      "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongpoh", "Baghmara", "Williamnagar", "Mairang", "Resubelpara", "Nongstoin", "Khliehriat"],
      "Mizoram": ["Aizawl", "Lunglei", "Serchhip", "Champhai", "Kolasib", "Lawngtlai", "Mamit", "Saitual", "Khawzawl", "Hnahthial"],
      "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha", "Mon", "Phek", "Zunheboto", "Kiphire", "Longleng"],
      "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur", "Balasore", "Baripada", "Jharsuguda", "Puri", "Jeypore"],
      "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Hoshiarpur", "Moga", "Pathankot", "Firozpur"],
      "Rajasthan": ["Jaipur", "Jodhpur", "Kota", "Udaipur", "Ajmer", "Bikaner", "Alwar", "Bhilwara", "Sikar", "Pali"],
      "Sikkim": ["Gangtok", "Namchi", "Gyalshing", "Mangan", "Rangpo", "Jorethang", "Ravangla", "Singtam", "Soreng", "Chungthang"],
      "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tiruppur", "Erode", "Vellore", "Thoothukudi", "Tirunelveli"],
      "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Ramagundam", "Mahbubnagar", "Nalgonda", "Suryapet", "Siddipet"],
      "Tripura": ["Agartala", "Dharmanagar", "Udaipur", "Kailashahar", "Belonia", "Ambassa", "Kamalpur", "Khowai", "Sonamura", "Sabroom"],
      "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Prayagraj", "Meerut", "Bareilly", "Aligarh", "Noida"],
      "Uttarakhand": ["Dehradun", "Haridwar", "Haldwani", "Roorkee", "Rishikesh", "Kashipur", "Rudrapur", "Nainital", "Pithoragarh", "Almora"],
      "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Bardhaman", "Kharagpur", "Haldia", "Raniganj", "Krishnanagar"],
      "Andaman and Nicobar Islands": ["Port Blair", "Garacharma", "Bamboo Flat", "Rangat", "Mayabunder", "Diglipur", "Kamorta", "Car Nicobar", "Hut Bay", "Neil Island"],
      "Chandigarh": ["Chandigarh", "Manimajra", "Daria", "Sarangpur", "Dhanas", "Maloya", "Hallomajra", "Sector 17", "Industrial Area", "Kajheri"],
      "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa", "Naroli", "Samarvarni", "Amli", "Kharel", "Dadra", "Kachigam", "Marwad"],
      "Delhi": ["New Delhi", "Delhi Cantonment", "Dwarka", "Rohini", "Pitampura", "Saket", "Karol Bagh", "Lajpat Nagar", "Vasant Kunj", "Mayur Vihar"],
      "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla", "Udhampur", "Kathua", "Sopore", "Kupwara", "Pulwama", "Poonch"],
      "Ladakh": ["Leh", "Kargil", "Nubra", "Diskit", "Nyoma", "Tangtse", "Saspotse", "Chuchot", "Drass", "Zanskar"],
      "Lakshadweep": ["Kavaratti", "Agatti", "Andrott", "Minicoy", "Amini", "Kadmat", "Kalpeni", "Bangaram", "Bitra", "Chetlat"],
      "Puducherry": ["Puducherry", "Karaikal", "Mahe", "Yanam", "Oulgaret", "Villianur", "Bahour", "Nettapakkam", "Ariyankuppam", "Muthialpet"]
    };

 const stateSelect = document.getElementById("state");
    const citySelect = document.getElementById("city");

    // Function to populate states dynamically
    function populateStates() {
        stateSelect.innerHTML = '<option value="">-- Select State --</option>';
        Object.keys(stateCityMap).forEach(state => {
            const option = document.createElement("option");
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        });
    }

    // Call once after defining the function
    populateStates();
stateSelect.addEventListener("change", () => {
    const selectedState = stateSelect.value;
    citySelect.innerHTML = '<option value="">-- Select City --</option>';
    if (selectedState && stateCityMap[selectedState]) {
        stateCityMap[selectedState].forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
});

const history = []; // to store past searches

document.querySelector("button").addEventListener("click", async () => {
    const city = citySelect.value;
    if (!city) {
        alert("Please select a city!");
        return;
    }

    const apiKey = "404e1498772541b28edc0e258ef1e3d4";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const kelvin = data.main.temp;
        const celsius = (kelvin - 273.15).toFixed(2);
        const fahrenheit = ((kelvin - 273.15) * 9/5 + 32).toFixed(2);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        // Save to history
        history.push({ city, kelvin, celsius, fahrenheit, description, icon });

        showPopup(city, kelvin, celsius, fahrenheit, description, icon);
    } catch (error) {
        console.error("Error fetching weather:", error);
    }
});
function showPopup(city, kelvin, celsius, fahrenheit, description, icon) {
    const popup = document.createElement("div");
    popup.className = "popup-card";
    popup.innerHTML = `
        <div class="popup-header">
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">
            <span class="close-btn">&times;</span>
        </div>
        <div class="popup-body">
            <h3>${city}</h3>
            <p>${description}</p>
            <p>Kelvin: ${kelvin} K</p>
            <p>Celsius: ${celsius} °C</p>
            <p>Fahrenheit: ${fahrenheit} °F</p>
        </div>
    `;
    document.body.appendChild(popup);

    popup.querySelector(".close-btn").addEventListener("click", () => {
        popup.remove();
        showHistory();
    });
}
function showHistory() {
    const historySection = document.querySelector("section:nth-of-type(2) article");
    historySection.innerHTML = ""; // clear old content

    history.forEach(entry => {
        const card = document.createElement("div");
        card.className = "history-card";
        card.innerHTML = `
            <img src="https://openweathermap.org/img/wn/${entry.icon}@2x.png" alt="Weather icon">
            <h4>${entry.city}</h4>
            <p>${entry.description}</p>
            <p>Kelvin: ${entry.kelvin} K</p>
            <p>Celsius: ${entry.celsius} °C</p>
            <p>Fahrenheit: ${entry.fahrenheit} °F</p>
        `;
        historySection.appendChild(card);
    });
}
