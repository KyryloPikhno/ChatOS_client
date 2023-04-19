import {axiosService} from "./axios.service";
import {url} from "../configs";


const userService = {
    getAll: () => axiosService.get(url.table),
    create: (user) => axiosService.post(url.table, user),
    update: (user) => axiosService.put(url.table, user),
    delete: (userId) => axiosService.delete(`${url.table}/${userId}`)
};

export {userService};
