buttonEl = document.getElementById("button-el")
inputEl = document.getElementById("input-el")
lengthEl = document.getElementById("length-el")

const metertofeet = 3.281
const literstogallons =0.264
const kilogramstopounds = 2.204

buttonEl.addEventListener("click", function (){
    let displayvalue = inputEl.value
    
    lengthEl.textContent = `${displayvalue} meters = ${displayvalue * metertofeet.toFixed(3)} feet | ${displayvalue * metertofeet} feet = ${displayvalue} meters`
    
    volumeEl.textContent = `${displayvalue} meters = ${displayvalue * literstogallons.toFixed(3)} feet | ${displayvalue * literstogallons} feet = ${displayvalue} meters`
    
    massEl.textContent = `${displayvalue} meters = ${displayvalue * kilogramstopounds.toFixed(3)} feet | ${displayvalue * kilogramstopounds} feet = ${displayvalue} meters`
}) 
