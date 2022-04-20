const uuid = require('uuid')
const ApiError = require('../error/ApiError')
const {Device} = require('../models/models')
const path = require('path')


class DeviceController {

    async create(req,res) {
        try {
            const {name,price,brandId,typeId,info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname,'..','static',fileName))

            const device = await Device.create({
                name,price,brandId,typeId,img:fileName
            })

            return res.json(device)
        }catch(e) {
            return res.status(500).json({
                message:e.message
            })
        }
    }
    
    async getAll(req,res) {
        try {
            let {brandId,typeId,limit,page} = req.query

            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            let devices;
    
            if(!brandId && !typeId) {
                devices = await Device.findAndCountAll({limit,offset})
            }

            if(brandId && !typeId) {
                devices = await Device.findAndCountAll({
                    where: {
                        brandId
                    },limit,offset
                })
            }

            if(!brandId && typeId) {
                devices = await Device.findAndCountAll({
                    where: {
                        typeId
                    },limit,offset
                })
            }

            if(brandId && typeId) {
                devices = await Device.findAndCountAll({
                    where: {
                        brandId,typeId
                    },limit,offset
                })
            }

            return res.json(devices)
            
        }catch(e) {
            return res.status(500).json({
                message:e.message
            })
        }
    }

    async getOne(req,res) {
        const {id} = req.query
        res.json(req.query)
    }
}

module.exports = new DeviceController()