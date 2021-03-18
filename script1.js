const row = (name, country, weight) => {
	const sun = document.getElementById ('row')
	const td1 = document.createElement ('td')
	const td2 = document.createElement ('td')
	const td3 = document.createElement ('td')
	td1.appendChild(document.createTextNode(name))
	td2.appendChild(document.createTextNode(country))
	td3.appendChild(document.createTextNode(weight))
	sun.append(td1,td2,td3)
}
row("Киев", "Украина", 12000)