// Global objects 

setTimeout ( function() {
    console.log('3 secs passed')
}, 3000)


var time=0
var timer = setInterval( function() {
  time = time +2
  console.log(`${time} secs passed..`)
    
  if (time > 5 ) {
    console.log('clear interval')
    clearInterval(timer)
  }
}, 3000)


console.log('.................')
console.log(__dirname)
console.log(__filename)