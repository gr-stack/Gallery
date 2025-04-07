$(document).ready(function () {

    $('#imgid1').click(function () {
        $('.col img').hide();
        $('#img1').fadeToggle(200).fadeIn(200);
    });
    
    // Click event for Toni Kroos
    $('#imgid2').click(function () {
        $('.col img').hide();
        $('#img2').slideUp('slow').slideDown('slow');
    });
    
    $('#imgid3').click(function () {
        $('.col img').hide();
        $('#img3').hide(2000).show(2000);
    });
    
    $('#imgid4').click(function () {
        $('.col img').hide();
        $('#img4').fadeToggle();
        $('#img4').fadeOut();
    });
    
    // Show all images
    $('#imgid5').click(function () {
        $('.col img').show(1000);
    });
    });