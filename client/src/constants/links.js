export const links = {
    main: {
        text: 'Home',
        link: "/",
    },
    login: {
        text: 'Login',
        link: "/login",
    },
    posts: {
        text: 'Show posts',
        link: "/posts",
    },
    post: {
        text: 'Show post',
        link: "/:id",
    },
    edit: {
        text: 'Edit post',
        link: "/:id/edit",
    },
    create: {
        text: 'Add post',
        link: "/create",
    }
    ,
    register: {
        text: 'Sign up',
        link: "/register",
    }
}

export const { main, login, posts, post, create, edit, register } = links