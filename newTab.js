loadData();

//gets value and key pairs from database

function loadData(){
  let retrieveItems = chrome.storage.sync.get(null, function(results){
    let noteKey = Object.keys(results);
    for (let item of noteKey){
      let noteVal = results[item];
      displayData(item, noteVal);
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

//clear button functionality

let clearButton = document.getElementById('clear');
clearButton.addEventListener("click", clearFxn);

function clearFxn(){
  chrome.storage.sync.clear();
  document.location.reload(true);
}
