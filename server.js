const express = require("express");
const app = express();
require("dotenv").config();
const elementControllers = require("./controllers/elementControllers");

// restricting
const allowOnlyGetRoutes = (req, res, next) => {
    if (req.method == "GET") {
        next();
    } else {
        res.status(403).json({ message: "forbidden" });
    }
};

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(allowOnlyGetRoutes);

/* routes */

app.get("/", (req, res) => {
    res.send(`
        <p style="text-align: center;">
            periodic table api
            <span><a href="https://github.com/vaibhav-1098/periodic-table-RESTful-API-Launch">view Docs</a></span>
        </p>
    `);
});

app.get("/api/elements", elementControllers.getAllElements);
app.get("/api/element/:number", elementControllers.getElementByAtomicNumber);
app.get("/api/element/symbol/:symbol", elementControllers.getElementBySymbol);
app.post("/api/element/new", elementControllers.createNewElement);
app.patch("/api/element/update/:id", elementControllers.updateElementById);
app.delete("/api/element/delete/:id", elementControllers.deleteElementById);

app.use("/", (req, res) => {
    res.status(404).json({ message: "route not found" });
});

// port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server started");
});
