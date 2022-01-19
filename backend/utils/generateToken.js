import  jwt from "jsonwebtoken";

const generateToken = (id) =>{
    return jwt.sign({ id },process.env.JWT_SECRET,{
        expiresIn: '30d',  //token generate for next 30  days
    });
};

export default generateToken;