function saveNotes(){
  let text1 = document.getElementById('note1');
  chrome.storage.sync.set({"note": text1.value}, function(){
    message("note 1 was saved");
  })
}
