fetch('ratings.json')
    .then(response => response.json())
    .then(data => {
        // Manipulate the data as needed
        console.log(data);

            // Display data in the HTML document
            document.getElementById('bls5Rating').innerText = data.bls5Rating;
            document.getElementById('dirtysquirtRating').innerText = data.dirtysquirtRating;
            document.getElementById('kushberryRating').innerText = data.kushberryRating;
        })
        .catch(error => console.error('Error:', error));
