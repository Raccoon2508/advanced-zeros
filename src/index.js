module.exports = function getZerosCount(number, base) {
  
  
  
  
  var primeNumbers=new Array(2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173,179, 181, 191, 193, 197, 199, 193, 197, 199,	211,	223,	227,229,233,239,241,251);
  var degrees=[];
  var primeFactors=[];
  var indexOfPrimeFactors=0;
  
  
  for(var i = 0; i<=primeNumbers.length; i++)
  {
    var degree=0
    while((base/primeNumbers[i]^0)===(base/primeNumbers[i]))
    {
      base=base/primeNumbers[i];
      degree++;
    }
    if(degree>0)
    {  
      primeFactors[indexOfPrimeFactors]=primeNumbers[i];
      degrees[indexOfPrimeFactors]=degree;
      indexOfPrimeFactors++;
    }
  }
  
  var preTotal;
  var arrOfSumms=[];
  var totalSum=0;
  
  
  for(i=0; i<degrees.length; i++){
  preTotal=0;
  for(j=1; number/Math.pow(primeFactors[i], j)>=1 ; j++){
    preTotal=preTotal+Math.floor(number/Math.pow(primeFactors[i], j));
  }
  totalSum=Math.floor(preTotal/degrees[i])
  arrOfSumms[i]=totalSum;
  }
  
  var total=Math.min.apply(null, arrOfSumms)
  return total;  // your implementation
}