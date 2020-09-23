var fs = require('fs')

/* create directory first, then proceed next */

fs.mkdir('stuff', function() {
  fs.readFile('readMe.txt','utf8', function(err, data) {
    fs.writeFile('./stuff/writeMe.txt',data,(err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    })
  })
})

/* delete writeMe.txt file first and delete directory */

fs.unlink('./stuff/writeMe.txt', function() {
  fs.rmdir('stuff',(err) => {
    if (err) throw err;
    console.log('Removed directory');
  })
})