const express = require('express')
const router = express.Router()
const Dashboard = require('../models/dashboard')


router.get('/', async(req,res) => {
    try{
           const users = await Dashboard.find()
           res.json(users)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const user = await Dashboard.findById(req.params.id)
           res.json(user)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const user = new Dashboard({
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
        const user = await Dashboard.findById(req.params.id) 
        user.sub = req.body.sub
        const a1 = await Dashboard.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router