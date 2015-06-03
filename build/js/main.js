/**
 * Created by ִלטענטי on 02.06.2015.
 */
jQuery(document).ready(function(){
    jQuery('.menu-list-item').on('click', function(){
        $this = jQuery(this);
        $this.parent().parent().css({display:'none'});
    });

});