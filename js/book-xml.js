function changeImageOpacity(){
    var images = document.getElementsByTagName('img');
    for(var i = 0; i < images.length; i++){
        images[i].style.opacity = 0.5;
    }
}

function loadXMLData(filePath, index) {
    var xhr = new XMLHttpRequest();
    var detailsDiv = document.getElementById('details');
    detailsDiv.innerHTML = ''; // Clear previous content

    xhr.onload = function() {
        if (xhr.status == 200) {
            var xmlDoc = xhr.responseXML;
            var elements = xmlDoc.getElementsByTagName('book')[index].childNodes;
            for (var i = 0; i < elements.length; i++) {
                var node = elements[i];
                if (node.nodeType === 1) { // Check if it's an element node
                    var newElement = document.createElement(node.nodeName);
                    newElement.textContent = node.textContent;
                    detailsDiv.appendChild(newElement);
                }
            }
        }
    };

    xhr.open('GET', filePath, true);
    xhr.send(null);
}

// Select the "Don Quixote" image and assign an event listener
var donQuixoteImage = document.getElementById('don-quixote-img');
donQuixoteImage.addEventListener('click', function() {
    loadXMLData('book-data.xml', 0);
    changeOpacityOfImages();
    donQuixoteImage.style.opacity = '1';
});

// Select the "A Tale of Two Cities" image and assign an event listener
var taleOfTwoCitiesImage = document.getElementById('two-cities-img');
taleOfTwoCitiesImage.addEventListener('click', function() {
    loadXMLData('book-data.xml', 1);
    changeOpacityOfImages();
    taleOfTwoCitiesImage.style.opacity = '1';
});

// Select the "The Lord of the Rings" image and assign an event listener
var lordOfTheRingsImage = document.getElementById('lotr-img');
lordOfTheRingsImage.addEventListener('click', function() {
    loadXMLData('book-data.xml', 2);
    changeOpacityOfImages();
    lordOfTheRingsImage.style.opacity = '1';
});
