// const dropdown=document.getElementById("select");
// dropdown.addEventListener("change", function () {
//     const selectedOption = dropdown.options[dropdown.selectedIndex];
//     const optionName = selectedOption.getAttribute("name");
//     console.log(optionName)
// })

// load all indian states on page load
document.addEventListener("DOMContentLoaded", async() => {
  console.log("DOM Loaded. Fetching data...");
  const states=await getStatesByCountry('IN');
  fillStatesDropdown(states);
});

async function getStatesByCountry(countryCode) {
    
  const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states`, {
    headers: { 'X-CSCAPI-KEY': 'fcf7987fb830afe639ac2b09312409e430d58ef01b393e070ce8a37a4f48cd2a' }
})
  if (response.ok) {
    const states = await response.json();
    console.log(`Found ${states.length} states in ${countryCode}`);
    return states
  } else {
    console.error('Country not found or no states available');
  }
};

const fillStatesDropdown =(states)=>{
const stateDropdown= document.querySelector("#")
 
for(const state of states){
   const option=document.createElement("option")
    option.value=state.iso2
    option.textContent=state.name
    stateDropdown.appendChild(option) 
}
}


// load all cities of that state on selecting state from dropdown (onChange event)
document.addEventListener("change",async function(e){
const cities=await loadCities(e)
fillCitiesDropdown(cities)
})

const loadCities=async (e)=>{
const value=e.target.value
 const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states`, {
    headers: { 'X-CSCAPI-KEY': 'fcf7987fb830afe639ac2b09312409e430d58ef01b393e070ce8a37a4f48cd2a' }
})
  if (response.ok) {
    const cities = await response.json();
    console.log(`Found ${cities.length} states in ${value}`);
    return cities
  } else {
    console.error('Country not found or no states available');
  }
}

const fillCitiesDropdown =(cities)=>{
const cityDropdown= document.querySelector("#")

cities.forEach((city)=>{
   const option=document.createElement("option")
    option.value=state.iso2
    option.textContent=state.name
    stateDropdown.appendChild(option) 
})
}

// getWeather button clicked and fetch data and add in history array, create div and add z-index

// on clicking cross button , remove element div and show history 

// show avg, min and max temperature at bottom and diff from current city temp


<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>State → City Dropdown (India)</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    label { display: block; margin: 12px 0 6px; font-weight: 600; }
    select { min-width: 320px; padding: 6px; }
  </style>
</head>
<body>
  <label for="stateSelect">State / Union Territory</label>
  <select id="stateSelect">
    <option value="">-- Select State/UT --</option>
  </select>

  <label for="citySelect">City</label>
  <select id="citySelect" disabled>
    <option value="">-- Select City --</option>
  </select>

  <script>
    const INDIA_CITIES = {
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

    const stateSelect = document.getElementById('stateSelect');
    const citySelect  = document.getElementById('citySelect');

    (function initStates() {
      const states = Object.keys(INDIA_CITIES).sort((a, b) => a.localeCompare(b));
      for (const state of states) {
        const opt = document.createElement('option');
        opt.value = state;
        opt.textContent = state;
        stateSelect.appendChild(opt);
      }
    })();

    function resetCities() {
      citySelect.innerHTML = '<option value="">-- Select City --</option>';
      citySelect.disabled = true;
    }

    stateSelect.addEventListener('change', (e) => {
      const state = e.target.value;
      resetCities();
      if (!state) return;

      const cities = (INDIA_CITIES[state] || []).slice().sort((a, b) => a.localeCompare(b));
      for (const city of cities) {
        const opt = document.createElement('option');
        opt.value = city;
        opt.textContent = city;
        citySelect.appendChild(opt);
      }
      citySelect.disabled = cities.length === 0;
    });
  </script>
</body>
</html>