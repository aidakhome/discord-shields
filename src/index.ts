import express from 'express'

import status from './routes/status'
import coding from './routes/coding'
import spotify from './routes/spotify'
import playing from './routes/playing'

const app = express()

app.use('/status', status)
app.use('/coding', coding)
app.use('/spotify', spotify)
app.use('/playing', playing)

app.listen(3560)