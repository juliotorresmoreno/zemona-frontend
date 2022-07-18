
import config from "../config";
import { AuthModel, SessionModel } from "../types";

export async function getSession(token: string): Promise<SessionModel> {
    if (!token) throw new Error("Token not found!.");

    const url = `${config.baseUrl}/session/`;
    const response = await fetch(url, {
        method: 'GET',
        credentials: "include",
        mode: "cors",
        headers: {
            Authorization: token
        }
    });
    const content = await response.json();
    if (!response.ok) {
        throw new Error(content.message);
    }
    const data: SessionModel = content;
    return data;
}

export async function login(credentials: AuthModel): Promise<SessionModel> {
    const url = `${config.baseUrl}/session/`;
    const response = await fetch(url, {
        method: 'POST',
        credentials: "include",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });
    const content = await response.json();
    if (!response.ok) {
        throw new Error(content.message);
    }
    const data: SessionModel = content;
    return data;
}
