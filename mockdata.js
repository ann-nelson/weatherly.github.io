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
   DETAILED ALERT DATA
   For detailedAlert.html
------------------------------ */
const detailedAlertsData = {
  1: {
    id: 1,
    type: "severe",
    title: "Severe Thunderstorm Warning",
    location: "New York",
    country: "USA",
    description: "A severe thunderstorm warning has been issued for the area. Strong winds and heavy rainfall expected.",
    startTime: "2:00 PM",
    endTime: "6:00 PM",
    effectivePeriod: "2:00 PM - 6:00 PM",
    issuedHoursAgo: 1,
    issuedBy: "National Weather Service - New York",
    affectedAreas: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"],
    instructions: [
      "Seek shelter in a sturdy building immediately",
      "Stay away from windows and doors",
      "Avoid using electrical appliances",
      "Do not go outside until the storm has passed",
      "If driving, pull over safely and wait for conditions to improve"
    ],
    details: {
      windSpeed: "60-70 mph",
      precipitation: "Heavy (2-3 inches/hour)",
      visibility: "Less than 0.25 miles",
      severity: "Severe",
      urgency: "Immediate",
      certainty: "Observed"
    }
  },
  2: {
    id: 2,
    type: "moderate",
    title: "Heat Advisory",
    location: "Houston",
    country: "USA",
    description: "Temperatures will reach above 95°F. Stay hydrated and avoid prolonged outdoor exposure.",
    startTime: "11:00 AM",
    endTime: "8:00 PM",
    effectivePeriod: "11:00 AM - 8:00 PM",
    issuedHoursAgo: 3,
    issuedBy: "National Weather Service - Houston",
    affectedAreas: ["Downtown Houston", "The Heights", "Montrose", "Midtown"],
    instructions: [
      "Drink plenty of water throughout the day",
      "Avoid strenuous outdoor activities",
      "Wear lightweight and light-colored clothing",
      "Never leave children or pets in vehicles",
      "Check on elderly neighbors and relatives"
    ],
    details: {
      temperature: "95-100°F",
      heatIndex: "105-110°F",
      humidity: "High (70-80%)",
      severity: "Moderate",
      urgency: "Expected",
      certainty: "Likely"
    }
  },
  3: {
    id: 3,
    type: "info",
    title: "Air Quality Alert",
    location: "Tokyo",
    country: "Japan",
    description: "Moderate air quality. Sensitive groups should limit outdoor activities.",
    startTime: "6:00 AM",
    endTime: "9:00 PM",
    effectivePeriod: "6:00 AM - 9:00 PM",
    issuedHoursAgo: 5,
    issuedBy: "Japan Meteorological Agency",
    affectedAreas: ["Shibuya", "Shinjuku", "Chiyoda", "Minato"],
    instructions: [
      "Sensitive groups should limit outdoor activities",
      "Keep windows closed if air quality worsens",
      "Use air purifiers if available",
      "Avoid outdoor exercise during peak hours",
      "Monitor air quality updates"
    ],
    details: {
      airQualityIndex: "Moderate (51-100)",
      primaryPollutant: "PM2.5",
      visibility: "Good",
      severity: "Info",
      urgency: "Future",
      certainty: "Possible"
    }
  }
};

/* -----------------------------
   PAST WEATHER LOCATIONS
   For pastWeather.html
------------------------------ */
const pastWeatherLocations = [
  { id: "1", name: "New York", country: "USA" },
  { id: "2", name: "London", country: "UK" },
  { id: "3", name: "Tokyo", country: "Japan" },
  { id: "4", name: "Paris", country: "France" },
  { id: "5", name: "Sydney", country: "Australia" },
  { id: "6", name: "Dubai", country: "UAE" },
  { id: "7", name: "Singapore", country: "Singapore" },
  { id: "8", name: "Los Angeles", country: "USA" },
];

/* -----------------------------
   PAST WEATHER HISTORICAL DATA
   Static data for all time ranges (7, 14, 30, 90 days)
   Structure: { locationId: { timeRange: [data array] } }
------------------------------ */
function generatePastWeatherDates(days) {
  const dates = [];
  const today = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    dates.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
  }
  return dates;
}

