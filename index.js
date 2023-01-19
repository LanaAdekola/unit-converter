buttonEl = document.getElementById("button-el")
inputEl = document.getElementById("input-el")
lengthEl = document.getElementById("length-el")

const metertofeet = 3.281
const literstogallons =0.264
const kilogramstopounds = 2.204

buttonEl.addEventListener("click", function (){
     let displayvalue = inputEl.value
     
     lengthEl.textContent = `${displayvalue} meters = ${displayvalue * metertofeet} feet | ${displayvalue * metertofeet} feet = ${displayvalue} meters`
     
     volumeEl.textContent = `${displayvalue} meters = ${displayvalue * literstogallons} feet | ${displayvalue * literstogallons} feet = ${displayvalue} meters`
     
     massEl.textContent = `${displayvalue} meters = ${displayvalue * kilogramstopounds} feet | ${displayvalue * kilogramstopounds} feet = ${displayvalue} meters`
})
