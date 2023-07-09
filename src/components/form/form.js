import './form.scss'
import Input from "./input/input";
import Button from "../button/button";
import {useState} from "react";

const Form = () =>{

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function addUser() {

        let user = {
            name: userName,
            email: userEmail,
            password: password,
            confirmPassword: confirmPassword
        };

        console.log(user);

    }

    return(

        <div className="form__container">
            <Input
                label="Name"
                placeholder="Your name"
                disabled={false}
                name="userName"
                value={userName}
                onChange={(event) => setUserName(event)}
            />
            <Input
                label="Email"
                placeholder="Your email"
                name="userEmail"
                value={userEmail}
                type={"email"}
                onChange={(event) => setUserEmail(event)}
            />
            <Input
                label="Password"
                placeholder="Your password"
                name="password"
                value={password}
                type={"password"}
                onChange={(event) => setPassword(event)}
            />
            <Input
                label="ConfirmPassword"
                placeholder="Your password"
                name="confirmPassword"
                value={confirmPassword}
                type={"password"}
                onChange={(event) => setConfirmPassword(event)}
            />
            <div className="form-container__footer">
                <Button fullWidth={true} onClick={addUser}>Sign Up</Button>
                <p className="form-container-footer__text">
                    Already have an account? <a className="form-container-footer__link" href="">Sign In</a>
                </p>
            </div>
        </div>

    )
}

export default Form;