let express = require('express')
let path = require('path')
let app = express()

app.use(express.static(__dirname + '/public/'));

app.get('/home', function(request, response){
		response.sendFile(path.join(__dirname, 'adventure.html'))
	}
)
app.get('/home', function(request, response){
    response.sendFile(path.join(__dirname, 'adventure.html'))
}
)
app.get('/onesurvivor', function(request, response){
	response.sendFile(path.join(__dirname, 'onesurvivor.html'))
})
app.get('/twosurvivors', function(request, response){
		response.sendFile(path.join(__dirname, 'twosurvivors.html'))
	}
)
app.get('/protests', function(request, response){
	response.sendFile(path.join(__dirname, 'protests.html'))
})
app.get('/protestf', function(request, response){
		response.sendFile(path.join(__dirname, 'protestf.html'))
	}
)
app.get('/party', function(request, response){
	response.sendFile(path.join(__dirname, 'party.html'))
})
app.get('/confession', function(request, response){
		response.sendFile(path.join(__dirname, 'confession.html'))
	}
)
app.listen(8080)