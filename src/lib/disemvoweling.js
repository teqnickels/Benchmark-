let disemvowel = (str) =>{

  var lowerStr = str.toLowerCase()
  var escapePunct = lowerStr.replace(/[aeiou.,\/#!$%\^&\*;:{}=\-_`~() +?]/g,"")

  return escapePunct
}
