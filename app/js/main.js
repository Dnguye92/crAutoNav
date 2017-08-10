var categoryAmount = document.getElementById('category_amount');
var generateBtn = document.getElementById('generate_btn');
var parseBtn = document.getElementById('parse_btn');
var resetBtn = document.getElementById('reset_btn');
var generatedInputs = document.getElementById('generated_inputs');
var generatedJson = document.getElementById('generated_json');
var parsedContainer = document.getElementById('container_parsed-html');
var totalCategoryAmount = parseInt(categoryAmount.value);
console.log(generatedInputs);

// create arrays and objects that will hold the JSON data
var AllLevelsArray = [];
var level_1_name_array = [];

function createInputs() {
	var level_1_label = document.createElement('h3');
	level_1_label.textContent = 'Name of level-1 category #' + (i + 1);

	var level_1_name = document.createElement('input');
	level_1_name.className = 'form-control ' + 'level_1-name' + [i] + ' level_1';
	level_1_name.setAttribute('placeholder', 'Level-1 name');

	generatedInputs.appendChild(level_1_label);
	generatedInputs.appendChild(level_1_name);

	level_1_name_array.push(level_1_name);
}

function appendInputs() {
	totalCategoryAmount = parseInt(categoryAmount.value)
	console.log(totalCategoryAmount);

	generateBtn.setAttribute('disabled', 'true');

	for(i = 0; i < totalCategoryAmount; i++) {
		createInputs();
	}

}

function parseData() {
	totalCategoryAmount = parseInt(categoryAmount.value);
	
	for(i = 0; i < totalCategoryAmount; i++) {
		var level_1_object = {};
		console.log(level_1_name_array[i].value);

		level_1_object['level-1'] = level_1_name_array[i].value;
		AllLevelsArray.push(level_1_object);
	}
	console.log(AllLevelsArray);
	
	generated_json.textContent = JSON.stringify(AllLevelsArray, null, 4);
}

generateBtn.addEventListener('click', appendInputs, false);
parseBtn.addEventListener('click', parseData, false);

