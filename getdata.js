fetch('/ratings.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);

       
        const dirtysquirtRatingElement = document.getElementById('dirtysquirtRating');
        if (dirtysquirtRatingElement) {
            dirtysquirtRatingElement.innerText = data.dirtysquirtRating;
        }

       
        const kushberryRatingElement = document.getElementById('kushberryRating');
        if (kushberryRatingElement) {
            kushberryRatingElement.innerText = data.kushberryRating;
        }

        const bls5RatingElement = document.getElementById('bls5Rating');
        if (bls5RatingElement) {
            bls5RatingElement.innerText = data.bls5Rating;
        }


        



        // Add similar checks for other elements if needed
    })
    .catch(error => console.error('Error:', error));
