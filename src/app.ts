import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Express server running')
})

export default app
