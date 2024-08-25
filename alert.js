// hello_w
alert('Я, JavaScript!');

// variables
(function Variables_exercise_one() {
	"use strict";

		let admin;
		let name = "Джон";

		admin = name;

		alert(admin);
})();

(function Variables_exercise_two() {
	"use strict";

		let ourPlanetName;
		let currentUserName;
})();

(function Variables_exercise_three() {
	"use strict";

	const BIRTHDAY = '18.04.1982'; // birthday пишем заглавными, т.к. значение не изменяется
	const age = someCode(BIRTHDAY); // age пишем маленькими буквами, т.к. значение изменяется с каждым годом
})();

// data_type
(function Data_type_exercise_one() {
	"use strict";

	let name = "Ilya";

	alert( `hello ${1}` ); // hello 1
	alert( `hello ${"name"}` ); // hello name
	alert( `hello ${name}` ); // hello Ilya
})();

// interaction
(function Interaction_exercise_one() {
	"use strict";

	let userName = prompt('Введите имя:', '');

	alert(userName);
})();

// operators
(function Operators_exercise_one() {
	"use strict";

	let a = 1, b = 1;
	let c = ++a; 
	let d = b++; 

	alert(a); // 2
	alert(b); // 2
	alert(c); // 2
	alert(d); // 1
})();

(function Operators_exercise_two() {
	"use strict";

	let a = 2;
	let x = 1 + (a *= 2);

	alert(a); // 4
	alert(x); // 5
})();

(function Operators_exercise_three() {
	"use strict";

	"" + 1 + 0 // "10"
	"" - 1 + 0 // -1
	true + false // true
	6 / "3" // 2
	"2" * "3" // 6
	4 + 5 + "px" // 9px
	"$" + 4 + 5 // $45
	"4" - 2 // 2
	"4px" - 2 // NaN
	"  -9  " + 5 // " -9 5"
	"  -9  " - 5 // -14
	null + 1 // 1
	undefined + 1 // NaN
	" \t \n" - 2 // -2
})();

(function Operators_exercise_four() {
	"use strict";

	let a = prompt("Первое число?", 1);
	let b = prompt("Второе число?", 2);

	alert(+a + +b); // 3
})();

// comparison
(function Comparison_exercise_one() {
	"use strict";

	5 > 4 // true
	"ананас" > "яблоко" // false
	"2" > "12" // true
	undefined == null // true
	undefined === null // false
	null == "\n0\n" // false
	null === +"\n0\n" // false
})();

// if
(function If_exercise_one() {
	"use strict";

	if ("0") {
		alert( 'Привет' ); // Выведется 'Привет'
	}
})();

(function If_exercise_two() {
	"use strict";

	let oficialName = prompt('Какое официальное название JavaScript?', '');

	if (oficialName == 'ECMAScript') {
		alert('Верно!');
	}	else {
		alert('Не знаете? ECMAScript');
	}
})();

(function If_exercise_three() {
	"use strict";

	let value = prompt('Введите число:', 0);

	if (value > 0) {
		alert(1);
	} else if (value < 0) {
		alert(-1);
	} else {
		alert(0);
	}
})();

(function If_exercise_four() {
	"use strict";

	let result;

	result = (a + b < 4) ? 'Мало' : 'Много';
})();

(function If_exercise_five() {
	"use strict";

	let message;

	message = (login == 'Сотрудник') ? 'Привет' :
	(login == 'Директор') ? 'Здравствуйте' :
	(login == '') ? 'Нет логина' :
	'';
})();

// logic_op
(function If_exercise_one() {
	"use strict";

	alert( null || 2 || undefined ); // 2
})();

(function If_exercise_two() {
	"use strict";

	alert( alert(1) || 2 || alert(3) ); // 1, затем 2
})();

(function If_exercise_three() {
	"use strict";

	alert( 1 && null && 2 ); // null
})();

(function If_exercise_four() {
	"use strict";

	alert( alert(1) && alert(2) ); // 1, затем undefined
})();

(function If_exercise_five() {
	"use strict";

	alert( null || 2 && 3 || 4 ); // 3
})();

(function If_exercise_six() {
	"use strict";

	let value = NaN;

	value &&= 10;
	value ||= 20;
	value &&= 30;
	value ||= 40;

	alert(value); // 30
})();

(function If_exercise_seven() {
	"use strict";

	let age = prompt('Сколько вам лет: ', '');

	if (age >= 14 && age <= 90) {
		alert('Норм');
	} else {
		alert('Не норм');
	}
})();

