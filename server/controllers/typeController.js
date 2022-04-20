const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')


class TypeController {
    async create(req,res) {
        try {
            const {name} = req.body
            const type = await Type.create({name})
            return res.json(type)
        }catch(e) {
            return res.status(500).json({
                message:e.message
            })
        }
    }
    
    async getAll(req,res) {
        try {
            const types = await Type.findAll()
            return res.json(types)
        } catch(e) {
            res.status(500).json({
                message:e.message
            })
        }
    }

}

module.exports = new TypeController()