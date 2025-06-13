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
  
    // Search for a word in the Trie
    search(word) {
      let currentNode = this.root;
      for (const char of word) {
        if (!currentNode.children[char]) {
          return false; // Word not found
        }
        currentNode = currentNode.children[char];
      }
      return currentNode.isEndOfWord; // Check if it's a valid word
    }
  
   delete(word) {
    this.deleteHelper(this.root,word)
   } 
  deleteHelper(node,word,depth = 0){
   if(depth === word.length) {
     if(!node.isEndOfWord) return false
     node.isEndOfWord = false
     return Object.keys(node).length === 0
   }
   const char = word[depth]
   const child = node.children[char]
  const shouldDelete =  this.deleteHelper(child,word,depth+1)
  if(shouldDelete) {
   delete node.children[char] 
  }
  }
  startsWith(prefix) {
    let node = this.root
    for (const element of prefix) {
     if(!node.children[element]) return false 
     node = node.children[element]
    }
    return true
  }
  
  findLongestCommonPrefix() {
    let prefix = ''
    let node = this.root
    
    while (node) {
      const keys = Object.keys(node.children)
      if(keys.length > 1 || node.isEndOfWord) break
       const str = keys[0]
       prefix+=str 
       node = node.children[str]
    }
    return prefix
  }
  
  }
  
  // Example Usage
  const trie = new Trie();
  
  // Insert words
  trie.insert("hello");
  trie.insert("hellon");
  trie.insert("hell")
  // trie.insert("help");
  // trie.insert("helium");
  
  // console.log(trie.search("hello")); // true
  // console.log(trie.search("hell"));  // true
  // console.log(trie.search("help"));  // true
  
  // Delete words
  // trie.delete("help");
  // console.log(trie.search("help"));  // false
  // console.log(trie.search("helium")); // true (unchanged)
  
  // trie.delete("hell");
  console.log(trie.startsWith("hell")); // false
  // console.log(trie.search("hell"));  // true (unchanged)
  console.log(trie.findLongestCommonPrefix())