const { Router } = require('express')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const User = require('../models/user')

const router = Router()

router.post('/register', async (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let name = req.body.name

    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password, salt)

    const record = await User.findOne({ email: email })

    if (record) {
        return res.status(400).send({
            message: "Email deja existent",
        })
    } else {
        const user = new User({
            name: name,
            email: email,
            password: hashedPassword,
        });

        const result = await user.save()

        //JWT Token
         const {id} = await result.toJSON()

         const token = jwt.sign({_id:_id}, "secret")

         res.cookie("jwt", token, {
            httpOnly:true,
            maxAge:24*60*60*1000
         })


        res.json({
            message:"Succes"
        })
    }
})



router.post("/login", async (req, res) => {
    res.send("login user")
})

router.get('/user', (req, res) => {
    res.send("user")
})

module.exports = router