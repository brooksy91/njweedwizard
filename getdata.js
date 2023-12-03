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

        const superlavbutter1RatingElement = document.getElementById('superlavbutter1Rating');
        if (superlavbutter1RatingElement) {
            superlavbutter1RatingElement.innerText = data.superlavbutter1Rating;
        }

        const whitegrapefruitcookies7RatingElement = document.getElementById('whitegrapefruitcookies7Rating');
        if (whitegrapefruitcookies7RatingElement) {
            whitegrapefruitcookies7RatingElement.innerText = data.whitegrapefruitcookies7Rating;
        }



    })
    .catch(error => console.error('Error:', error));