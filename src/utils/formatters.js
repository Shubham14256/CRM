export const formatPhoneNumber = (phoneNumber) =>{
    // trim from front and ending 
    const input = '9999999999';
    input.trim();

    // const text = 'hello 123 wordl';
    // console.log(text.trim(/\d/g, 'X'));

    const prefix = '+91';
    // const phone = '9999999999';
    // console.log(prefix +input);
    return prefix + input;

};


export const formatDate = (dateString) => {
  // ... तुम्हारा code

  const date = new Date(dateString);// Create a Date object from the input string
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month : 'short',
    year : 'numeric',
    hour: '2-digit',
    minute : '2-digit'

  });
};


export const formatCurrency = (amount) => {
    // ... तुम्हारा code
    amount.toLocaleString('en-In');
    const prefix ='Rs ';
    return prefix + amount
}