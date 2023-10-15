import {logger} from '../config/logger.js';
export const errorMiddleware = (err, req, res, next) => {
    if (!err) {
        next()
        return
    } else {
        logger.error(err.message)
        res.status(500).json({
            message: err.message
        })
    }
}