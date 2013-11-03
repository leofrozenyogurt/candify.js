(function ( $ ) {
 
    $.fn.candify = function( options ) {
 
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            color: "black",
            backgroundColor: "white",
            borderColor:"grey"
        }, options );
 
        // Candify the collection based on the settings variable.
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor,
            boxShadow: ('0px 3px 0px 0px '+ settings.borderColor)
        }).addClass('candify');
 
    };
 
}( jQuery ));