const bcrypt = require("bcryptjs")

const hashPassword = async (password) => {

    const hashedPassword = await bcrypt.hash(password, 8)

    console.log("Le mot de passe de base est : " + password)
    console.log("Le mot de passe crypté est : " + hashedPassword)
    const isMatch = await bcrypt.compare("UnD", hashedPassword)
    return isMatch

}

hashPassword("UnDolibarr").then((result) => {
    console.log('Le résultat de la comparaison est : ' + result)
}).catch((e) => {
    console.log(e)
})
