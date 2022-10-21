const fs = require('fs')

const write = function(data = "Thank you"){
    fs.writeFileSync('note.txt', data);

}

module.exports = write