// Helper function to generate static data for a location
function generateLocationData(locationId, days, baseTemp, variance, baseHumidity) {
  const dates = generatePastWeatherDates(days);
  const data = [];
  
  // Create a seed-based pattern for consistent values
  const seed = parseInt(locationId) * 1000; // Different seed per location
  
  for (let i = 0; i < days; i++) {
    const index = seed + i;
    const seasonalEffect = Math.sin((i / days) * Math.PI * 2) * 3;
    const dayVariation = (index % 7) * 0.5; // Slight variation by day
    const avgTemp = Math.round(baseTemp + seasonalEffect + dayVariation);
    const highTemp = avgTemp + 5 + (index % 4);
    const lowTemp = avgTemp - 5 - (index % 3);
    
    // Precipitation varies by day and location - each location has unique pattern
    const precipLocationOffset = parseInt(locationId) * 11; // Unique offset per location
    const precipPattern = (i + precipLocationOffset) % 23; // Different pattern per location
    const locationPrecipBase = (parseInt(locationId) % 7) * 3; // Base variation per location (0-18)
    const precipitation = (precipPattern % 5 === 0) ? 45 + (precipPattern % 20) + locationPrecipBase : 
                         (precipPattern % 3 === 0) ? 20 + (precipPattern % 15) + locationPrecipBase : 
                         5 + (precipPattern % 10) + locationPrecipBase;
    
    // Humidity varies based on location's base humidity with day-to-day variation
    // Use locationId to create unique patterns per location
    const humidityLocationOffset = parseInt(locationId) * 7; // Unique offset per location
    const dayPattern = (i + humidityLocationOffset) % 17; // Different pattern per location
    const humidityVariation = (dayPattern % 15) - 7; // -7 to +7 variation
    const locationModifier = (parseInt(locationId) % 5) * 2; // Additional location-specific variation
    const humidity = Math.round(baseHumidity + humidityVariation + (dayPattern % 3 === 0 ? 3 : -2) + locationModifier);
    
    // Wind speed varies slightly
    const windSpeed = 8 + (index % 8) + (index % 3 === 0 ? 2 : 0);
    
    data.push({
      date: dates[i],
      temp: avgTemp,
      high: highTemp,
      low: lowTemp,
      precipitation: Math.min(100, precipitation),
      humidity: Math.min(100, Math.max(30, humidity)),
      windSpeed: Math.min(25, windSpeed)
    });
  }
  
  return data;
}

// Function to get historical data for a location and time range
// This generates the data on-demand with current dates
function getPastWeatherHistoricalData(locationId, timeRange) {
  const locationConfigs = {
    "1": { base: 70, variance: 8, humidity: 65 }, // New York - moderate humidity
    "2": { base: 60, variance: 6, humidity: 75 }, // London - high humidity
    "3": { base: 68, variance: 7, humidity: 70 }, // Tokyo - moderate-high humidity
    "4": { base: 65, variance: 6, humidity: 72 }, // Paris - moderate-high humidity
    "5": { base: 78, variance: 5, humidity: 68 }, // Sydney - moderate humidity
    "6": { base: 92, variance: 6, humidity: 55 }, // Dubai - low humidity (desert)
    "7": { base: 86, variance: 3, humidity: 82 }, // Singapore - very high humidity (tropical)
    "8": { base: 75, variance: 7, humidity: 58 }  // Los Angeles - low-moderate humidity
  };
  
  const config = locationConfigs[locationId] || { base: 70, variance: 8, humidity: 60 };
  return generateLocationData(locationId, 
    timeRange === '7days' ? 7 : timeRange === '14days' ? 14 : timeRange === '30days' ? 30 : 90,
    config.base, 
    config.variance,
    config.humidity
  );
}

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

  // Store detailed alerts data
  if (!localStorage.getItem("detailedAlertsData")) {
    localStorage.setItem("detailedAlertsData", JSON.stringify(detailedAlertsData));
  } else {
    // Update if structure is outdated (check if first alert has all required fields)
    try {
      const stored = JSON.parse(localStorage.getItem("detailedAlertsData"));
      if (!stored[1] || !stored[1].instructions || !stored[1].affectedAreas) {
        localStorage.setItem("detailedAlertsData", JSON.stringify(detailedAlertsData));
      }
    } catch (e) {
      localStorage.setItem("detailedAlertsData", JSON.stringify(detailedAlertsData));
    }
  }
}

// Make data globally accessible
window.detailedAlertsData = detailedAlertsData;
window.pastWeatherLocations = pastWeatherLocations;
window.getPastWeatherHistoricalData = getPastWeatherHistoricalData;

initializeWeatherlyMockData();