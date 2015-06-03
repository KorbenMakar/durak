var app = new App();

$(document).ready(function($){
    $('.menu-list-item').on('click', function(){
        app.startGame($(this).attr('data-players-count'));
    });
});