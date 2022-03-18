const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        // this.address = `${this.street} ${this.city}, ${this.state} ${this.zipCode}, ${this.country}`

        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/users/new", (req, res) => {
    res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
    res.json([new User(), new Company()]);
});

// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));

