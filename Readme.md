<h1>#JWT token for WordPress</h1>
This is the simple project to demonstrate that WordPress as Headless Application.
In this project Wordpress is For creating content and DBMS System.

Where we will use React Application to connect WordPress Application. and Get data from server.
We will use WordPress Rest Api of API connection.

#Free HTML Bootstrap Template
https://startbootstrap.com/previews/clean-blog

Note:

1. You will need JWT token to perform "POST"
2. copy the composer.json inside fresh wordpress.
3. You will need to use "Composer Install" and "Composer Update" to install recommended Plugins
4. This will install the required plugin
5. Now activate the plugins
6. Your website must be "localhost/headerlessWP" and credential "admin" and password "pass"
7. Now go to FrontendApp/Blogger.
8. "npm start"
9. Now go to "Localhost:3000"
10. click "view Post"

#NOTE:
Do not forget to insert add following code in wp-config.php

define('JWT*AUTH_SECRET_KEY', '3]tYYQcYoY#qulCZf/9-M:|Wv{!aHy)Wb`*?OsbgIF-Q%L[0s.NSF jBS7noP6QI');

define('JWT_AUTH_CORS_ENABLE', true);
