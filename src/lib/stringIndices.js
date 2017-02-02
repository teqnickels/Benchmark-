
let stringIndices = (userString, userNumber) => {
    let newArr = []
    let separate = ""
    let emptyString = " "

    if(userNumber > newArr || userNumber < 0){
      return emptyString
    }else{
      if(userString.indexOf(" ") !== -1){
        let separate = userString.split(' ')
        let newArr = Array.from(separate)
        newArr.unshift(" ")
        return newArr[userNumber]
      }

    }

}
