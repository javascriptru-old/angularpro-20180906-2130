# Security


## JWT ( JSON Web Token )

- auth
- exchange

- header
- payload
- signature

HMACSHA256(
  base64(header) + '.' + base64(payload),
  secret
)



# XSS

Sanitization
- HTML
- Style
- URL
- Resourse URL

DomSanitizer  .  bypassSecurityTrust{{Type}}


# XSRF

server:
- reject cookie/header mismatch
- random cookie to the client
- use CORS

client:
- read random cookie
- send good header
- Angular

HttpClientXsrfModule.withOptions({
  cookieName: 'xsrf-cookie',
  headerName: 'xsrf-header',
});


RFC6265 "Same-site Cookies"



# ACL

Role
Resource
Permissions (read / view / update / delete  )

