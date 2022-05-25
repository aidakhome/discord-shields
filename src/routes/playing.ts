import axios from 'axios'
import { Router } from 'express'

const router = Router()

router.get('/:id', async (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    axios.get(`https://api.lanyard.rest/v1/users/${req.params.id}`)
        .then((response) => {
            let data = response.data.data
            let activity = data.activities.find(
                x => x.type === 0 && x.name !== 'Visual Studio Code'
            )

            if (typeof activity === 'undefined') {
                return res.json({
                    schemaVersion: 1,
                    label: 'playing',
                    message: 'nothing rn',
                    color: '#5865F2'
                })
            }
        
            return res.json({
                schemaVersion: 1,
                label: 'playing',
                message: `${activity.name}`,
                color: '#5865F2'
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