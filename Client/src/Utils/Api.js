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
    // deleteClient: function(id) {
    //     return axios.delete("/api/post/" + id);
    // },
    //Meals
    getMeals: function() {
        return axios.get("/api/meal");
    },
    getMeal: function(id) {
        return axios.get("/api/meal/" + id);
    },
    findMeal: function(title) {
        return axios.get("/api/meal/find", {
            params: {
                title: title
            }
        })
    },
    saveMeal: function(mealData) {
        console.log(mealData)
        return axios.post("/api/meal", mealData);
        
    },
    updateMeal: function(id) {
        return axios.get("/api/meal/" + id);
    }

}