module.exports = {
  payment : {
    checkout : function (config) {
      return 'https://ws.pagseguro.uol.com.br/v3/checkout?email=' + config.email + '&token=' + config.token;
    },
    payment : function (paymentCode) {
      return 'https://pagseguro.uol.com.br/v3/checkout/payment.html?code=' + paymentCode;
    },
    notificationConsult : function (notificationCode, config) {
      return 'https://ws.pagseguro.uol.com.br/v3/transactions/notifications/' + notificationCode + '?email=' + config.email + '&token=' + config.token;
    },
    transactionConsult : function (transactionCode, config) {
      return 'https://ws.pagseguro.uol.com.br/v3/transactions/' + paymentCode + notificationCode + '?email=' + config.email + '&token=' + config.token;
    }
  },
  sandbox : {
    checkout : function (config) {
      return 'https://ws.sandbox.pagseguro.uol.com.br/v3/checkout?email=' + config.email + '&token=' + config.token;
    },
    payment : function (paymentCode) {
      return 'https://sandbox.pagseguro.uol.com.br/v3/checkout/payment.html?code=' + paymentCode;
    },
    notificationConsult : function (notificationCode, config) {
      return 'https://ws.sandbox.pagseguro.uol.com.br/v3/transactions/notifications/' + notificationCode + '?email=' + config.email + '&token=' + config.token;
    },
    transactionConsult : function (transactionCode, config) {
      return 'https://ws.sandbox.pagseguro.uol.com.br/v3/transactions/' + paymentCode + notificationCode + '?email=' + config.email + '&token=' + config.token;
    }
  }
};