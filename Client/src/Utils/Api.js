import axios from "axios";
export default {
    saveClient: function(clientData) {
        return axios.post(".api/clients", clientData)
    },
    updateClient: function(id) {
        return axios.put("api/client/" + id)
    },
}