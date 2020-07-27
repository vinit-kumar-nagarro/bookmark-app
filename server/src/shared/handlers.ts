import { Response } from "express"

export const successHandler = (res: Response, data?: any, message?: string) => {
    res.status(200).json({
        message: message || 'Successful',
        data: data || {}
    })
}

export const errorHandler = (res: Response, message?: string) => {
    res.status(400).json({
        message: message || 'Something went wrong.',
        data: null
    })
}