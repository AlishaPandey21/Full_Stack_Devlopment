// Write an expressJS code in which RESTapi is created for json object
// named data which contains name,id,branch,city and contact
// properties.
// ✓ On “/” page it should display all the content.
// ✓ Upon passing id on the browser url it should display the content
// having that id. (i.e. on localhost:7899/101)
// ✓ Upon passing branch on the browser url it should display the content
// having that branch. (i.e. on localhost:7899/cse)

const expr = require("express");
app = expr();
const data = [
    { id: 101, name: "ABC", branch: "CSE", contact: 9876543210, city: "Ahmedabad" },
    { id: 102, name: "BCD", branch: "CE", contact: 9876543210, city: "Ahmedabad" },
    { id: 103, name: "XYZ", branch: "CSE", contact: 9876543210, city: "Rajkot" },
    { id: 104, name: "PQR", branch: "IT", contact: 9876543210, city: "Ahmedabad" },
    { id: 105, name: "ABC", branch: "CSE", contact: 9876543210, city: "Surat" },
    { id: 106, name: "ABC", branch: "IT", contact: 9876543210, city: "Rajkot" }
];
app.get("/", (req, res) => {
    res.set("content-type", "text/html")
    for (i of data) {
        res.write("<h3>ID: " + JSON.stringify(i.id) + ", Name: " + i.name + ", Branch: " +
            i.branch + ", Contact: " + i.contact + ", City: " + i.city + "</h3>");
    }
    res.send();
});
app.get("/:id", (req, res) => {
    var current_data = data.filter((i1) => i1.id == req.params.id)
    if (current_data.length > 0) {
        res.send(current_data);
    } else {
        res.send("Not Found")
    }
});
app.get("/branch/:branch", (req, res) => {
    var cd = data.filter((b) => b.branch.toLowerCase() ==
        req.params.branch.toLowerCase())
    if (cd.length > 0) {
        res.send(cd);
    } else {
        res.send("Not Found")
    }
});
app.listen(7890);