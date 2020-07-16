const API_URL = process.env.API_URL;

export const API_HEADER = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

export const API_ENDPOINTS = {
        auth: {
            login: `${API_URL}/user/login`,
            register: `${API_URL}/user/signup`
        },
        sets: {
            all: `${API_URL}/sets`,
            one: `${API_URL}/set`,
            create: ``,
            edit: ``
        }
        ,
        cards: {
            all: `${API_URL}/set/cards`,
            create: ``,
            edit: ``

        }
        ,
        exam: {
            enter: `${API_URL}/set/exam/enter`,
            exam: `${API_URL}/set/exam`
        }

    };




