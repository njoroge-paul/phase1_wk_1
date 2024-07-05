//student grade generator
function studentGradeGenerator(score)  {
  if (score > 79) {
    return 'A';
  } else if (score >= 60 && score <= 79) {
    return 'B';
  } else if (score >= 49 && score <= 59) {
    return 'C';
  } else if (score >= 40 && score <= 49) {
    return 'D';
  } else {
    return 'F';
  }
  
 
 
};
console.log(studentGradeGenerator(40)); 


