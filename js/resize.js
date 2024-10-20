// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
$(document).ready(function () {
    setMinHeightToVisibleHeightCotainer();
});


 

function setMinHeightToVisibleHeightCotainer() {
    
   

    if (window.innerWidth < 768) {

        const textContainers = document.querySelector('.content-block');
		
	 
        if (textContainers !== null) {

            var asideElement = document.getElementById('aside-menu');
            var topElement = document.getElementById('top-menu');

            if (asideElement !== null && topElement !== null) {
                textContainers.style.marginBottom = asideElement.offsetHeight + "px";
                textContainers.style.marginTop = topElement.offsetHeight + "px";
            }

        }

    }
    else
    {
        const textContainers = document.querySelector('.content-block');
 
        if (textContainers !== null) {

            
            var topElement = document.getElementById('top-menu');
            if ( topElement !== null) {
                textContainers.style.marginBottom = (topElement.offsetHeight + 12) + "px";
            }

        }

    }

}


window.addEventListener('resize', setMinHeightToVisibleHeightCotainer);