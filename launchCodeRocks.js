function launchOutput(num){
  //your code here
  let output='';
  if (num%2 === 0){
      output += 'Launch';
    }
  
    if (num%3 === 0){
      output += 'Code';
    }
  
    if (num%5 === 0){
      if (output) {
        output += ' Rocks';
      }else{
        output += 'Rocks';
        }
    }
  
    if (!output){
      return "Rutabagas! That doesn't work.";
    } else if (output==='Launch Rocks') {
      return output + '! (CRASH!!!!)';
    } else {
      return output + '!';
    }

}



module.exports = launchOutput;