import axios from "axios"
export default {
    //Coach
    getUser: function(id) {
        return axios.get("/api/coach/" + id);
    },
    saveUser: function(coachData) {
        return axios.post("/api/coach", coachData);
    },
    //Client
    // getClients: function() {
    //     return axios.get("/api/client");
    // },
    // getClient: function(id) {
    //     return axios.get("/api/client/" + id);
    // },
    // saveClient: function(clientData) {
    //     return axios.post("/api/client", clientData);
    // },
    // updateClient: function(id) {
    //     return axios.put("/api/client/" + id);
    // },
    //Meals
    getMeals: function() {
        return axios.get("/api/meal");
    },
    getMeal: function(id) {
        return axios.get("/api/meal/" + id);
    },
    saveMeal: function(mealData) {
        console.log(mealData)
        return axios.post("/api/meal", mealData);
    },
    updateMeal: function(id) {
        return axios.get("/api/meal/" + id);
    },
    deleteMeal: function(id) {
        return axios.delete("/api/meal/" + id);
    },

}