Strictly cookie-header-parsing middleware. For [Connect][] (Express) applications.


## Usage

```javascript
const strictCookieMiddleware = require('strict-cookie-middleware');

app.use(strictCookieMiddleware);
```

```javascript
const token = req.cookies.get('t');
```


## API

- `request.cookies`

    A [Map][] of cookies attached to the request. Empty if the cookie header is invalid.


  [Connect]: https://github.com/senchalabs/connect
  [Map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
