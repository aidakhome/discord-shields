import axios from 'axios'
import { Router } from 'express'

const router = Router()

router.get('/:id', async (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    axios.get(`https://api.lanyard.rest/v1/users/${req.params.id}`)
        .then((response) => {
            let data = response.data.data
            let status = data.discord_status
            let offlineClause = status === 'offline'
            
            return res.json({
                schemaVersion: 1,
                label: 'status',
                message: offlineClause ? status : 'online',
                color: offlineClause ? 'gray' : 'green'
            })
        })
        .catch(() => {
            return res.send({
                schemaVersion: 1,
                label: 'error',
                message: 'user not found',
                color: 'red'
            })
        })
})

export default router