let subNote = document.getElementById('submitButton');
let errorText = document.getElementById("insertText");
subNote.addEventListener("click", saveNotes);
function saveNotes() {
  let text = document.getElementsByClassName("smallNote");
  let i;
  for (i = 0; i < text.length; i++){
    if (!text[i].value){
      errorText.innerHTML = "Error: Forgot to input text";
      return;
    }
  };
  let x;
  for (x = 0; x < text.length; x++){
    chrome.storage.sync.set({keyName:"default"});
    chrome.storage.sync.set({value:text[x].value});
    errorText.innerHTML = "Notes saved!";
  }
}
