// add the value "codewars" to the websites array 1,000 times
var websites = []

// my
for (var i = 0; i < 1000; i++){
    websites.push('codewars')
}

// best practice:
while (websites.length < 1000) websites.push("codewars")
