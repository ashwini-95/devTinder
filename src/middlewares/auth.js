const adminAuth = (req, res, next) => {
  const token = "admin";
  let isAuthorized = token === "admin";
  if (!isAuthorized) {
    res.status(401).send("Not Authorized");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  const token = "abc";
  let isAuthorized = token === "user";
  if (!isAuthorized) {
    res.status(401).send("Not Authorized");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
