let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Identity'

//bcrypt uses hashing and salt to obfiscate your password 
let bcrypt = require('bcryptjs')
const SALT = 10


let schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  hash: { type: String, required: true },
  flagged: { type: String, enum: ["Distributor", "Hospital", "Doctor"], required: true },
}, { timestamps: true })


//THESE TWO METHODS CAN BE COPIED FOR ALL USER SCHEMA'S

//statics are used to create Model methods
schema.statics.generateHash = function (password) {
  return bcrypt.hashSync(password, SALT)
}

//schema.methods are used to add a method to a Model instance
schema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.hash)
}

module.exports = mongoose.model('Identity', schema)