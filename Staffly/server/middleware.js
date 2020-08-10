const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
// const port = process.env.PORT || 8080;
// console.log that your server is up and running
// app.listen(port, () => console.log(`Listening on port ${port}`));
app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/daysoff', function (req, res) {
    res.send([{
        "RequestID": "111",
        "DaysOffType": "1",
        "RequestDate": "10/01/2020",
        "StartDate": "30/07/2020",
        "EndDate": "8/08/2020",
    }
    ]);
});
app.get('/balance', function (req, res) {
    res.send([
        {
            "AsOff": "06/04/2020",
            "TotalDays": "30",
            "DaysUsed": "5",
        }
    ])
});


app.get('/shifts', function (req, res) {
    res.send([{
        "ShiftId": "233",
        "PersonId": "2444",
        "ShiftStartDate": "27/03/2020",
        "ShiftEndDate": "27/03/2020",
        "ShiftType": "1",
        "Location": "G336",


    }
    ]);
});

app.listen(process.env.PORT || 8080);