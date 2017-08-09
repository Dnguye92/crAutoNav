function category() {
  var list = document.createElement('ul');
  var item1 = document.createElement('li');
  var item2 = document.createElement('li');
  var input1 = document.createElement('input');
  var input2 = document.createElement('input');

  input1.placeholder = 'category?';
  input2.placeholder = 'url?';
  list.className = 'list'
  input1.className = 'category ' + i;
  input2.className = 'category ' + i;

  item1.appendChild(input1);
  item2.appendChild(input2);
  list.appendChild(item1);
  list.appendChild(item2);

  document.body.appendChild(list);
};
function createCategories() {
  var categories = document.getElementById('number').value;
  for (i = 0; i < categories; i++) {
    category();
  };
};

var arr = [];
function createObjs() {
  var categories = document.getElementsByClassName('list');
  console.log(categories);
  for (var i = 0; i < categories.length; i++) {
    var obj = {};
    var categoryValues = document.getElementsByClassName('category ' + i);
    obj.category = categoryValues[0].value;
    obj.url = categoryValues[1].value;
    console.log(obj.category, obj.url);
    arr.push(obj);
  };
  console.log(arr);
};