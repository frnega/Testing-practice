function stringLength(string) {

  let count = 0;

  for(let char of string) {
      count++;
      // return count;
  }

  if(count === 1 )
  {return true;}
  else if( count <= 10)
  {return true;}
  else 
  {return false;}
  

}

module.exports = stringLength;


console.log(stringLength("freeeeeeeee"));