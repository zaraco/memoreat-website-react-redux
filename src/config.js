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
            create: ``,
            edit: ``
        }
        ,
        cards: {
            all: `/set/cards`,
            create: ``,
            edit: ``

        }
        ,
        exam: {
            enter: `/set/exam/enter`,
            exam: `/set/exam`
        }

    };




