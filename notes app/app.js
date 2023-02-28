const { loadNotes, addNote, getNote, removeNote } = require("./notes");
const yargs = require("yargs");
yargs.command({
  command: "add",
  describe: "adding a new Note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Description",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    addNote(argv.title, argv.body);
  },
});
yargs.command({
  command: "remove",
  describe: "removing a new Note",
  builder: {
    title: {
      describe: "remove a note",
      demandOption: true,
      type: "String",
    },
  },
  handler: function (argv) {
    removeNote(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "list down all Notes",
  handler: function () {
    console.log("list down all Notes");
  },
});
yargs.command({
  command: "read",
  describe: "reading a Note",
  builder: {
    title: {
      describe: "reading a note",
      demandOption: true,
      type: "String",
    },
  },
  handler: function (argv) {
    getNote(argv.title);
  },
});
yargs.parse();
