window.fbAsyncInit = function () {
  // eslint-disable-next-line no-undef
  FB.init({
    appId: 374750910421729,
    cookie: true,
    xfbml: true,
    version: 'v3.2'
  })
  // eslint-disable-next-line no-undef
  FB.AppEvents.logPageView()
};

(function (d, s, id) {
  let js; const fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) { return }
  // eslint-disable-next-line prefer-const
  js = d.createElement(s); js.id = id
  js.src = 'https://connect.facebook.net/en_US/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))
