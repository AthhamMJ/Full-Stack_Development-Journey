fetch("key.json")
    .then(response => response.json())
    .then(data => {
        console.log(data[0].name); // Adam
        console.log(data[1].name); // John
        console.log(data[2].name); // Sarah
    });
