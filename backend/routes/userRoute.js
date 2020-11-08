import express from "express"

const router = express.Router();

router.post("/signin", async (req, res) => {
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    });
    if (signinUser) {
        res.send({
            id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
        })
    } else {
        res.status(401).send({msg: "Invalid email or password"})
    }

})

router.get("/api/users/createadmin", async (req, res) => {
    try {
        const user = new User ({
            name: "Alejo",
            email: "alejog@gmail.com",
            password: "1234",
            isAdmin:true 
        });
        const newUser = await user.save();
        res.send(user);
    } catch (error) {
        res.send({ msg: error.message })
    }
  
})


export default router
