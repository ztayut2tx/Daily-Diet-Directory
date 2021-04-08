const Coach = require("../models/coach");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { useRadioGroup } = require("@material-ui/core");
const Coach = require("../models/coach");
const {
    createJWT,
} = require("../utils/auth");

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


exports.signup = (req, res, next) => {
    let { name, email, password, password_confirmation } = req.body;

    let errors = [];
    if (!name) {
        errors.push({ name: "required" });
    }

    if (!email) {
        errors.push({ email: "required" });
    }
    if (!emailRegexp.test(email)) {
        errors.push ({ email: "required"});
    }

    if (!password) {
        errors.push({ password: "required"});
    }

    if (!password_confirmation) {
        errors.push({
            password_confirmation: "required",
        });
    }

    if (password != password_confirmation) {
        errors.push({ password: "mismatch"});
    }

    if (errors.length >0) {
        return res.status(422).json({ errors: errors});
    }
}
   
Coach.findOne({email: email})
.then(coach=>{
   if(coach){
      return res.status(422).json({ errors: [{ coach: "email already exists" }] });
   }else {
     const coach = new Coach({
       name: name,
       email: email,
       password: password,
     });

            bcrypt.genSalt(10, function(err, salt) {
                bycrpt.hash(password, salt, function(err, hash) {
                    if (err) throw err;
                    coach.password = hash;
                    coach.save()
                    .then(response => {
                        res.status (200).json ({
                            success: true,
                            result: response
                        })
                    })
                    .catch(err => {
                        res.status(500).json ({
                            errors: [{ error: err}]
                        });
                    });
                });
            });
        }
    }).catch(err => {
        res.status(500).json({
            errors: [{ error: "something went wrong"}]
        });
    });


exports.signin = (req, res) => {
    let { email, password } = req.body;

    let errors = [];
    if (!email) {
        errors.push ({ email: "required" });   
    }

    if (!emailRegexp.test(email)) {
        errors.push({ email: "invalid email" })
    }

    if (!passwor) {
        errors.push({ password: "required" });
    }

    if (errors.length > 0) {
        return res.status(422).json({ errors: errors });
    }


    Coach.findOne({ email: email }).then(newCoach => {
        if (!coach) {
            return res.status(404).json ( {
                errors: [{ coach: "not found"}],
            });
        } else {
            bcrypt.compare(password, newCoach.password).then(isMatch => {
                if (!isMatch) {
                    return res.status(400).json({ errors: [{ password:
                    "incorrect"}]
                    });
                }
                let access_token = createJWT(
                    coach.email,
                    coach._id,
                    3600
                );
                jwt.verify(access_token, process.env.TOKEN_SECRET, (err, decoded) => {
                    if (err) {
                        res.status(500).json({ errors: err});
                    }
                    if (decoded) {
                        return res.status(200).json ({
                            success: true,
                            token: access_token,
                            message: coach
                        });
                    }
                });
            }).catch(err => {
                res.status(500).json({ error: err });
            });
        }
    }).catch(err => {
        res.status(500).json({ error: err });
    })
}