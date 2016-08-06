const $ = require('jquery')
const skel = require('../../static/theme/assets/js/skel.min')

require('../../static/theme/assets/js/util')

const $window = $(window)
const $body = $('body')
const $header = $('#header')
const $banner = $('#banner')

skel.breakpoints({
  xlarge:	'(max-width: 1680px)',
  large:	'(max-width: 1280px)',
  medium:	'(max-width: 980px)',
  small:	'(max-width: 736px)',
  xsmall:	'(max-width: 480px)'
})

// Disable animations/transitions until the page has loaded.
$body.addClass('is-loading')

$window.on('load', function () {
  window.setTimeout(function () {
    $(document.body).fadeIn('fast')
    $body.removeClass('is-loading')
  }, 100)
})

// Fix: Placeholder polyfill.
$('form').placeholder()

// Prioritize "important" elements on medium.
skel.on('+medium -medium', function () {
  $.prioritize(
    '.important\\28 medium\\29',
    skel.breakpoint('medium').active
  )
})

// Header.
if (skel.vars.IEVersion < 9) $header.removeClass('alt')

if ($banner.length > 0 &&	$header.hasClass('alt')) {
  $window.on('resize', function () { $window.trigger('scroll') })

  $banner.scrollex({
    bottom: $header.outerHeight(),
    terminate: function () { $header.removeClass('alt') },
    enter: function () { $header.addClass('alt') },
    leave: function () { $header.removeClass('alt') }
  })
}
