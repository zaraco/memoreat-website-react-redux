export const API_HEADER = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "X-Requested-With": "XMLHttpRequest"
};

export const API_ENDPOINTS = {
        auth: {
            login: `/user/login`,
            register: `/user/signup`
        },
        sets: {
            all: `/sets`,
            one: `/set`,
            my:'/sets/my',
            create: `/set/create`,
            edit: `/set/edit`
        }
        ,
        cards: {
            all: `/set/cards`,
            create: `/card/create`,
            edit: `/card/edit`

        }
        ,
        exam: {
            enter: `/set/exam/enter`,
            exam: `/set/exam`
        },
        main: {
            index: ""
        }

    };




