/**
 * jsMasonry main.js
 * The main functionality of Masonry is handled in the view, however, resize does not function correctly.
 * To remedy this issue, the function below is called to maintain proper sizing
 */

 (function ($){
    $(window).load(function(){
        $grid = $('.view-news-events-wall .view-content');
        if ($grid.length !== 0) {
            $grid.masonry();
        }
    });
}(jQuery));
