import {Routes, Route} from "react-router-dom";
import { ROUTES } from "./constants/routes";
import Landing from "./pages/landing/landing";
import Title from "./components/title/title";
import Empty from "./pages/empty/Empty";
import Posts from "./components/posts/posts";
import SignUp from "./pages/signUp/signUp";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path={ROUTES.main}>
                <Route index element={<Landing />}></Route>
                <Route path={ROUTES.posts} element={<Posts />} />
                <Route path={ROUTES.signUp} element={<SignUp />}/>
            </Route>
            <Route path="*" element={<Empty />} />
        </Routes>
    )
}

export default RoutesComponent;