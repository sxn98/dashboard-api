Partea de backend al programului de bot+dashboard <br/>
Construit cu Typescript si Nestjs in principal <br/>
Porniti cu "npm run start" <br/>

De asemenea, aveti nevoie de un fisier numit ".env.development" cu urmatoarele atribute: <br/>


PORT=3001<br/>

COOKIE_CODE="orice cuvant/propozitie"<br/>

# discord application credentials<br/>

APP_ID="id-ul bot-ului"<br/>
SECRET_ID="id-ul secret al bot-ului"<br/>
DIS_REDIRECT_URL=http://localhost:3001/api/auth/redirect<br/>
BOT_TOKEN = "token-ul bot-ului"<br/>

# DB settings<br/>

MYSQL_HOST="host-ul din MySQL, default e localhost"<br/>
MYSQL_USER="user-ul din MySQL"<br/>
MYSQL_PASS="parola user-ului"<br/>
MYSQL_DATABASE="numele bazei de date"<br/>
