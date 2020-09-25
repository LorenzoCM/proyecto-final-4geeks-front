const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            products: null,
            categories: null,
            apiURL: 'http://localhost:5000',
            name: '',
            last_name: '',
            password: '',
            email: '',
            phone: '',
            address: '',
            currentUser: null,
            error: null,
            success: null
        },
        actions: {
            // please use this fetch only on local states...
            getProductsRaw: () => {
                let store = getStore()
                fetch("http://127.0.0.1:5000/api/products/", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({...store,
                            products: data
                        })
                    });
            },
            getCategories: () => {
                let store = getStore()
                fetch("http://127.0.0.1:5000/api/categories/", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({...store,
                            categories: data
                        })
                    });
            },
            getProductsFiltered: (brewing) => {
                let store = getStore()
                fetch("http://127.0.0.1:5000/api/products/brewing", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(brewing)
                })
                    .then(response => response.json())
                    .then(data => {
                        setStore({...store,
                            products: data
                        })
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            },
            handleChangeLogin: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },
            register: async e => {
                e.preventDefault();
                const store = getStore();
                const resp = await fetch(`${store.apiURL}/api/register`, {
                    method: 'POST',
                    body: JSON.stringify({
                        name: store.name,
                        last_name: store.last_name,
                        password: store.password,
                        email: store.email,
                        phone: store.phone,
                        address: store.address
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                const data = await resp.json();

                const { msg } = data;

                if (msg !== undefined) {
                    setStore({
                        error: msg
                    })
                } else {
                    setStore({
                        name: '',
                        last_name: '',
                        password: '',
                        email: '',
                        phone: '',
                        address: '',
                        currentUser: data,
                        error: null
                    })
                    sessionStorage.setItem('currentUser', JSON.stringify(data))
                }

                console.log(data);
            },
            login: async e => {
                e.preventDefault();
                const store = getStore();
                const resp = await fetch(`${store.apiURL}/api/login`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: store.email,
                        password: store.password
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                const data = await resp.json();

                const { msg } = data;

                if (msg !== undefined) {
                    setStore({
                        error: msg
                    })
                } else {
                    setStore({
                        name: '',
                        last_name: '',
                        password: '',
                        email: '',
                        phone: '',
                        address: '',
                        currentUser: data,
                        error: null
                    })
                    sessionStorage.setItem('currentUser', JSON.stringify(data))
                }

                console.log(data);
            }

        }
    }
}


export default getState;