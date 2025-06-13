class TrieNode {
    constructor() {
      this.children = {}; // Stores child nodes
      this.isEndOfWord = false; // Indicates end of a valid word
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    // Insert a word into the Trie
    insert(word) {
      let currentNode = this.root;
      for (const char of word) {
        if (!currentNode.children[char]) {
          currentNode.children[char] = new TrieNode();
        }
        currentNode = currentNode.children[char];
      }
      currentNode.isEndOfWord = true;
    }
  
    // Helper function to find the node corresponding to the prefix
    findNode(prefix) {
      let node = this.root
      for (const char of prefix) {
        if(!node.children[char]) return false
        node = node.children[char]
      }
      return node
    }
  
    // Helper function to perform DFS and collect words
    collectWords(node, prefix, words) {
     if(node.isEndOfWord) words.push(prefix)
      for (const key in node.children) {
       this.collectWords(node.children[key],prefix + key,words)
      }
    }
  
    // Autocomplete function
    autocomplete(prefix) {
     const words = []
     const prefixNode = this.findNode(prefix)
     if(prefixNode) {
      this.collectWords(prefixNode,prefix,words)
     }
     return words
    }
    
  }
  
  // Example Usage
  const trie = new Trie();
  
  // Insert words
  trie.insert("hello");
  trie.insert("hell");
  trie.insert("heaven");
  trie.insert("heavy");
  
  // Autocomplete for prefix "he"
  console.log(trie.autocomplete("he")); // Output: ["hello", "hell", "heaven", "heavy"]
  
  // // Autocomplete for prefix "hell"
  // console.log(trie.autocomplete("hell")); // Output: ["hello", "hell"]
  
  // // Autocomplete for prefix "hea"
  // console.log(trie.autocomplete("hea")); // Output: ["heaven", "heavy"]
  
  // // Autocomplete for prefix "xyz"
  // console.log(trie.autocomplete("xyz")); // Output: []
  