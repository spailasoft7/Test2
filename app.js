const note = document.getElementById("note");
const status = document.getElementById("status");
const saveBtn = document.getElementById("saveBtn");

// Load saved notes
note.value = localStorage.getItem("note") || "";

// Save button
saveBtn.addEventListener("click", () => {
  localStorage.setItem("note", note.value);
  status.textContent = "Note saved locally!";
});
