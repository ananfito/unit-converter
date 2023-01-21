// VARIABLES
const convertBtn = document.getElementById("convert-btn")
let lengthTxt = document.getElementById("length-txt")
let volumeTxt = document.getElementById("volume-txt")
let massTxt = document.getElementById("mass-txt")

// EVENT LISTENERS 
convertBtn.addEventListener("click", convert)

// CONVERSION FUNCTION
function convert() {
  const inputValue = Number(document.getElementById("input-number").value)

  // DISTANCE: 1 meter = 3.281 feet
  // m -> ft
  const meters = (inputValue / 3.281).toFixed(3)
  // f -> m
  const feet = (inputValue * 3.281).toFixed(3)
  // render
  lengthTxt.innerText = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meters} meters`

  // VOLUME: 1 liter = 0.264 gallon
  // l -> gal
  const liters = (inputValue / 0.264).toFixed(3)
  // gal -> l
  const gallons = (inputValue * 0.264).toFixed(3)
  // render
  volumeTxt.innerText = `${inputValue} liters = ${gallons} gallons | ${inputValue} gallons = ${liters} liters`

  // MASS: 1 kilogram = 2.204 pound
  // kg -> lbs
  const kilograms = (inputValue / 2.204).toFixed(3)
  // lbs -> kg
  const pounds = (inputValue * 2.204).toFixed(3)
  // render
  massTxt.innerText = `${inputValue} kilos = ${pounds} pounds | ${inputValue} pounds = ${kilograms} kilos`
}