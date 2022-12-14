import axios from "axios";

export const gitubApi = axios.create({
    baseURL:'https://api.github.com/repos/facebook/react',
    headers:{
        // Authorization: 'Bearer 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 '
    }
})