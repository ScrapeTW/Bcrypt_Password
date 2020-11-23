const bcrypt = require("bcryptjs")

const hashPassword = async (password) => {
    console.log("Le mot de passe de base est : " + password)
    const hashedPassword = await bcrypt.hash(password, 8)
    return hashedPassword
}

hashPassword("UnDolibarr").then((result) => {
    console.log("Le mot de passe crypté est : " + result)
}).catch((e) => {
    console.log(e)
})
