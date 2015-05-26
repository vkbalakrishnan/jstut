npm install -g yo bower gulp nodemon generator-gulp-angular

in ../public folder run - 'yo'

add this to public/.bowerrc

"proxy":"http://192.168.0.2:3128",
"https-proxy":"http://192.168.0.2:3128"

then run "bower install"

bower cache-clean
git config --global url."git://".insteadOf https://
rm -rf ~/.bowerx

git config --global http.proxy http://192.168.0.2:3128

remove [http] proxy from ~/.gitconfig

npm config delete proxy
npm config delete https-proxy

npm install --save express mongodb body-parser cors

Node- signup
http://pasted.co/eafcff9a

\
Main.controller
http://pasted.co/0342dc4d





