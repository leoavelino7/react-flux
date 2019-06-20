const URL = "http://localhost:3002/api/react-flux/";

export const ApiService = {
    get(endpoint) {
        fetch(`${URL}${endpoint}`)
            .then(response => response.json());
    },
    post(endpoint, data) {
        fetch(`${URL}${endpoint}`, {
                method: "POST",
                body: JSON.stringify(data)
            })
            .then(response => response.json());
    },
    put(endpoint, data) {
        fetch(`${URL}${endpoint}?id=${data.id}`, {
                method: "PUT",
                body: JSON.stringify(data)
            })
            .then(response => response.json());
    },
    delete(endpoint, id) {
        fetch(`${URL}${endpoint}?id=${id}`, {
                method: "DELETE"
            })
            .then(response => response.json());
    }
}