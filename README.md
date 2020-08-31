# Visit -> [Instagram Clone Wilden](https://instagram-clone-wilden.web.app/)
[www.instagram-clone-wilden.web.app](https://instagram-clone-wilden.web.app/)

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Create React
- `$ npx create-react-app .`

# Setup Firebase Project
1. Create Project in Firebase named instagram-clone-wilden
2. Install firebase-tools
`$ npm install -g firebase-tools`
3. Login to firebase
`$ firebase login`

# Install Material UI
1. Open [material-ui](https://material-ui.com/getting-started/installation/)
2. Install material-ui
`$ npm install @material-ui/core`

# Create Database in Cloud Firestore
Create database in Cloud Firestore just next-next<br />
1. Start collection and fill in the Collection ID with name posts.
2. Click Auto-ID in the Auto-ID text field.
3. Create 3 Fields with name caption, username, imageUrl and Type of Field is String and the fill the Value colomn with what ever you want.

# Create firebase config file
1. Install `$ npm i firebase`
1. Create firebase.js file in src folder
2. Goto console firebase and setting project
3. Go down look at Firebase SDK snippet
4. Click Config radion button
5. Copy const firebaseConfig and paste to firebase.js and edit

# Firebase User Authentication
1. Go to console firebase
2. Click Authentication tabs in the left side
3. Choose Sign-in method
4. Choose Email/Password
- Enabled the First one
- Disbaled Email Link (passwordless sign-in)
- Click Save

# Modal Material-UI

# Install React Instagram Embed
`$ npm i react-instagram-embed`

# Deploy to Firebase
1. Install firebase tools
`$ npm install -g firebase-tools`
2. Firebase Init
`$ firebase init`
- Are you ready to procees? `Jawab Y`
- Pilih Hosting: `Configure and deploy Firebase Hosting sites`
- What do you want to use as your public directory? `(awalnya - public ganti jadi build)`
- Configure as a single-page app (rewrite all urls to /index.html)? (y/N) , `jawab YES aja`
- `$ npm run build`
- `$ firebase deploy`
- Cara cepat `$ npm run build && firebase deploy`