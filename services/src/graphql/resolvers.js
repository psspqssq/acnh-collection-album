import * as Query from "./builtInTypes/Query";

const resolvers = {
  Query,
  Houseware: {
    id: (housewareObj) => housewareObj._id,
  },
};

export default resolvers;
