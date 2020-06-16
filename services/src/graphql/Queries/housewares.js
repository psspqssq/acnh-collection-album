import Houseware from "#root/db/models/Houseware";

// Should add language support later
// Currently only resolving english queries

const housewaresResolver = (context, args) => {
  let nameSearch = {};
  if (args.languages) {
    args.languages.map((lang) => {});
  } else {
    if (args.searchByName) {
      return Houseware.find({
        name: new RegExp(args.searchByName, "i"),
      });
    } else {
      return Houseware.find({});
    }
  }
};

export default housewaresResolver;
