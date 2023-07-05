import {Routes, Route} from "react-router-dom";
import { ROUTES } from "./constants/routes";
import Landing from "./pages/landing/landing";
import Title from "./components/title/title";
import Empty from "./pages/empty/Empty";
import Posts from "./components/posts/posts";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path={ROUTES.main}>
                <Route index element={<Landing />}></Route>
                <Route path={ROUTES.posts} element={<Posts />} />
            </Route>
            <Route path="*" element={<Empty />} />
        </Routes>
    )
}

export default RoutesComponent;