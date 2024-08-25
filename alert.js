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