// Do not export this array.
// Must use getUser to find the rank
const USERS = [
  {
    name: "john",
    rank: "2nd",
  }, {
    name: "jane",
    rank: "1st"
  }
];

export const getUser = (name) => {
  return Promise.resolve(USERS.find(row => row.name === name));
};
