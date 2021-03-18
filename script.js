const funcName = (name,color) =>{
	const tags = document.querySelectorAll(name)
	tags.forEach(elem => {
		elem.style.backgroundColor = color
	})
}
funcName ("p","green")


const LinkCount = () => {
	const need = document.querySelectorAll('a')
	console.log(need.length)
	console.log (need[0].innerText)
	console.log (need[need.length-1].innerText)
}
LinkCount()



const Spicok = (name,color,sight) =>{
	const tags = document.querySelectorAll(name)
	tags.forEach(elem => {
		elem.style.color = color
		elem.style.fontSize = sight
	})
}
Spicok ("li","red","10px")
const Ed = (txt) => {
	let tex = document.getElementById ('rid')
	let lid = document.createElement('li')
	lid.appendChild(document.createTextNode(txt))
	tex.appendChild(lid)
}
Ed ('Краков')
const Delet = () => {
	let tex = document.getElementById ('rid')
	tex.removeChild(tex.lastElementChild)
}
Delet()