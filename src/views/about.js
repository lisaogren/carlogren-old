const $ = require('jquery')
const html = require('choo/html')

const header = require('../components/header')
const footer = require('../components/footer')

module.exports = () => {
  // Scroll to top of the page
  $(window).scrollTo(0, 'fast')

  return html `
    <div id="page-wrapper">
      ${header({ alt: false })}

      <div id="wrapper">
        <header>
          <div class="inner">
            <h2>About me</h2>
            <p>As stated before, I'm a web developer. Read about me growing up and my career path.</p>
          </div>
        </header>
        <div class="wrapper">
          <div class="inner">
            <h3>Growing up</h3>
            <p>
              Born in Stockholm, Sweden in 1985. My family moved to Paris, France when I was three years old.
              I've grown up in France, often feeling more French than Swedish when it suited me.
              I went to different schools and experienced different school systems.
              First through the french school system during elementary school,
              then swedish school system during middle school and finally an international school system during high school.
              All this in Paris and its surroundings.
            </p>
            <p>
              My mother had her office at home. Being a freelance journalist, she had a lot of computers very
              early on. So I've grown up being surrounded by technology from the beginning.
              I've been hooked to computer programming since I was 14 years old. It quickly became an obsession.
              Instead of doing my school homework, I would spend my nights programming mIRC scripts (interfaces, libraries, games).
              A bit later I would try to program games in Python using the PyGame library with not much luck.
            </p>
            <p>
              Coming out of high-school I had to find a job quickly to bring money home. No time to get a degree.
              My mother could not keep her business running after several very unlucky accidents.
            </p>
            <p>
              A few years passed. I got sick of doing the same repetitive tasks everyday.
              I decided to try and do something with myself.
              There had to be something better, more motivating, more rewarding,
              something which would make me happy and lets be frank, something with a better pay.
            </p>
            <h3>Here comes the web!</h3>
            <p>
              That is when I started learning how to build web pages. Now things were getting interesting.
            </p>
            <p>
              <em>Note: More about me soon!</em>
            </p>
          </div>
        </div>
      </div>

      ${footer()}
    </div>
  `
}
