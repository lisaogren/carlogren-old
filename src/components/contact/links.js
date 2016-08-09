const html = require('choo/html')

module.exports = () => {
  return html `
    <ul class="contact">
      <li class="fa-envelope"><a href="mailto:carl.ogren@gmail.com">carl.ogren@gmail.com</a></li>
      <li class="fa-linkedin"><a href="https://www.linkedin.com/in/carl-ogren">linkedin.com/carl-ogren</a></li>
      <li class="fa-twitter"><a href="https://twitter.com/CarlOGREN">twitter.com/CarlOGREN</a></li>
      <li class="fa-github"><a href="https://github.com/RasCarlito">github.com/RasCarlito</a></li>
      <li class="fa-gitlab"><a href="https://gitlab.com/u/rascarlito">gitlab.com/rascarlito</a></li>
      <li class="fa-medium"><a href="https://medium.com/@rascarlito">medium.com/rascarlito</a></li>
    </ul>
  `
}
