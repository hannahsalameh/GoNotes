let keyName = "default"
function loadData(){
  chrome.storage.sync.get(null, function(result){
    console.log(result);
    let input1 = document.getElementById("note1");
    let input2 = document.getElementById("note2");
    input1.innerHTML = result.value;
    input2.innerHTML = result.value1;
  });
}
loadData();

//test code, look into this tomorrow
// basically,, want to create more li bullets for more notes
// so i have to log notes into different data items and do a for loop to put in all the items
//then i can either add a button to clear items or something else
