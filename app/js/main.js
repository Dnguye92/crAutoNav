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
	level_2_list_label.textContent = 'How many level-2 categories for #' + (i + 1);

	var level_2_list_amount = document.createElement('input');
	level_2_list_amount.className = 'form-control ' + 'level_2_list_amount' + [i] + ' level_2';
	level_2_list_amount.setAttribute('placeholder', 'How many level-2 categories?');
	level_2_list_amount.setAttribute('id', 'level_2_list_amount' + [i])

	var level_2_gen_btn = document.createElement('button');
	level_2_gen_btn.className = 'btn btn-default level_2-btn';
	level_2_gen_btn.textContent = 'Generate level-2';

	listContainer.appendChild(level_1_label);
	listContainer.appendChild(level_1_name);
	listContainer.appendChild(level_2_list_label);
	listContainer.appendChild(level_2_list_amount);
	listContainer.appendChild(level_2_gen_btn);
	generatedInputs.appendChild(listContainer);

	level_1_name_array.push(level_1_name);

	level_2_gen_btn.addEventListener('click', function() {
		//for loop to generate level-2 categories
		for(i = 0; i < level_2_list_amount.value; i++) {
			var level_2_label = document.createElement('h4');
			level_2_label.textContent = 'Info for level-2 category #' + (i + 1);

			var level_2_name = document.createElement('input');
			level_2_name.className = 'form-control level_2_name';
			level_2_name.setAttribute('placeholder', 'level-2 name');

			var level_2_url = document.createElement('input');
			level_2_url.className = 'form-control level_2_url';
			level_2_url.setAttribute('placeholder', 'http://www.UrlHere.com');

			var level_3_list_label = document.createElement('h4');
			level_3_list_label.textContent = 'How many level-3 categories for #' + (i + 1) + ' (Enter 0 if none)';

			var level_3_list_amount = document.createElement('input');
			level_3_list_amount.className = 'form-control ' + 'level_3_list_amount' + [i] + ' level_3';
			level_3_list_amount.setAttribute('id', 'level_3_list_amount' + [i]);
			level_3_list_amount.setAttribute('placeholder', 'How many level-3 categories?');

			var level_3_gen_btn = document.createElement('button');
			level_3_gen_btn.className = 'btn btn-primary level_3-btn';
			level_3_gen_btn.textContent = 'Generate level-3';
			
			listContainer.appendChild(level_2_label);
			listContainer.appendChild(level_2_name);
			listContainer.appendChild(level_2_url);
			listContainer.appendChild(level_3_list_label);
			listContainer.appendChild(level_3_list_amount);
			listContainer.appendChild(level_3_gen_btn);

			level_3_gen_btn.addEventListener('click', function() {
				//for loop to generate level-3 categories
				console.log(parseInt(level_3_list_amount.value));
				for(i = 0; i < level_3_list_amount.value; i++) {
					var level_3_label = document.createElement('h5');
					level_3_label.textContent = 'Info for level-3 category #' + (i + 1);

					var level_3_name = document.createElement('input');
					level_3_name.className = 'form-control level_3_name';
					level_3_name.setAttribute('placeholder', 'level-3 name')

					var level_3_url = document.createElement('input');
					level_3_url.className = 'form-control level_3_url';
					level_3_url.setAttribute('placeholder', 'http://www.UrlHere.com');

					listContainer.appendChild(level_3_label);
					listContainer.appendChild(level_3_name);
					listContainer.appendChild(level_3_url);
				}
			})
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
	var level_2_counter = 0;
	var level_3_counter = 0;

	for(var i = 0; i < totalCategoryAmount; i++) {
		var level_1_object = {};
		var level_2_list = [];
		var level_3_list = [];
		
		var level_2_list_amount = document.getElementById('level_2_list_amount' + i);
		console.log(level_2_list_amount.value);

		level_1_object['level-1'] = level_1_name_array[i].value;
		var level_2_count_start = level_2_counter;
		var level_2_count_end = level_2_counter + parseInt(level_2_list_amount.value);

		for(var j = level_2_counter; j < level_2_count_end; j++) {
			var level_2_objects = {};
			var level_2_objName = document.getElementsByClassName('level_2_name');
			var level_2_url = document.getElementsByClassName('level_2_url');
			var level_3_list_amount = document.getElementById('level_3_list_amount' + i);
			var level_3_count_start = level_3_counter;
			var level_3_count_end = level_3_counter + parseInt(level_3_list_amount.value);

			console.log(level_2_objName[j].value);
			console.log(level_2_url[j].value);

			for(var k = level_3_counter; k < level_3_count_end; k++) {
				var level_3_objects = {};
				var level_3_objName = document.getElementsByClassName('level_3_name');
				var level_3_url = document.getElementsByClassName('level_3_url');
				console.log(level_3_objName[k].value);
				console.log(level_3_url[k].value);

				level_3_objects['L3-name'] = level_3_objName[k].value;
				level_3_objects['L3-url'] = level_3_url[k].value;
				level_3_list.push(level_3_objects);
			}

			level_2_objects['L2-name'] = level_2_objName[j].value;
			level_2_objects['L2-url'] = level_2_url[j].value;
			level_2_list.push(level_2_objects);
			level_1_object['level-2-list'] = level_2_list;
			level_2_objects['level-3'] = level_3_list;
			level_3_counter += parseInt(level_3_list_amount.value);
		}
		level_2_counter += parseInt(level_2_list_amount.value);
		AllLevelsArray.push(level_1_object);
	}
	console.log(AllLevelsArray);
	
	generated_json.textContent = JSON.stringify(AllLevelsArray, null, 4);
}

function resetData() {
	generated_json.textContent = '';
	generated_inputs.textContent = '';
	categoryAmount.value = '';
	AllLevelsArray = [];
	generateBtn.removeAttribute('disabled');
}

generateBtn.addEventListener('click', appendInputs, false);
parseBtn.addEventListener('click', parseData, false);
resetBtn.addEventListener('click', resetData, false);