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

// ---- Lottie Weather Animation Map ----
// Maps OpenWeatherMap "main" condition + icon to matching Lottie animations (by jochang)
const weatherAnimations = {
  Clear:        "https://assets-v2.lottiefiles.com/a/5855a50a-1151-11ee-8713-db7d99d1cba7/0K62KcjosX.lottie",
  Clouds:       "https://assets-v2.lottiefiles.com/a/584a51a0-1151-11ee-870f-73f0e4a25c18/OiRsquuDDf.lottie",
  Rain:         "https://assets-v2.lottiefiles.com/a/58526552-1151-11ee-8710-7f5bc355e2bb/JIYnBacuWm.lottie",
  Drizzle:      "https://assets-v2.lottiefiles.com/a/58526552-1151-11ee-8710-7f5bc355e2bb/JIYnBacuWm.lottie",
  Thunderstorm: "https://assets-v2.lottiefiles.com/a/5854ce64-1151-11ee-8712-37a400a8de07/SWzmb7n620.lottie",
  Snow:         "https://assets-v2.lottiefiles.com/a/5837c3dc-1151-11ee-8709-1bfa94b3ca50/1JbNUYBlfw.lottie",
  Mist:         "https://assets-v2.lottiefiles.com/a/5838a158-1151-11ee-870a-5f500d146f4c/guXfjv7EdD.lottie",
  Smoke:        "https://assets-v2.lottiefiles.com/a/5838a158-1151-11ee-870a-5f500d146f4c/guXfjv7EdD.lottie",
  Haze:         "https://assets-v2.lottiefiles.com/a/5838a158-1151-11ee-870a-5f500d146f4c/guXfjv7EdD.lottie",
  Dust:         "https://assets-v2.lottiefiles.com/a/585746e4-1151-11ee-8715-af7e35ba4dbd/ZEEyrTjEOU.lottie",
  Fog:          "https://assets-v2.lottiefiles.com/a/5838a158-1151-11ee-870a-5f500d146f4c/guXfjv7EdD.lottie",
  Sand:         "https://assets-v2.lottiefiles.com/a/585746e4-1151-11ee-8715-af7e35ba4dbd/ZEEyrTjEOU.lottie",
  Ash:          "https://assets-v2.lottiefiles.com/a/5838a158-1151-11ee-870a-5f500d146f4c/guXfjv7EdD.lottie",
  Squall:       "https://assets-v2.lottiefiles.com/a/585746e4-1151-11ee-8715-af7e35ba4dbd/ZEEyrTjEOU.lottie",
  Tornado:      "https://assets-v2.lottiefiles.com/a/5854ce64-1151-11ee-8712-37a400a8de07/SWzmb7n620.lottie",
  Night:        "https://assets-v2.lottiefiles.com/a/584838ca-1151-11ee-870e-2b08e98fd879/NLTBfths9o.lottie",
};

const defaultAnimation = "https://assets-v2.lottiefiles.com/a/584a51a0-1151-11ee-870f-73f0e4a25c18/OiRsquuDDf.lottie";

/**
 * Updates the Lottie animation based on weather condition.
 * Uses the "main" field from OpenWeatherMap and the icon code (d/n suffix for day/night).
 */
function updateWeatherAnimation(weatherMain, iconCode) {
  const lottieEl = document.getElementById("weatherLottie");
  if (!lottieEl) return;

  // Check if it's nighttime (icon ends with 'n') and weather is Clear
  const isNight = iconCode && iconCode.endsWith("n");
  let animUrl;

  if (isNight && weatherMain === "Clear") {
    animUrl = weatherAnimations.Night;
  } else {
    animUrl = weatherAnimations[weatherMain] || defaultAnimation;
  }

  // Only update if src actually changed to avoid re-triggering
  if (lottieEl.getAttribute("src") !== animUrl) {
    lottieEl.setAttribute("src", animUrl);
  }
}

// ---- DOM References ----
const stateSelect   = document.getElementById("state");
const citySelect    = document.getElementById("city");
const continueBtn   = document.querySelector(".btn-continue");
const modal         = document.getElementById("weatherModal");
const modalClose    = document.getElementById("modalClose");
const historyList   = document.getElementById("historyList");

// ---- Toast Popup ----
const toastOverlay = document.getElementById("toastOverlay");
const toastMsg     = document.getElementById("toastMsg");
const toastIcon    = document.getElementById("toastIcon");
const toastBtn     = document.getElementById("toastBtn");

function showToast(message, icon = "⚠️") {
  toastIcon.textContent = icon;
  toastMsg.textContent  = message;
  toastOverlay.classList.add("active");
}

