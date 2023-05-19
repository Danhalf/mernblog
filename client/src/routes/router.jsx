import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { LoginPage } from "../pages/LoginPage";
import { PostsPage } from "../pages/PostsPage";
import { PostPage } from "../pages/PostPage";
import { EditPostPage } from "../pages/EditPostPage";
import { AddPostPage } from "../pages/AddPostPage";
import { RegisterPage } from "../pages/RegisterPage";
import { Layout } from "../components/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: "/login",
                element: <LoginPage/>
            },
            {
                path: "/posts",
                element: <PostsPage/>
            },
            {
                path: "/:id",
                element: <PostPage/>
            },
            {
                path: "/:id/edit",
                element: <EditPostPage/>
            },
            {
                path: "/new",
                element: <AddPostPage/>
            },
            {
                path: "/register",
                element: <RegisterPage/>
            } ]
    },

])