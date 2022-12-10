const crypto = require('crypto')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('Hey')
})

app.post('/', (req, res) => {
	// desencriptar secret de github
	const sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunk.toString()).digest('hex')

	const isAuthentic = req.headers['x-hub-signature'] === sig

	if (!isAuthentic) {
		return res.send('Not authorized')
	}

	exec('sh pipe.sh')

	res.send('Got it')
})

app.listen(3002, () => console.log('listening on 3002'))