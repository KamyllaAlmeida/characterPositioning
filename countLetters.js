function countLetters(word) {
  word = word.split(" ").join("");
  var count = {};
  for(var i = 0; i < word.length; i++){
    if(word[i] in count){

      var array = count[word[i]];

      array.push(i);
    }else{
      count[word[i]]= [i];
    }
  }
  return count;
}



console.log(countLetters("abcabcabc"));