const express = require('express');
const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);



  
});


// NPM trouble shoot notes
// reinstalled npm X - installs packs but does nothing else
// npm install --package-lock-only X - hangs
// recloned repo X
// inflate:node? X - hangs
// imported json packsfrom other repo X
// npm cache clean  --force X
// tried npm i and other packages in different repos, same issues/errors. I think this is a device issue.
// npm install -g npm@latest X - literally does nothing in (repo dir and main dir)
// npm install -g npm X - literally does nothing (repo dir and main dir)
// node -v v18.13.0
// npm -v 9.6.3
// brew install node => npm install -g npm X same issues presented itself from line33
// hail mary restarted apps and device. No luck
// npm update or npm update --save-dev (term:up to date in 38ms)(integrated vs term: hangs: (⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂) ⠦ idealTree:shop-drop: sill)
// npm outdated X - Does nothing
// npm init -y again = progress, created new pk.json
// npm install again = new error: npm ERR! code ENOTEMPTY
