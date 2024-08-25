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
