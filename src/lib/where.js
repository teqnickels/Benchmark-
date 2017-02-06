const findThePath = (obj) =>{
  const data = JSON.stringify(obj)
  const json = JSON.parse(data)
  let jsonStr = Object.getOwnPropertyNames(json)
  let index = Object.values(json)
  let value = Object.values(jsonStr)


  jsonStr.forEach(function(jsonStr, index, value){

    if( value.hasOwnProperty(value) ){

      let nestedObj = Object.getOwnPropertyNames(value)
      console.log(jsonStr + ' -> ' + index + ' -> ' + obj[jsonStr] + 'nestedObj')

    }else{
      console.log(jsonStr + ' -> ' + index + ' -> ' + obj[jsonStr])
    }
  })
}
