require(['jquery'], function ($) {
    var tmpHtml = '';
    $('body').on('click', function (evt) {
        if (evt.target.tagName !== 'INPUT' || evt.target.getAttribute('type') !== 'button') {
            return false;
        }
        if (evt.target.className === 'wait') {
           setTimeout(function() {
               $('#outy')[0].setAttribute('class', 'show');
           }, 4000);
        } else if (evt.target.className === 'login') {
            setTimeout(function() {
                tmpHtml = $('body form').html();
                $('body form').html('<h2>You are now logged in</h2><input type="button" class="logout" value="Logout"/>');
            }, 4000);
        } else if (evt.target.className === 'logout') {
            setTimeout(function() {
                $('body form').html(tmpHtml);
            }, 4000);
        } else {
            var fortextId = $(evt.target).data().fortext,
                text = $('#' + fortextId).val();
            $('#outy').text($('#outy').text() + text);
        }


    });
    setTimeout(function() {
        $('body').data('loaded', true);
    }, 100);
});


