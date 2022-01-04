module.exports = function toReadable (number) {
    let ones = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen']
    let ones1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let ones2 = ['', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen']
    let tens = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety']
    let tens1 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let zero = ['zero']
    let hundred = ' hundred'
    let ten = ' ten'
    let output = '';
    let numberString = number.toString();
  
    if (number === 0) {
      output = zero[number];
      return output;
    }
    if (number < 20) {
      output = ones[number];
      return output.slice(1);
    }
    if (number % 100 === 10) {
      output = ones1[parseInt(numberString.charAt(0))] + hundred + ten;
      return output;
    } 
    if (number % 100 > 10 && number % 100 < 20) {
      output = ones1[parseInt(numberString.charAt(0))] + hundred;
      output += ones2[parseInt(numberString.charAt(2))];
      return output;
    } 
    if (numberString.length === 3) {
      output = ones1[parseInt(numberString.charAt(0))] + hundred;
      output += tens[parseInt(numberString.charAt(1))];
      output += ones[parseInt(numberString.charAt(2))];
      return output;
    } 
    output += tens1[parseInt(numberString.charAt(0))];
    output += ones[parseInt(numberString.charAt(1))];
    return output;
}
