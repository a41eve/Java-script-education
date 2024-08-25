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
