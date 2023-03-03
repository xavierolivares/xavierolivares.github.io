# [xavierolivares.github.io](https://xavierolivares.github.io/index.html)

* The original version of this game was provided by [Fullstack Academy](https://www.fullstackacademy.com/).
    * It tracked your score through the same page view.
    * You'd lose your score if you refreshed the page.
* Currently, your score is tracked through [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).
    * You'd keep your score if you refresh the page.
    * If you open this page on a new tab, the score gets reset back to zero.
* To fix this, we can track your score across tabs using [cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)!
    * This means that you can open a new tab and your score will be saved.
    * This will only work through regular browser sessions and not incognito mode.