const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            products: null,
            
        },
        actions: {
            getProducts: () => {
                fetch("http://127.0.0.1:5000/api/products/", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            products: data
                        })
                    });
            },

        }
    }
}


export default getState;