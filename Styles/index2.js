// ---- State & City Map ----
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

// ---- DOM References ----
const stateSelect   = document.getElementById("state");
const citySelect    = document.getElementById("city");
const continueBtn   = document.querySelector(".btn-continue");
const modal         = document.getElementById("weatherModal");
const modalClose    = document.getElementById("modalClose");
const historyList   = document.getElementById("historyList");

// ---- History Array ----
const history = [];

// ---- Populate States ----
function populateStates() {
  stateSelect.innerHTML = '<option value="">-- Select State --</option>';
  Object.keys(stateCityMap).forEach(state => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
  });
}
populateStates();

// ---- Populate Cities ----
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

// ---- Weather Fetch ----
continueBtn.addEventListener("click", async () => {
  const city = citySelect.value;
  if (!city) {
    alert("Please select a city!");
    return;
  }

  const apiKey = "404e1498772541b28edc0e258ef1e3d4"; // replace with your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const kelvin      = data.main.temp;
    const celsius     = (kelvin - 273.15).toFixed(1);
    const fahrenheit  = ((kelvin - 273.15) * 9/5 + 32).toFixed(1);
    const description = data.weather[0].description;
    const icon        = data.weather[0].icon;

    // ---- Show Modal ----
    document.getElementById("modalTitle").textContent     = city;
    document.getElementById("conditionValue").textContent = description;
    document.getElementById("tempValue").textContent      = `${celsius}°C`;
    document.getElementById("feelsLike").textContent      = `Feels like ${(data.main.feels_like - 273.15).toFixed(1)}°C`;
    document.getElementById("humidityValue").textContent  = `${data.main.humidity}%`;
    document.getElementById("windValue").textContent      = `${data.wind.speed} km/h`;
    document.getElementById("pressureValue").textContent  = `${data.main.pressure} hPa`;
    document.getElementById("visibilityValue").textContent= `${(data.visibility/1000).toFixed(1)} km`;
    document.getElementById("cloudsValue").textContent    = `${data.clouds.all}%`;

    // Theme based on description
    const hero = document.getElementById("tempHero");
    hero.className = "temp-hero"; // reset
    if (description.includes("clear")) hero.classList.add("theme-clear");
    else if (description.includes("cloud")) hero.classList.add("theme-clouds");
    else if (description.includes("rain")) hero.classList.add("theme-rain");
    else if (description.includes("storm")) hero.classList.add("theme-storm");
    else if (description.includes("snow")) hero.classList.add("theme-snow");
    else if (description.includes("mist")) hero.classList.add("theme-mist");

    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    modal.classList.add("active");

    // ---- Save to History ----
    history.push({ city, kelvin, celsius, fahrenheit, description, icon });
    renderHistory();
    updateChart();

  } catch (err) {
    console.error("Weather fetch error:", err);
    alert("Could not fetch weather data.");
  }
});

// ---- Close Modal ----
modalClose.addEventListener("click", () => modal.classList.remove("active"));
modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("active"); });
document.addEventListener("keydown", e => { if (e.key === "Escape") modal.classList.remove("active"); });

// ---- Render History ----
function renderHistory() {
  historyList.innerHTML = "";
  history.forEach(entry => {
    const card = document.createElement("div");
    card.className = "history-card";
    card.innerHTML = `
      <div class="history-card__inner">
        <img src="https://openweathermap.org/img/wn/${entry.icon}@2x.png" 
             alt="Weather icon" class="history-icon">
        <div class="history-info">
          <h4 class="history-city">${entry.city}</h4>
          <p class="history-condition">${entry.description}</p>
          <p class="history-temp">${entry.celsius}°C | ${entry.fahrenheit}°F | ${entry.kelvin}K</p>
        </div>
      </div>
    `;
    historyList.appendChild(card);
  });
}

// ---- Chart.js ----
let myChart;
function updateChart() {
  const ctx = document.getElementById("myChart");
  if (!ctx) return; // safeguard

  const labels = history.map(h => h.city);
  const dataC  = history.map(h => h.celsius);
  const dataF  = history.map(h => h.fahrenheit);
  const dataK  = history.map(h => h.kelvin);

  if (myChart) myChart.destroy();

  myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Celsius (°C)",
          data: dataC,
          backgroundColor: "rgba(54, 162, 235, 0.6)"
        },
        {
          label: "Fahrenheit (°F)",
          data: dataF,
          backgroundColor: "rgba(255, 99, 132, 0.6)"
        },
        {
          label: "Kelvin (K)",
          data: dataK,
          backgroundColor: "rgba(255, 206, 86, 0.6)"
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "top" },
        title: { display: true, text: "Temperature Comparison" }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}
