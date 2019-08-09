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
