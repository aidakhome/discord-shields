import axios from 'axios'
import { Router } from 'express'

const router = Router()

router.get('/:id', async (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    
    axios.get(`https://api.lanyard.rest/v1/users/${req.params.id}`)
        .then((response) => {
            let data = response.data.data
            let activity = data.activities.find(x => x.name === 'Visual Studio Code')

            if (typeof activity === 'undefined') {
                return res.json({
                    schemaVersion: 1,
                    label: 'coding',
                    message: 'nothing rn',
                    color: '#0078D7'
                })
            }
        
            return res.json({
                schemaVersion: 1,
                label: 'playing',
                message: `${activity.details} in ${activity.state}`,
                color: '#0078D7'
            })
        })
        .catch(() => {
            return res.json({
                schemaVersion: 1,
                label: 'error',
                message: 'user not found',
                color: 'red'
            })
        })
})

export default router