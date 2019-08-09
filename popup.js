let subNote = document.getElementById('submitButton');
let errorText = document.getElementById("insertText");
subNote.addEventListener("click", saveNotes);
function saveNotes() {
  let text1 = document.getElementById("note1").value;
  let text2 = document.getElementById("note2").value;
  if (!text1){
    errorText.innerHTML = "Error: No text in 1st note";
    return;
  }
  else if (!text2){
    errorText.innerHTML = "Error: No text in 2nd note";
    return;
  }
  else {
    console.log(text1);
    chrome.storage.sync.set({'value1':text1}, function() {
      console.log(text1);
    });
    chrome.storage.sync.set({'value2':text2}, function() {
      errorText.innerHTML = "Both notes saved!";
      console.log(text2);
    });
  }
}
