// accessibility.js
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  const defaultPrefs = {
    unit: "F",
    "set-severe": false,
    "set-temp": false,
    "set-precip": false,
    "set-air": false,
    "a11y-high-contrast": false,
    "a11y-large-text": false,
    "a11y-animations": false
  };

  let savedPrefs = JSON.parse(localStorage.getItem("userSettings")) || defaultPrefs;

  // Make sure all keys exist
  Object.keys(defaultPrefs).forEach(key => {
    if (!(key in savedPrefs)) savedPrefs[key] = defaultPrefs[key];
  });

  // Apply global accessibility classes
  body.classList.toggle("high-contrast", savedPrefs["a11y-high-contrast"] === true);
  body.classList.toggle("large-text", savedPrefs["a11y-large-text"] === true);
  body.classList.toggle("reduce-motion", savedPrefs["a11y-animations"] === true);
});
