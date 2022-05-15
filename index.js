const File = require('./lib/files/File')
const MT = require('./lib/MT')
const CSV = require('./lib/files/CSV')

module.exports = MT
module.exports.files = function(){
    throw new Error("Please use files.file, files.csv")
}
module.exports.files.file = function(options){ return new File(options) }
module.exports.files.csv = function(options){ return new CSV(options) }