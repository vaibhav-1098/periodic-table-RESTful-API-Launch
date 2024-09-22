const allowOnlyGetRoutes = (req, res, next) => {
    if (req.method == "GET") {
        next();
    } else {
        res.status(403).json({ message: "forbidden" });
    }
};

module.exports = allowOnlyGetRoutes;
