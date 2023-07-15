const jwt = require("jsonwebtoken");

module.exports.userAuth = async (req, res, next) => {
  let token = req.headers.token; // Use req.headers.token instead of req.headers("token")

  if (!token) return res.status(401).send("Access denied! No token provided!");

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.headers.email = decoded.data.email; // Access decoded.data.email directly
    req.user = {
      email: decoded.data.email,
      role: decoded.data.role,
    };
    next();
  } catch (error) {
    return res.status(400).json({ error: "Invalid token" });
  }
};

module.exports.adminAuth = function (req, res, next) {
  //console.log(req.user)
  if (req.user.role !== "admin") {
    return res.status(403).send("Forbidden!");
  } else {
    return next();
  }
};
