import Trie from "../index";

const WORDS = ["applce", "banana", "beans"];
const EXPECTED_NODES = {
  a: {
    p: {
      p: {
        l: {
          e: {
          }
        }
      }
    }
  },
  b: {
    a: {
      n: {
        a: {
          n: {
            a: {
            }
          }
        }
      }
    },
    e: {
      a: {
        n: {
          s: {
          }
        }
      }
    }
  }
};


describe("Trie", () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  describe("initializing", () => {

    it("should have the nodes variable", () => {
      expect(trie.nodes).toEqual({});
    });

  });

  describe("addWords function", () => {

    it("should add letters to appropriate nodes", () => {
      trie.addWords(WORDS);
      expect(trie.nodes).toEqual(EXPECTED_NODES);
    });

  });

  describe("findWords function", () => {

    it("should return matching words", () => {
      trie.addWords(WORDS);

      expect(trie.findWords("a")).toEqual(["apple"]);

      expect(trie.findWords("b")).toEqual(["banana", "beans"]);

      expect(trie.findWords("ba")).toEqual(["banana"]);

      expect(trie.findWords("be")).toEqual(["beans"]);
    });

  });

});