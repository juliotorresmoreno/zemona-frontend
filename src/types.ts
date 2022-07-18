

export type TweetModel = {
    id: string;
    created_at: string;
    text: string;
    author_id: string;
};

export type ProfileModel = {
    "id": string;
    "username": string;
    "name": string;
    "image_src": string;
    "description": string;
    "created_at": string;
}

export type ProfileModelUpdate = {
    "username": string;
    "name": string;
    "image_src": string;
    "description": string;
}

export type RequestsModel = {
    "count": number;
    "profileId": string;
}

export type SessionModel = {
    profile?: ProfileModel;
    token?: string;
}

export type AuthModel = {
    username: string;
    password: string;
}

