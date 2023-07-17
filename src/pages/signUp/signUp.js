import {NavLink} from "react-router-dom";
import {ROUTES} from "../../constants/routes";

import Form from "../../components/form/form";
import Title from "../../components/title/title";

import "./signUp.scss"

const SignUp = () => {
    return (
        <div className="su__container">
            <NavLink className="su-container__link" to={ROUTES.main}>Back to home</NavLink>
            <Title text="Sign Up"/>
            <Form />
        </div>
    )
}

export default SignUp;