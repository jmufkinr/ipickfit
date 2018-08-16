const ipickfit = (state = [  
  {
    _id: 1,
    name: "Joseph Reckley"
  },
  {
    _id: 2,
    name: "Danielle DuRivage"
  },
  {
    _id: 3,
    name: "Judith Reckley"
  },
  {
    _id: 4,
    name: "Patrice Reckley"
  },
  {
    _id: 5,
    name: "Derek Reckley"
  }
], action) => {
  switch (action.type) {
    case "ADD_IPICKFIT"://action must be distinct
      return [...state, action.ipickfit];
    default:
      return state;
  }
};

export default ipickfit;
