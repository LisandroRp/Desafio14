import express from 'express'
import RandomWebController from '../../controllers/web/RandomWebController.js'

const randomWebRouter = express.Router();

randomWebRouter.get("/", RandomWebController.getInfo)

export {randomWebRouter};