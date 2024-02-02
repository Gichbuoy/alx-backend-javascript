const getPaymentTokenFromAPI = (success) => {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  } else {
    return Promise.resolve(); // Resolving with undefined for failure case
  }
};

module.exports = getPaymentTokenFromAPI;
