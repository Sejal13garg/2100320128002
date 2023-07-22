const jwt = require("jsonwebtoken");

const JWT_SECRET = "sejal@123garg1237";

const fetchcompany = (req, res, next) => {
  //get the user from the jwt token and add id to req obj;
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "please auth using valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);

    req.company = data.company;
    next();
  } catch (error) {
    res.status(401).send({ error: "please auth using valid token" });
  }
};

module.exports = fetchcompany;
