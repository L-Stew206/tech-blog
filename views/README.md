# Views

GET - "/" - home 

---

GET - "/login" - Login form 

POST - "/api/users/login" - Authenticate existing user

---

GET - "/signup" - Registration form

POST - "/api/users/" - Create User

---

GET - "/dashboard" -  User Dashboard 

---

Get - "/dashboard/new" - Create Post 

POST - "/api/posts" - Create Post API

---

GET - "/dashboard/edit/:postId" - Edit Post View

PUT - "/api/post/:postId" - Edit Post API

DELETE - "/api/posts/:postId" - Delete Ppost API

---

Get - "/post/:postId" - View a single post 

POST - "/api/comments" - create a comment for a post
