/**
 * Created by Jonathan Rodrigues on 16/08/2018.
 */
window.onload=function(){
    'use strict';
    var snackbarContainer = document.querySelector('#demo-snackbar-example');
    var showSnackbarButton = document.querySelector('#demo-show-snackbar');
    var handler = function(event) {
        showSnackbarButton.style.backgroundColor = '';
    };
}
(function() {
    showSnackbarButton.addEventListener('click', function() {
        'use strict';
        showSnackbarButton.style.backgroundColor = '#' +
            Math.floor(Math.random() * 0xFFFFFF).toString(16);
        var data = {
            message: 'Button color changed.',
            timeout: 2000,
            actionHandler: handler,
            actionText: 'Undo'
        };
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
    });
}());