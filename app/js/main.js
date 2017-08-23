var categoryAmount 		= document.getElementById('category_amount');
var generateBtn 		= document.getElementById('generate_btn');
var parseBtn 			= document.getElementById('parse_btn');
var resetBtn 			= document.getElementById('reset_btn');
var generatedInputs 	= document.getElementById('generated_inputs');
var generatedJson 		= document.getElementById('generated_json');
var parsedContainer 	= document.getElementById('container_parsed-html');
var totalCategoryAmount = parseInt(categoryAmount.value);

// create arrays and objects that will hold the JSON data
var AllLevelsArray = [];
var level_1_name_array = [];

function createInputs() {
	var listContainer = document.createElement('div');
	listContainer.className = 'list_container';

	var level_1_label = document.createElement('h3');
	level_1_label.textContent = 'Name of level-1 category #' + (i + 1);

	var level_1_name = document.createElement('input');
	level_1_name.className = 'form-control ' + 'level_1-name' + [i] + ' level_1';
	level_1_name.setAttribute('placeholder', 'Level-1 name');

	var level_2_list_label = document.createElement('h3');
	level_2_list_label.textContent = 'How many level 2 categories for #' + (i + 1);

	var level_2_list_amount = document.createElement('input');
	level_2_list_amount.className = 'form-control ' + 'level_2_list_amount' + [i] + ' level_2';
	level_2_list_amount.setAttribute('placeholder', 'How many level 2 categories?');
	level_2_list_amount.setAttribute('id', 'level_2_list_amount' + [i])

	var level_2_gen_btn = document.createElement('button');
	level_2_gen_btn.className = 'btn btn-default level_2-btn';
	level_2_gen_btn.textContent = 'Generate level 2';

	listContainer.appendChild(level_1_label);
	listContainer.appendChild(level_1_name);
	listContainer.appendChild(level_2_list_label);
	listContainer.appendChild(level_2_list_amount);
	listContainer.appendChild(level_2_gen_btn);
	generatedInputs.appendChild(listContainer);

	level_1_name_array.push(level_1_name);

	level_2_gen_btn.addEventListener('click', function() {

		for(i = 0; i < level_2_list_amount.value; i++) {
			var level_2_label = document.createElement('h4');
			level_2_label.textContent = 'Info for level 2 category #' + (i + 1);

			var level_2_name = document.createElement('input');
			level_2_name.className = 'form-control level_2_name';
			level_2_name.setAttribute('placeholder', 'level 2 name');

			var level_2_url = document.createElement('input');
			level_2_url.className = 'form-control level_2_url';
			level_2_url.setAttribute('placeholder', 'http://www.UrlHere.com');

			// save for after we finish storing data for level 2
			// var level_3 = document.createElement('input');
			
			listContainer.appendChild(level_2_label);
			listContainer.appendChild(level_2_name);
			listContainer.appendChild(level_2_url);
		}
		// this is for each individual level 2 generator button
		this.setAttribute('disabled', 'true');
	}, false)
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
	for(var i = 0; i < totalCategoryAmount; i++) {
		var level_1_object = {};
		var level_2_list = [];
		
		var level_2_list_amount = document.getElementById('level_2_list_amount' + i);
		console.log(level_2_list_amount.value);

		level_1_object['level-1'] = level_1_name_array[i].value;

		for(var j = 0; j < level_2_list_amount.value; j++) {
			var level_2_objects = {};
			var level_2_objName = document.getElementsByClassName('level_2_name');
			var level_2_url = document.getElementsByClassName('level_2_url');
			console.log(level_2_objName[j].value);
			console.log(level_2_url[j].value);

			level_2_objects['L2-name'] = level_2_objName[j].value;
			level_2_objects['L2-url'] = level_2_url[j].value;
			level_2_list.push(level_2_objects);
			level_1_object['level-2-list'] = level_2_list;
		}

		AllLevelsArray.push(level_1_object);
	}
	console.log(AllLevelsArray);
	
	generated_json.textContent = JSON.stringify(AllLevelsArray, null, 4);
}

generateBtn.addEventListener('click', appendInputs, false);
parseBtn.addEventListener('click', parseData, false);

