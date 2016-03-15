## node.js/Express
### content
+ Use Express to build a simple web page;
+ Use bower to load jquery and boostrap;
+ Use supervisor to watch file's changes,like:supervisor ./bin/www
+ The page direct order is:  
/:home --> /hello: login page --> /home: logOut -->/:home

express4.x

As of 4.x, Express no longer depends on Connect. All of Express' previously included middleware are now in separate repos. Please view the list of middleware. The only included middleware is now express.static().

hard:

+ 1,hard to learn jade grammar;
+ 2,too few learning data,cause of the quick update;

to improve:

+ add session to store message of user,use express-session,connect-mongo;
