# SANDBOX Neylify 404 to 204

`/dir/*` will be return 204, except `/dir/index.html`.

```shell
$ curl https://your-netlify-site-name.netlify.app/dir/aaa -i
HTTP/2 301
cache-control: public, max-age=0, must-revalidate
content-length: 39
content-type: text/plain; charset=utf-8
date: Sat, 25 Jul 2020 02:42:10 GMT
location: /.netlify/functions/204
age: 12
server: Netlify
x-nf-request-id: afca83f9-b46e-489d-9afb-b2cc489fa525-3020757

HTTP/2 204
cache-control: no-cache
date: Sat, 25 Jul 2020 02:42:21 GMT
age: 0
server: Netlify
x-nf-request-id: afca83f9-b46e-489d-9afb-b2cc489fa525-3020775
```
