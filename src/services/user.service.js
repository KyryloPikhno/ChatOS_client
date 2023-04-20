import {axiosService} from "./axios.service";
import {url} from "../configs";


const userService = {
    getAll: () => axiosService.get(url.table),
    create: (user) => axiosService.post(url.table, user),
    update: (userId, user) => axiosService.put(`${url.table}/${userId}`, user),
    delete: (userId) => axiosService.delete(`${url.table}/${userId}`)
};

export {userService};
