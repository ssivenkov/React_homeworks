import axios from "axios";

const instance = axios.create({
    baseURL: "https://neko-cafe-back.herokuapp.com/auth/test",
})

export const RequestAPI = {
    request(checked: boolean) {
        return instance.post<any>("",  {success: checked})
            .then(response => response);
    },
}