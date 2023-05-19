import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { LoginPage } from "../pages/LoginPage";
import { PostsPage } from "../pages/PostsPage";
import { PostPage } from "../pages/PostPage";
import { EditPostPage } from "../pages/EditPostPage";
import { AddPostPage } from "../pages/AddPostPage";
import { RegisterPage } from "../pages/RegisterPage";
import { Layout } from "../components/Layout";
import { create, edit, login, main, post, posts, register } from "../constants/links";

export const router = createBrowserRouter([
    {
        path: main.link,
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: login.link,
                element: <LoginPage/>
            },
            {
                path: posts.link,
                element: <PostsPage/>
            },
            {
                path: post.link,
                element: <PostPage/>
            },
            {
                path: edit.link,
                element: <EditPostPage/>
            },
            {
                path: create.link,
                element: <AddPostPage/>
            },
            {
                path: register.link,
                element: <RegisterPage/>
            } ]
    },

])