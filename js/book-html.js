function images(){
    var images = document.getElementsByTagName('img');
    for(var i = 0; i < images.length; i++){
        images[i].style.opacity = 0.5;
    }
}


function loadHTMLFile(filePath) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if(xhr.status === 200){
            document.getElementById('details').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', filePath, true);
    xhr.send(null);
}

// Select "Don Quixote" image and assign event listener
var donQuixoteImage = document.getElementById('don-quixote-img');
donQuixoteImage.addEventListener('click', function() {
    loadHTMLFile('cervantes-data.html');
    changeImageOpacity();
    donQuixoteImage.style.opacity = 1;
});

// Select "A Tale of Two Cities" image and assign event listener
var taleOfTwoCitiesImage = document.getElementById('two-cities-img');
taleOfTwoCitiesImage.addEventListener('click', function() {
    loadHTMLFile('dickens-data.html');
    changeImageOpacity();
    taleOfTwoCitiesImage.style.opacity = 1;
});

// Select "The Lord of the Rings" image and assign event listener
var lordOfTheRingsImage = document.getElementById('lotr-img');
lordOfTheRingsImage.addEventListener('click', function() {
    loadHTMLFile('tolkien-data.html');
    changeImageOpacity();
    lordOfTheRingsImage.style.opacity = 1;
});
