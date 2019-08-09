loadData();

//gets value and key pairs from database

function loadData(){
  let retrieveItems = chrome.storage.sync.get(null, function(results){
    let noteKey = Object.keys(results);
    for (let item of noteKey){
      let noteVal = results[item];
      displayData(item, noteKey);
    }
  });
}

//displays the values as items in a list

function displayData(title, body){
  let noteHolder = document.querySelector('ul');
  let noteLi = document.createElement('li');
  noteLi.setAttribute('class','note');
  noteLi.textContent = title + ": " + body;
  noteHolder.appendChild(noteLi);
}

let clearButton = document.getElementById('clear');
clearButton.addEventListener("click", clearFxn);

function clearFxn(){
  chrome.storage.sync.clear();
}
//test code, look into this tomorrow
// basically,, want to create more li bullets for more notes
// so i have to log notes into different data items and do a for loop to put in all the items
//then i can either add a button to clear items or something else
