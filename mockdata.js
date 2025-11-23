/*******************************
  WEATHERLY – MOCK DATA (Sprint 1)
  Created for the team by Loule
*******************************/

/* -----------------------------
   DEFAULT SAVED LOCATIONS
------------------------------ */
const defaultSavedLocations = [
  {
    id: 1,
    name: "New York, NY",
    country: "USA",
    temp: 72,
    condition: "Partly Cloudy",
    high: 75,
    low: 61,
    humidity: 60,
    windSpeed: 8,
    icon: "🌥"
  },
  {
    id: 2,
    name: "Houston, TX",
    country: "USA",
    temp: 88,
    condition: "Sunny",
    high: 91,
    low: 79,
    humidity: 50,
    windSpeed: 10,
    icon: "☀️"
  },
  {
    id: 3,
    name: "Chicago, IL",
    country: "USA",
    temp: 65,
    condition: "Rain",
    high: 67,
    low: 55,
    humidity: 72,
    windSpeed: 9,
    icon: "🌧"
  }
];

/* -----------------------------
   WEEKLY FORECASTS
   Matches weeklyForecast.html
------------------------------ */
const weeklyForecastByLocation = {
  "New York, NY": [
    { day: "Mon", high: 75, low: 61, condition: "Cloudy", icon: "☁️" },
    { day: "Tue", high: 77, low: 63, condition: "Sunny", icon: "☀️" },
    { day: "Wed", high: 70, low: 58, condition: "Rain", icon: "🌧" },
    { day: "Thu", high: 68, low: 57, condition: "Cloudy", icon: "☁️" },
    { day: "Fri", high: 72, low: 60, condition: "Sunny", icon: "☀️" },
    { day: "Sat", high: 78, low: 64, condition: "Partly Cloudy", icon: "🌤" },
    { day: "Sun", high: 76, low: 62, condition: "Windy", icon: "🌬" }
  ],

  "Houston, TX": [
    { day: "Mon", high: 90, low: 79, condition: "Sunny", icon: "☀️" },
    { day: "Tue", high: 92, low: 80, condition: "Sunny", icon: "☀️" },
    { day: "Wed", high: 88, low: 78, condition: "Cloudy", icon: "☁️" },
    { day: "Thu", high: 85, low: 76, condition: "Rain", icon: "🌧" },
    { day: "Fri", high: 89, low: 78, condition: "Sunny", icon: "☀️" },
    { day: "Sat", high: 91, low: 79, condition: "Windy", icon: "🌬" },
    { day: "Sun", high: 87, low: 77, condition: "Storm", icon: "⛈" }
  ],

  "Chicago, IL": [
    { day: "Mon", high: 67, low: 55, condition: "Rain", icon: "🌧" },
    { day: "Tue", high: 65, low: 55, condition: "Cloudy", icon: "☁️" },
    { day: "Wed", high: 68, low: 54, condition: "Partly Cloudy", icon: "🌥" },
    { day: "Thu", high: 70, low: 56, condition: "Sunny", icon: "☀️" },
    { day: "Fri", high: 73, low: 58, condition: "Sunny", icon: "☀️" },
    { day: "Sat", high: 71, low: 57, condition: "Cloudy", icon: "☁️" },
    { day: "Sun", high: 69, low: 56, condition: "Rain", icon: "🌧" }
  ]
};

/* -----------------------------
   ALERT DATA
   Matches weatherAlerts.html
------------------------------ */
const defaultWeatherAlerts = [
  {
    id: 1,
    title: "Severe Thunderstorm Warning",
    location: "New York, NY",
    country: "USA",
    severity: "Severe",
    description: "A severe thunderstorm warning has been issued for the area. Strong winds and heavy rainfall expected.",
    timeRange: "2:00 PM - 6:00 PM",
    issuedHoursAgo: 1
  },
  {
    id: 2,
    title: "Heat Advisory",
    location: "Houston, TX",
    country: "USA",
    severity: "Moderate",
    description: "Temperatures will reach above 95°F. Stay hydrated and avoid prolonged outdoor exposure.",
    timeRange: "11:00 AM - 8:00 PM",
    issuedHoursAgo: 3
  },
  {
    id: 3,
    title: "Air Quality Alert",
    location: "Tokyo",
    country: "Japan",
    severity: "Info",
    description: "Moderate air quality. Sensitive groups should limit outdoor activities.",
    timeRange: "6:00 AM - 9:00 PM",
    issuedHoursAgo: 5
  }
];

/* -----------------------------
   PAST WEATHER STRUCTURE
   (Used in Sprint 2+, but initialized here)
------------------------------ */
const defaultPastWeather = {
  "New York, NY": [
    { date: "2024-11-10", high: 70, low: 60, condition: "Rain" },
    { date: "2024-11-11", high: 72, low: 61, condition: "Cloudy" }
  ],
  "Houston, TX": [
    { date: "2024-11-10", high: 90, low: 79, condition: "Sunny" },
    { date: "2024-11-11", high: 92, low: 80, condition: "Sunny" }
  ],
  "Chicago, IL": [
    { date: "2024-11-10", high: 67, low: 54, condition: "Cloudy" },
    { date: "2024-11-11", high: 65, low: 52, condition: "Rain" }
  ]
};

/* -----------------------------
   INITIALIZER
------------------------------ */
function initializeWeatherlyMockData() {
  if (!localStorage.getItem("weatherlySavedLocations")) {
    localStorage.setItem("weatherlySavedLocations", JSON.stringify(defaultSavedLocations));
  }

  // Check if weatherAlerts exists and has the new structure (with timeRange)
  const existingAlerts = localStorage.getItem("weatherAlerts");
  if (!existingAlerts) {
    localStorage.setItem("weatherAlerts", JSON.stringify(defaultWeatherAlerts));
  } else {
    // If alerts exist but don't have the new fields, update them
    try {
      const parsed = JSON.parse(existingAlerts);
      if (parsed.length > 0 && !parsed[0].hasOwnProperty('timeRange')) {
        localStorage.setItem("weatherAlerts", JSON.stringify(defaultWeatherAlerts));
      }
    } catch (e) {
      // If parsing fails, set default
      localStorage.setItem("weatherAlerts", JSON.stringify(defaultWeatherAlerts));
    }
  }

  if (!localStorage.getItem("pastWeatherData")) {
    localStorage.setItem("pastWeatherData", JSON.stringify(defaultPastWeather));
  }
}

initializeWeatherlyMockData();
