export function phoneConverter(number: string): string {
  number = number.toString().replace(/[^\d]/g, "");
  let ddi = '55';
  let ddd = parseInt(number.substring(0, 2)); // Converter para número inteiro

  if (number.length == 13) {
      let ddi = number.substring(0, 2);
      let ddd = parseInt(number.substring(2, 4)); // Converter para número inteiro
      return ddi + ddd + (ddd <= 28 ? number.substring(4, 13) : number.substring(5, 13));

  } else if (number.length == 11) {
      return ddi + ddd + (ddd <= 28 ? number.substring(2, 11) : number.substring(3, 11));

  } else if (number.length == 10) {
      return ddi + ddd + (ddd <= 28 ? '9' : '') + number.substring(2, 11);

  } else if (number.length == 12) {
      return number.substring(0, 2) == '55' ? number : (number.substring(0, 1) == '0' ? phoneConverter(number.substring(1, 12)) : number);

  } else {
      return number;
  }
}
