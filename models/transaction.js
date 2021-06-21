const { v4: uuidv4 } = require('uuid');

const trans = [
    {
        id: "d5cfbb2-a13f-e16e-4c5d-e33cbe3414aa",
        from: "Apple",
        date: "2021-06-1",
        name: "Bill",
        amount: -15,
        notes: "Apple monthly bill"
    }, 
    {
        id: uuidv4(),
        from: "Sony",
        date: "2021-06-20",
        name: "PS Plus",
        amount: -15,
        notes: "Monthly bill"
    }, 
]

module.exports = trans;