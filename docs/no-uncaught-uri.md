# no-uncaught-uri

Rule that enforces any uri manipulation used to be inside a try...catch block

- decodeURI(uri)
- decodeURIComponent(uri)
Throws URIError if the URI is malformed.

- encodeURI(uri)
- encodeURIComponent(uri)
Throws URIError if the URI is invalid.
