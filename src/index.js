const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
require ("./passport");

const app = express();

app.use(cookieSession({
    name: 'session-name',
    keys: [ 'key1', 'key2']
}))

app.use(passport.initialize());
app.use(passport.session());

app.get("/",(req, res) => {
    res.send('<h1>Home</h1>')
});

app.get("/failed", (req, res) => {
    res.send("<h1>Log in Failed :(</h1>")
});

const checkUserLoggedIn = (req, res, next) => {
    req.user ? next(): res.sendStatus(401);
}

app.get("/profile", checkUserLoggedIn, (req, res) => {
    res.send(`<h1>${req.user.displayName}'s Profile Page</h1>`)
});

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
function(req, res) {
    res.redirect('/profile');
}
);

app.get('/logout', (req, res) => {
    req.session = null;
    req.logOut();
    res.redirect('/');
})

app.listen(3000, () => console.log (`App listening on port ${3000}`))