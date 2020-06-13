import Houseware from "#root/db/models/Houseware";

const housewaresResolver = () => {
  return Houseware.find({});
};

export default housewaresResolver;
