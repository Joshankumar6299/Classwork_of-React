const funct1 = (req, res) => {
    const v1 = req.params.p1;
    console.log(req.params);  
    res.send(`This is a test page with parameter: ${v1}`);  
};

const funct2 = (req, res) => {
    res.send("This is a test2");
};

const funct3 = (req, res) => {
    res.send("This is a test page");
};

const funct4 = (req, res) => {
    res.send("Hello World!! from express js");
};

module.exports = {
    funct1,
    funct2,
    funct3,
    funct4
};
