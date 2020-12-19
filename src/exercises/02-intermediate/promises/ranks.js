// Do not export this object.
// Must use getRankText to find the rank
const RANKS = {
  "1st": "First",
  "2nd": "Second",
  "3rd": "Third"
};

export const getRankText = (rank) => {
  return Promise(RANKS[rank]);
}