(function If_exercise_eight() {
	"use strict";

	let age = prompt('Сколько вам лет: ', '');

	if (!(age >= 14 && age <= 90)) {
		alert('Норм');
	} else {
		alert('Не норм');
	}

	if (age > 14 || age < 90) {
		alert('Норм');
	} else {
		alert('Не норм');
	}
})();

(function If_exercise_nine() {
	"use strict";

	if (-1 || 0) alert( 'first' ); // выполнится
	if (-1 && 0) alert( 'second' ); // не выполнится 
	if (null || -1 && 1) alert( 'third' ); // выполнится 
})();

(function If_exercise_ten() {
	"use strict";

	let login = prompt('Кто там?', '');

	if (login == 'Админ') {
		let pass = prompt('Введите пароль: ', '');

		if (pass == 'Я Главный') {
			alert('Здравствуйте!'); 
		} else if (pass === '' || pass === null) {
			alert('Отменено');
		} else {
			alert('Неверный пароль');
		}
	} else if (login === '' || login === null) {
		alert('Отменено');
	} else {
		alert('Я вас не знаю');
	}
})();

// null
(function Null_exercise_one() {
	"use strict";

	alert(undefined ?? NaN ?? null ?? "" ?? " "); // NaN
})();

(function Null_exercise_two() {
	"use strict";

	let city = null;

	city ??= "Берлин";
	city ??= null;
	city ??= "Кёльн";
	city ??= "Гамбург";

	alert(city); // Берлин
})();

(function Null_exercise_three() {
	"use strict";

	let num1 = 10,
	num2 = 20,
	result;

	result ??= num1 ?? num2;
})();

// cycles
(function Cycles_exercise_one() {
	"use strict";

	let i = 3;

	while (i) {
		alert( i-- ); // 3 -> 2 -> 1
	}
})();

(function Cycles_exercise_two() {
	"use strict";

	let i = 0;
	while (++i < 5) alert(i); // 1 -> 2 -> 3 -> 4

	let j = 0;
	while (j++ < 5) alert(j); // 1 -> 2 -> 3 -> 4 -> 5
})();

(function Cycles_exercise_three() {
	"use strict";

	for (let i = 0; i < 5; i++) alert( i ); // 1 -> 2 -> 3 -> 4

	for (let i = 0; i < 5; ++i) alert( i ); // 1 -> 2 -> 3 -> 4
	
	// нет разницы в записях ++i и i++ для for
})();

(function Cycles_exercise_four() {
	"use strict";

	for (let i = 2; i <= 10; i++) {
		if (i % 2 == 0) {
			alert(i);
		}
	}
})();

(function Cycles_exercise_five() {
	"use strict";

	let i = 0;

	while (i > 3) {
		alert(`number ${i}!`);
		i++;
	}
})();

(function Cycles_exercise_six() {
	"use strict";

	let num;

	do {
		num = prompt('Введите число больше 100: ', 0);
	} while (num <= 100 && num);
})();

(function Cycles_exercise_seven() {
	"use strict";

	let n = 10;

	primeNum:
	for (let i = 2; i <= n; i++) {
		for (let j = 2; j < i; j++) {
			if (i % j == 0) continue primeNum;
		}
		alert(i);
	}
})();

// switch 
(function Switch_exercise_one() {
	"use strict";

	let browser;

	if (browser == 'Edge') {
		alert("You've got the Edge!");
	} else if (browser == 'Chrome'
		|| browser == 'Firefox'
		|| browser == 'Safari'
		|| browser == 'Opera' ) {
			alert("Okay we support these browsers too");
	} else {
		alert("We hope that this page looks ok!");
	}
})();

(function Switch_exercise_one() {
	"use strict";

	let number = +prompt('Введите число между 0 и 3: ', '');

	switch (number) {
		case 0:
			alert('Вы ввели число 0');
			break;
		case 1:
			alert('Вы ввели число 1');
			break;
		case 2:
		case 3:
			alert('Вы ввели число 2, а может и 3');
			break;
	}
})();

// function
(function Function_exercise_one() {
	"use strict";

	let age = prompt('Сколько вам лет: ', '');

	function checkAge(age) {
		if (age > 18) {
			return true;
		} else {
			return confirm('Родители разрешили?'); 
		}
	}

	function checkAge1(age) {
		if (age > 18) {
			return true;
		}
		return confirm('Родители разрешили?');
	}

	// работает одинаково, что с else, что без него
})();