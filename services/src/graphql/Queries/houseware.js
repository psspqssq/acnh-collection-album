import Houseware from "#root/db/models/Houseware";

const housewareResolver = (context, args) => {
  return Houseware.findOne({ name: args.name });
};

export default housewareResolver;
