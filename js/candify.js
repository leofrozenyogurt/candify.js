(function ( $ ) {
 
    $.fn.candify = function( options ) {
 
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            color: "yellow",
            backgroundColor: "transparent"
        }, options );
 
        // Candify the collection based on the settings variable.
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        }).addClass('candify');
 
    };
 
}( jQuery ));