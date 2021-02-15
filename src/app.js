const express = require("express")
const app = express();
const path = require("path")

require("./db/conn");
const Register = require("./models/registers")

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public")

// app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(express.static(static_path))
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index")

})

//  create new user inover data 
app.post("/", async (req, res) => {
    try {
        const registerEmploy = new Register(req.body)

        // const registerEmploy = new Register({
        //     email: req.body.email,
        //     password: req.body.password
        // })
       const registered =await registerEmploy.save();
       res.status(201).render("index");

    } catch (error) {
        res.status(400).send(error)
    }
})

// app.get("/register",(req,res)=>{
//     res.render("register");

// })

app.listen(port, () => {
    console.log(`okkk ${port}`)
})














