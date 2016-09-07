const $ = require('jquery')
const get = require('lodash/get')
const skel = require('../../static/theme/assets/js/skel.min')

require('../../static/theme/assets/js/util')

const responsive = {
  init () {
    const $window = $(window)
    const $body = $('body')

    this.skel()

    // Disable animations/transitions until the page has loaded.
    $body.addClass('is-loading')

    $window.on('load', () => {
      window.setTimeout(() => {
        $body.fadeIn('fast').removeClass('is-loading')
      }, 100)
    })

    // Fix: Placeholder polyfill.
    $('form').placeholder()
  },

  skel () {
    skel.breakpoints({
      xlarge:	'(max-width: 1680px)',
      large:	'(max-width: 1280px)',
      medium:	'(max-width: 980px)',
      small:	'(max-width: 736px)',
      xsmall:	'(max-width: 480px)'
    })

    // Prioritize "important" elements on medium.
    skel.on('+medium -medium', function () {
      $.prioritize(
        '.important\\28 medium\\29',
        skel.breakpoint('medium').active
      )
    })
  },

  header () {
    const $window = $(window)
    const $header = $('#header')
    const $banner = $('#banner')

    // Header.
    if (skel.vars.IEVersion < 9) $header.removeClass('alt')

    if ($banner.length > 0 && $header.hasClass('alt')) {
      $window.on('resize', () => { $window.trigger('scroll') })

      // TODO:10 Replace jquery.scrollex dependency by in-view
      $banner.scrollex({
        bottom: $header.outerHeight(),
        terminate: () => { $header.removeClass('alt') },
        enter: () => { $header.addClass('alt') },
        leave: () => { $header.removeClass('alt') }
      })
    }
  },

  scrollTop (state, prev) {
    const scroll = get(state, 'location.pathname') !== get(prev, 'location.pathname')

    if (scroll) {
      document.body.scrollTop = 0
    }
  }
}

module.exports = responsive
