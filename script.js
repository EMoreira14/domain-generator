window.onload = function() {
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];
  for (let i=0  i< pronoun.length; i++){
      
      for(let m=0  m< adj.length; m++){
        
        for(let k=0  k< noun.length; k++){
            
            this.console.log(`${pronoun[i]}${adj[m]}${noun[k]}.com`)
          }
      }
      
  }
};