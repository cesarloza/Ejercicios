const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/palindrome', (req, res) => {
    const { phrase } = req.body;
    var loverCase = phrase.toLowerCase();
    var array = loverCase.split("");

    var empty = "";
    for (i in array) {
        if (array[i] != " ") {
            empty += array[i];
        }
    }
    var nArray = empty.split("");
    var reverse = empty.split("").reverse();
    flag = true;
    for (i = 0; i < nArray.length; i++) {
        if (nArray[i] != reverse[i]) {
            flag = false;
            break;
        };
    };
    if (flag) {
         res.json({phrase:flag});
    } else {
        res.json({phrase:flag});
    }
    
});

app.listen(3000, () => {
    console.log("server on port 3000");
});