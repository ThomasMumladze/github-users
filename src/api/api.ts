import axios from "axios";

export const AxiosInstance = axios.create({
    method: "GET",
    baseURL: "https://api.github.com",
});

export const gitHubUsers = (value: string): any => {
    if (typeof value != "string") return null;
    if (!value) return false;

    const users = AxiosInstance.get(`/users/${value}`);

    return users;
};
