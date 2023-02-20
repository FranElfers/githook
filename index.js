// https://www.digitalocean.com/community/tutorials/how-to-use-node-js-and-github-webhooks-to-keep-remote-projects-in-sync

const crypto = require('crypto')
const express = require('express')
const app = express()
const exec = require('child_process').exec

const secret = ''

app.get('/', (req, res) => {
	res.send('Hey')
})

app.post('/', (req, res) => {
	req.on('data', (chunk) => {
		// desencriptar secret de github
		const sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunk.toString()).digest('hex')
	
		const isAuthentic = req.headers['x-hub-signature'] === sig
	
		if (!isAuthentic) return res.send('Not authorized')
	
		exec('sh pipe.sh')
	
		res.send('Got it')
	})

	res.end()
})

app.post('/test', (req, res) => {

})

app.listen(3002, () => console.log('listening on 3002'))