module.exports = function toReadable (number) {
	const firstNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  	let result = ' ';
	//const number = 935;
  

	if (number < 20 ){
		result = firstNumber [number];
		}
		else if ((number >= 20) && (number < 100)){
			  if (number % 10 == 0) {
				 result = dozens[number/10-2];
			  }
				 else { result = dozens[(number - number % 10) / 10 - 2] + ' ' + firstNumber[number % 10];
			  }
		}
		else if ((number >= 100) && (number < 1000)){
			  if (number % 100 == 0) {
				 result = firstNumber[number/100] + ' hundred';
			  } 
				 else if (number % 100 % 10 == 0) {
					if (number % 100 == 10) {
					  result = firstNumber[(number - number % 100) / 100] + ' hundred ' + firstNumber[10];
					} else
				 result = firstNumber[(number - number % 100) / 100] + ' hundred ' + dozens[number % 100 / 10 - 2 ];
			  }
				 else if (number % 100 < 20 ) { 
				 result = firstNumber[(number - number % 100) / 100] + ' hundred ' + firstNumber[number % 100];
			  } else { 
				 result = firstNumber[(number - number % 100) / 100] + ' hundred ' + dozens[(number % 100 - number % 10) / 10 - 2] + ' ' + firstNumber[number % 10];
			  }
		}
	 return result;
	 //console.log(result);
}