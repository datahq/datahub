const cat = require('./lib/cat')
const {get} = require('./lib/get')
const info = require('./lib/info')
const {Init} = require('./lib/init')
const {login} = require('./lib/login')
const {authenticate} = require('./lib/login')
const {Validator} = require('./lib/validate')

const config = require('./lib/utils/config')
const {DataHub} = require('./lib/utils/datahub')


// Module API

module.exports = {
  cat,
  get,
  info,
  Init,
  login,
  authenticate,
  Validator,
  config,
  DataHub
}
