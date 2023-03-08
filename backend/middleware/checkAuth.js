const checkAuth = (req, res, next) => {
  console.log("Desde CheckAuth");

  next();
};

export default checkAuth;
