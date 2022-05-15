console.log("hello world!");
showNotes();

let addBtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
  let addtxt = document.getElementById("addtxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addtxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addtxt.value = "";
  console.log(notesObj);
  showNotes();
});
//function to show elements from local storage..
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div class="rounded-lg shadow-lg border flex bg-transparent  m-2">
        <div class="p-6">
          <h5 class="text-white text-xl font-medium mb-1">Note ${index + 1}</h5>
          <p class="text-gray-700 text-base mb-4">${element}
          </p>
          <button id="${index}" onclick="deleteNote(this.id)"  class="m-1  items-center bg-white border-white rounded p-1 hover:bg-amber-300 hover:text-white" type="submit">Delete</button>
        </div>
      </div>`;
  });
  let noteElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    noteElm.innerHTML = html;
  } else {
    noteElm.innerHTML = `Nothing to show! Use "Add Note" section to add the notes.`;
  }
}
//function to delete a note
function deleteNote(index) {
    //   console.log("I am deleting", index);
    
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
    
      notesObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      showNotes();
    }
    let search = document.getElementById('searchTxt');
    search.addEventListener("input", function(){
    
        let inputVal = search.value.toLowerCase();
        // console.log('Input event fired!', inputVal);
        let noteCards = document.getElementsByClassName('noteCard');
        Array.from(noteCards).forEach(function(element){
            let cardTxt = element.getElementsByTagName("p")[0].innerText;
            if(cardTxt.includes(inputVal)){
                element.style.display = "block";
            }
            else{
                element.style.display = "none";
            }
            // console.log(cardTxt);
        })
    })