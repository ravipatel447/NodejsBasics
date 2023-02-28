const fs = require("fs");
const chalk = require("chalk");
const getNote = (title) => {
  const notes = loadNotes();
  let ind = notes.find((obj) => obj.title === title);
  if (ind) {
    console.log(
      chalk.green.inverse("title is ", ind.title, " body is ", ind.body)
    );
  } else {
    console.log(chalk.red.inverse("we are not able to find note"));
  }
};
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateTitle = notes.filter((obj) => obj.title === title);
  if (duplicateTitle.length === 0) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(
      chalk.green.inverse("noted down title:", title, " body:", body)
    );
  } else {
    console.log(chalk.red.inverse("title already taken"));
  }
};
const removeNote = (title) => {
  const notes = loadNotes();
  const removedNotes = notes.filter((obj) => obj.title !== title);
  if (removedNotes.length === notes.length) {
    console.log(chalk.red.inverse("note doesn't exist"));
  } else {
    saveNotes(removedNotes);
    console.log(chalk.green.inverse("note has been removed"));
  }
};
const loadNotes = () => {
  try {
    const file = fs.readFileSync("notes.json");
    return JSON.parse(file.toString());
  } catch (e) {
    return [];
  }
};
const saveNotes = (notes = []) => {
  try {
    fs.writeFileSync("notes.json", JSON.stringify(notes));
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  loadNotes,
  getNote,
  saveNotes,
  addNote,
  removeNote,
};
