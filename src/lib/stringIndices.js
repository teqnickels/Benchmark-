
let stringIndices = (userString, userNumber) => {
    let newArr = []
    let separate = ""

    if(userNumber > newArr || userNumber < 0){
      return " "
    }else if(userString.indexOf(" ") !== -1){
        let finalArr = Array.from(newArr)
        newArr.unshift(" ")
        return newArr[userNumber]
    }

}
