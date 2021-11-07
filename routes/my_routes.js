const express = require('express')
const router = express.Router()
const Users = require('../models/dashboard')


router.get('/', async(req,res) => {
    try{
           const users = await Users.find()
           res.json(users)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const user = await Users.findById(req.params.id)
           res.json(user)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const user = new Users({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 =  await user.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const user = await Users.findById(req.params.id) 
        user.sub = req.body.sub
        user.name= req.body.name
        user.tech= req.body.tech
        const a1 = await user.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router