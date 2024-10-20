 

const searchInput = document.getElementById('search-input');
const searchReset = document.getElementById('search-reset');
const searchResults = document.querySelector('.search-results');

const toggleResetIcon = () => {
    if (searchInput.value.trim() !== '') {
        searchReset.style.display = 'block';
        searchResults.style.display = 'block';
    } else {
        searchReset.style.display = 'none';
        searchResults.style.display = 'none';
    }
};

searchInput.addEventListener('input', toggleResetIcon);

searchReset.addEventListener('click', function() {
    searchInput.value = '';
    toggleResetIcon();
});


function toggleOptions() {
    const optionsDiv = document.querySelector('.sort .options');
    optionsDiv.style.display = optionsDiv.style.display === 'flex' ? 'none' : 'flex';
}

document.querySelector('.sort').addEventListener('click', function(event) {
    event.stopPropagation();
    toggleOptions();
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.sort')) {
        document.querySelector('.sort .options').style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const sortOptions = document.querySelectorAll('.sort .option');
    
    sortOptions.forEach(option => {
        option.addEventListener('click', function(event) {
            sortOptions.forEach(opt => opt.classList.remove('active'));

            this.classList.add('active');
        });
    });
});
