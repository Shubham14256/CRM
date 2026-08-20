import { formatPhoneNumber, formatDate, formatCurrency } from '../utils/formatters.js';


console.log('=== Testing Formatters ===');

const phoneNumber = formatPhoneNumber('1234567890');
console.log(`Formatted Phone Number: ${phoneNumber}`);


const date = formatDate("2024-02-15T10:30:00Z");
console.log('Formatted Date:', date);

// Test 3
const currency = formatCurrency(5000);
console.log('Formatted Currency:', currency);


