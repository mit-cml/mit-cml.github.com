
/* see Issue "autoresize" http://drupal.org/node/360549 */
(function ($) {
  Drupal.behaviors.iframeModule = {
    attach: function(context, settings) {
      $('iframe.autoresize').each(function() {
        try {
          $(this)[0].contentWindow.onload = function() {
            $(this)[0].frameElement.style.height = ($(this)[0].document.body.scrollHeight) + 'px';
            $(this)[0].frameElement.scrolling = 'no';
          };
          $(this)[0].contentWindow.frameElement.style.height = ($(this)[0].contentWindow.document.body.scrollHeight) + 'px';
          $(this)[0].contentWindow.frameElement.scrolling = 'no';
        } catch (e) {
          elem = $(this)[0];
          msg = $('<p><small>(' + Drupal.t('IFrame URL is not from the same domain - autoresize not working.') + ')</small></p>');
          $(elem).after(msg);
        }
      });
    }
  }
})(jQuery);


