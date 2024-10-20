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
