import {Routes, Route} from "react-router-dom";
import { ROUTES } from "./constants/routes";
import Landing from "./pages/landing/landing";
import Title from "./components/title/title";
import Empty from "./pages/empty/Empty";
import Posts from "./components/posts/posts";
import SignUp from "./pages/signUp/signUp";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import SelectedPost from "./pages/posts/selectedPost/selectedPost";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path={ROUTES.main}>
                <Route index element={<Landing />}></Route>
                <Route path={ROUTES.signUp} element={<SignUp />}/>
                <Route path={ROUTES.posts}>
                    <Route index element={<ProtectedRoute><Posts/></ProtectedRoute>} />
                    <Route path={':postId'} element={<SelectedPost />} />
                </Route>
            </Route>
            <Route path="*" element={<Empty />} />
        </Routes>
    )
}

export default RoutesComponent;