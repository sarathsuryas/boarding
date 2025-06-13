// insert
// search 
// delete 
// startswith
// most common prefix
// auto complete

class TrieNode {
    constructor() {
      this.children = {}
      this.isEndOfWord = false
    }
  }
  
  class Trie {
    constructor() {
     this.root = new TrieNode()
    }
    insert(word) {
      let node = this.root
      for (const char of word) {
         if(!node.children[char]) {
          node.children[char] = new TrieNode()
         }
         node = node.children[char]
      }
      node.isEndOfWord = true
    }
    search(word) {
      let node = this.root
      for (const char of word) {
        if(!node.children[char]) return false
        node = node.children[char]
      }
      return node.isEndOfWord
    }
    delete(word) {
     this.deleteHelper(this.root,word)
    }
    deleteHelper(currentNode,word,depth=0){
      if(depth === word.length) {
        if(!currentNode.isEndOfWord) return false
        currentNode.isEndOfWord = false
        return Object.keys(currentNode).length === 0
      }
      const char = word[depth]
      const childNode = currentNode.children[char]
     const shouldDelete = this.deleteHelper(childNode,word,depth+1)
     if(shouldDelete) {
       delete currentNode.children[char]
     }
    }
    startsWith(word) {
      let node = this.root
      for (const char of word) {
         if(!node.children[char]) return false
        node = node.children[char]
      }
      return true
    }
    longestCommonPrfix() {
      let prefix = ''
      let currentNode = this.root
      while (currentNode) {
         const keys = Object.keys(currentNode.children)
         console.log(keys)
         if(keys.length > 1 || currentNode.isEndOfWord) break
         const char = keys[0]
         prefix+= char
         currentNode = currentNode.children[char]
      }
     return prefix
    }
   findNode(prefix){
     let node = this.root
     for (const char of prefix) {
       if(!node.children[char]) return false
       node = node.children[char]
     }
     return node
   }
   collectWords(node,prefix,words) {
    if(node.isEndOfWord) words.push(prefix)
     for (const key in node.children) {
         this.collectWords(node.children[key],prefix + key,words)
     }
   }
  
    autoComplete(prefix) {
      const words = []
      const prefixNode = this.findNode(prefix)
      if(prefixNode) {
      this.collectWords(prefixNode,prefix,words)
      }
      return words
    }
  
  }
  
  const trie = new Trie();
    
    // Insert words
    trie.insert("hello");
    trie.insert("hellon");
    trie.insert("heaven");
    trie.insert("heavy");
    trie.delete("hello")
    console.log(trie.search("hellon"))