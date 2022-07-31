
// You should implement your task here.
module.exports = function towelSort (matrix) {
  let arr=[]
  let i=0
  let array=matrix
  if(!array){
    return []
  }
  for(let i=0;i<array.length; i++){
    i%2? array[i].reverse().reduce((a,b)=>arr.push(b),0):
    array[i].reduce((a,b)=> arr.push(b),0)
  }
  return arr
}