toastBtn.addEventListener("click", () => toastOverlay.classList.remove("active"));
toastOverlay.addEventListener("click", (e) => { if (e.target === toastOverlay) toastOverlay.classList.remove("active"); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") toastOverlay.classList.remove("active"); });

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
  const state = stateSelect.value;
  const city = citySelect.value;
  if (!state) {
    showToast("Please select a state first.", "📍");
    return;
  }
  if (!city) {
    showToast("Please select a city to continue.", "🏙️");
    return;
  }

  const apiKey = "404e1498772541b28edc0e258ef1e3d4"; // replace with your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // ---- Validate API response ----
    if (data.cod !== 200) {
      showToast(data.message || "Could not fetch weather data.", "❌");
      return;
    }

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
    else if (description.includes("mist") || description.includes("haze") || description.includes("fog")) hero.classList.add("theme-mist");

    // ---- Update Lottie animation dynamically ----
    updateWeatherAnimation(data.weather[0].main, icon);

    modal.classList.add("active");

    // ---- Save to History ----
    history.push({
      city,
      kelvin,
      celsius,
      fahrenheit,
      description,
      icon,
      weatherMain: data.weather[0].main,
      feelsLike: (data.main.feels_like - 273.15).toFixed(1),
      humidity: data.main.humidity,
      wind: data.wind.speed,
      pressure: data.main.pressure,
      visibility: (data.visibility / 1000).toFixed(1),
      clouds: data.clouds.all
    });
    renderHistory();

  } catch (err) {
    console.error("Weather fetch error:", err);
    showToast("Could not fetch weather data. Please check your internet connection.", "🌐");
  }
});

// ---- Close Modal ----
modalClose.addEventListener("click", () => modal.classList.remove("active"));
modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("active"); });
document.addEventListener("keydown", e => { if (e.key === "Escape") modal.classList.remove("active"); });

// ---- Render History as Mini-Modal Cards ----
function getThemeClass(description) {
  if (description.includes("clear")) return "theme-clear";
  if (description.includes("cloud")) return "theme-clouds";
  if (description.includes("rain")) return "theme-rain";
  if (description.includes("storm")) return "theme-storm";
  if (description.includes("snow")) return "theme-snow";
  if (description.includes("mist") || description.includes("haze") || description.includes("fog")) return "theme-mist";
  return "";
}

function renderHistory() {
  historyList.innerHTML = "";
  // Show newest first
  [...history].reverse().forEach(entry => {
    const themeClass = getThemeClass(entry.description);
    const isNight = entry.icon && entry.icon.endsWith("n");
    let animUrl;
    if (isNight && entry.weatherMain === "Clear") {
      animUrl = weatherAnimations.Night;
    } else {
      animUrl = weatherAnimations[entry.weatherMain] || defaultAnimation;
    }

    const card = document.createElement("div");
    card.className = "history-card";
    card.innerHTML = `
      <div class="history-card__hero ${themeClass}">
        <div class="history-card__info">
          <p class="history-card__city">${entry.city}</p>
          <p class="history-card__condition">${entry.description}</p>
          <h3 class="history-card__temp">${entry.celsius}°C</h3>
          <p class="history-card__feels">Feels like ${entry.feelsLike}°C</p>
        </div>
        <div class="history-card__lottie">
          <dotlottie-wc src="${animUrl}" style="width:60px;height:60px" autoplay loop></dotlottie-wc>
        </div>
      </div>
      <div class="history-card__stats">
        <div class="history-card__stat">
          <span class="history-card__stat-val">${entry.humidity}%</span>
          <span class="history-card__stat-lbl">Humidity</span>
        </div>
        <div class="history-card__stat">
          <span class="history-card__stat-val">${entry.wind} km/h</span>
          <span class="history-card__stat-lbl">Wind</span>
        </div>
        <div class="history-card__stat">
          <span class="history-card__stat-val">${entry.clouds}%</span>
          <span class="history-card__stat-lbl">Clouds</span>
        </div>
      </div>
    `;
    historyList.appendChild(card);
  });
}

// ---- Line Chart (recent searches comparison) ----
const chartUnit  = document.getElementById("chartUnit");
const btnCompare = document.getElementById("btnCompare");

let lineChart;
btnCompare.addEventListener("click", () => {
  const unit = chartUnit.value;

  if (history.length === 0) {
    showToast("Search for some cities first to see the chart.", "📊");
    return;
  }

  // Deduplicate: keep only the first occurrence of each city
  const cityMap = new Map();
  history.forEach(h => {
    if (!cityMap.has(h.city)) cityMap.set(h.city, h);
  });
  const unique = Array.from(cityMap.values());

  // Unit config
  let unitSuffix, getValue;
  switch (unit) {
    case "fahrenheit":
      unitSuffix = "°F";
      getValue = h => Number.parseFloat(h.fahrenheit);
      break;
    case "kelvin":
      unitSuffix = "K";
      getValue = h => Number.parseFloat(h.kelvin);
      break;
    default:
      unitSuffix = "°C";
      getValue = h => Number.parseFloat(h.celsius);
  }

  const labels = unique.map(h => h.city);
  const values = unique.map(getValue);

  const ctx = document.getElementById("lineChart");
  if (!ctx) return;

  if (lineChart) lineChart.destroy();
  lineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: `Temperature (${unitSuffix})`,
        data: values,
        borderColor: "#2563EB",
        backgroundColor: "rgba(37, 99, 235, 0.08)",
        borderWidth: 2.5,
        pointBackgroundColor: "#2563EB",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.35,
        fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: `Recent Searches — Temperature (${unitSuffix})`,
          font: { size: 14, weight: "bold" }
        },
        tooltip: {
          callbacks: {
            label: (tip) => `${tip.parsed.y} ${unitSuffix}`
          }
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          title: { display: true, text: unitSuffix }
        },
        x: {
          title: { display: true, text: "City" }
        }
      }
    }
  });
});
