  let stringIndices = (userString, userNumber) => {
    let newArr = []
    let separate = ""

    if( userString.indexOf(" ") == -1 ){
      let newArr = Array.from(userString)
      newArr.unshift(" ")
      return newArr[userNumber]
    }
    if(userString.indexOf(" ") !== -1){
      let separate = userString.split(' ')
      let newArr = Array.from(separate)
      newArr.unshift(" ")
      return newArr[userNumber]
    }
}
