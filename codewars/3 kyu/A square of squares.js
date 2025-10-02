let isSquare = function(n){
  if(n>-1){
    if(JSON.stringify(Math.sqrt(n)).includes('.')){
      return false
    }
    else{
      return true
    }
  }
  else{
    return false
  }
}

// let isSquare = n => Math.sqrt(n) % 1 === 0;