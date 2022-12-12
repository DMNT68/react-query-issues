import axios from "axios";

export const gitubApi = axios.create({
    baseURL:'https://api.github.com/repos/facebook/react',
    headers:{}
})