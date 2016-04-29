var buf = new Buffer(process.argv.slice(2));

console.log(buf.toString('hex'));