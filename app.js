'use strict'
window.addEventListener('DOMContentLoaded', () => {
	const userFirstNum = prompt('Iltimos birinchi raqamni kiriting')
	const userSecondNum = prompt('Iltimos ikkinchi raqamni kiriting')

	if (userFirstNum.trim() === '' || userSecondNum.trim() === '') {
		alert('Qiymat bo‘sh bo‘lishi mumkin emas!')
		return
	}

	if (isNaN(userFirstNum) || isNaN(userSecondNum)) {
		alert('Iltimos, faqat son kiriting!')
		return
	}

	const userOperation = prompt('Iltimos amalni kiriting')

	let a = +userFirstNum
	let b = +userSecondNum

	// switch
	switch (userOperation) {
		case '+':
			alert(calculator(a, b, add))
			break
		case '-':
			alert(calculator(a, b, subtract))
			break
		case '*':
			alert(calculator(a, b, multiply))
			break
		case '/':
			alert(calculator(a, b, divide))
			break
		default:
			alert("Iltimos, to'g'ri amal kiriting!")
	}

	// add
	function add(a, b) {
		return a + b
	}

	// subtract
	function subtract(a, b) {
		return a - b
	}

	// multiply
	function multiply(a, b) {
		return a * b
	}

	// divide
	function divide(a, b) {
		return a / b
	}

	// callback
	function calculator(a, b, callback) {
		return callback(a, b)
	}
})
