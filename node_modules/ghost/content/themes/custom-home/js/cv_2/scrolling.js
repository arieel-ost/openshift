// borrowed from http://stackoverflow.com/a/14805098/295797

$(document).ready(function() {
 $('.smooth-scroll').find('a').bind('click', function(e) {
     e.preventDefault();
     $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 300);
  });
});