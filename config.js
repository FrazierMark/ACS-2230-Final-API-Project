module.exports = {
  port: 3000,
  jwtSecret: '!!SECRET!!',
  jwtExpirationInSeconds: 60 * 60, // 1 hour
  roles: {
    USER: 'user',
    ADMIN: 'admin'
  },
  productPriceUnits: {
    DOLLAR: 'dollar',
    EURO: 'euro',
    INR: 'inr'
  }
}
