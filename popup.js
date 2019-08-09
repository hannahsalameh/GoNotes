let subNote = document.getElementById('submitButton');
let errorText = document.getElementById("insertText");

//first checks if there is a title and body of each note

subNote.addEventListener("click", checkNotes);
function checkNotes() {
  let text = document.getElementsByClassName("smallNote");
  let i;
  for (i = 0; i < text.length; i++){
    if (!text[i].value){
      errorText.innerHTML = "Error: Forgot to input text";
      return;
    }
  };
  let text1 = text[0].value;
  let text2 = text[1].value;
  saveNote(text1, text2);
};

//save the new note to be able to retrieve later

function saveNote(title,body){
  chrome.storage.sync.clear();
  chrome.storage.sync.set({ [title] : body });
  errorText.innerHTML = "Notes saved!";
  chrome.storage.sync.get(null,function(result){
    console.log(result);
  });
};
