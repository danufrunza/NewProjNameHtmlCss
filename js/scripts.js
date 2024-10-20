var textarea = document.querySelector('.form-control');
var countElement = document.querySelector('.count');
if (textarea) {
    textarea.addEventListener('input', function() {
        var textLength = textarea.value.length;
        countElement.textContent = textLength + '/3000';
    });
}

var liElements = document.querySelectorAll('.offcanvas-body li');
if (liElements) {
    liElements.forEach(function(li) {
        li.addEventListener('click', function() {
            liElements.forEach(function(item) {
                item.classList.remove('active');
            });
            li.classList.add('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var closeButton = document.querySelector('.offcanvas-header .btn-close');
    var selectVoiceOffcanvas = document.querySelector('.offcanvas.selectVoiceCanvas');
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            selectVoiceOffcanvas.classList.remove('show');
        });
    }
});

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

document.querySelectorAll('.folder-actions').forEach(actionButton => {
    actionButton.addEventListener('click', function() {
        document.querySelectorAll('.folder .actions').forEach(actionsDiv => {
            if (actionsDiv !== this.closest('.folder').querySelector('.actions')) {
                actionsDiv.style.display = 'none';
            }
        });

        const actionsDiv = this.closest('.folder').querySelector('.actions');
        actionsDiv.style.display = actionsDiv.style.display === 'block' ? 'none' : 'block';
    });
});

document.querySelectorAll('.file-actions').forEach(actionButton => {
    actionButton.addEventListener('click', function() {
        document.querySelectorAll('.file .actions').forEach(actionsDiv => {
            if (actionsDiv !== this.closest('.file').querySelector('.actions')) {
                actionsDiv.style.display = 'none';
            }
        });

        const actionsDiv = this.closest('.file').querySelector('.actions');
        actionsDiv.style.display = actionsDiv.style.display === 'block' ? 'none' : 'block';
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.folder-actions') && !event.target.closest('.file-actions')) {
        document.querySelectorAll('.actions').forEach(actionsDiv => {
            actionsDiv.style.display = 'none';
        });
    }
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
