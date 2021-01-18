const nJwt = require("njwt");

//ensures that user has been authenticated by google
const auth = async (req, res, next) => {
  const jwtToken=req.cookies.app_auth_token;

  nJwt.verify(jwtToken,process.env.JWT_SECRET,function(err,verifiedJwt){
    if(err){
      console.log(err); // Token has expired, has been tampered with, etc
      res.status(401).send('')
    }else{
      next()
    }
  });

  
};

module.exports = auth;
