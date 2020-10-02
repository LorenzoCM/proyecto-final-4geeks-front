import { useLocation } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            users: null,
            userDetails: null,
            products: null,
            productDetails: null,
            categories: null,
            apiURL: 'http://localhost:5000',
            currentUser: null,
            error: null,
            success: null,
            quantity: 0,
            cart: [],
            total: 0,
            name: '',
            last_name: '',
            email: '',
            phone: '',
            address: '',
            password: '',
            productSku: '',
            productBrand: '',
            productName: '',
            productPresentation: '',
            productPrice: '',
            stock: '',
            origin: '',
            species: '',
            ground: '',
            acidity: '',
            roasting: '',
            productDescription: '',
            productImage: '',
            categories: [1],
            conversionValue: null
        },
        actions: {
            getUsers: filters => {
                let store = getStore()
                fetch("http://127.0.0.1:5000/api/admincoffee/users", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(filters)
                })
                    .then(response => response.json())
                    .then(data => {
                        setStore({
                            ...store,
                            users: data
                        })
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            },
            putUserFromList: user => {
                fetch(`http://127.0.0.1:5000/api/admincoffee/users/${user.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user)
                })
                    .then(response => response.json())
                    .then(data => {
                        return "ok"
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            },
            getUserDetails: id => {
                let store = getStore()
                fetch(`http://127.0.0.1:5000/api/admincoffee/users/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            userDetails: data
                        })
                    });
            },            
            deleteUser: async (id, index) => {
                const store = getStore();
                const resp = await fetch(`${store.apiURL}/api/admincoffee/users/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': "Bearer " + store.currentUser.access_token               
                    }
                })
                const data = await resp.json();
                const { msg } = data;
                if (msg !== undefined) {
                    setStore({
                        error: msg
                    })
                } else {                
                let { users, currentUser } = store;
                users.splice(index, 1)
                setStore({
                    users: users,
                    currentUser: null
                })
            }},
            getProductDetails: id => {
                let store = getStore()
                fetch(`http://127.0.0.1:5000/api/products/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            productDetails: data
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
                        setStore({
                            ...store,
                            categories: data
                        })
                    });
            },
            getProductsFiltered: brewing => {
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
                        setStore({
                            ...store,
                            products: data
                        })
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            },
            deleteProducts: async (id, index) => {
                const store = getStore();
                const resp = await fetch(`${store.apiURL}/api/admincoffee/products/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': "Bearer " + store.currentUser.access_token
                    }
                })
                const data = await resp.json();
                const { msg } = data;
                if (msg !== undefined) {
                    setStore({
                        error: msg
                    })
                } else {
                    console.log(data);
                    let { products } = store;
                    products.splice(index, 1)
                    setStore({
                        products: products
                    })
                }
            },
            handleChangeLogin: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },
            handleChangeProduct: e => {
                const store = getStore();
                let { productDetails } = store;
                productDetails[e.target.name] = e.target.value
                setStore({
                    productDetails: productDetails
                })
            },
            handleChangeUser: e => {
                const store = getStore();
                let { userDetails } = store;
                userDetails[e.target.name] = e.target.value
                setStore({
                    userDetails: userDetails
                })
            },
            handleChangeFiles: e => {
                const store = getStore();
                setStore({
                    [e.target.name]: e.target.files[0]
                })
            },
            handleChangeEditFiles: e => {
                const store = getStore();
                let { productDetails } = store;
                productDetails[e.target.name] = e.target.files[0]
                setStore({
                    productDetails: productDetails[e.target.name]
                })
            },
            setTotal: (total) => {
                setStore({
                    total: total
                })
            },
            register: async (e, history) => {
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
                    sessionStorage.setItem('currentUser', JSON.stringify(data))
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
                    history.push('/')
                }
            },
            putCurrentUser: async (e, id) => {
                e.preventDefault();
                const store = getStore();
                const resp = await fetch(`${store.apiURL}/api/register/${id}`, {
                    method: 'PUT',
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
                    sessionStorage.setItem('currentUser', JSON.stringify(data))
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
                }
            },
            login: async (e, history) => {
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
                    sessionStorage.setItem('currentUser', JSON.stringify(data));
                    setStore({
                        name: '',
                        last_name: '',
                        password: '',
                        email: '',
                        phone: '',
                        address: '',
                        currentUser: data,
                        error: null,
                        cart: [],
                        quantity: 0
                    });
                    history.push('/')
                }

                console.log(data);
            },
            addProduct: async (e) => {
                e.preventDefault();
                console.log("hola");
                const store = getStore();
                const formData = new FormData();
                formData.append("sku", store.productSku);
                formData.append("brand", store.productBrand);
                formData.append("name", store.productName);
                formData.append("presentation", store.productPresentation);
                formData.append("price", parseInt(store.productPrice));
                formData.append("stock", parseInt(store.stock));
                formData.append("origin", store.origin);
                formData.append("ground", store.ground);
                formData.append("species", store.species);
                formData.append("acidity", parseInt(store.acidity));
                formData.append("roasting", parseInt(store.roasting));
                formData.append("description", store.productDescription);
                formData.append("image", store.productImage);
                formData.append("categories", store.categories);
                console.log(formData);
                const resp = await fetch(`${store.apiURL}/api/admincoffee/products`, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Authorization': "Bearer " + store.currentUser.access_token
                    }
                })
                const data = await resp.json();

                const { msg } = data;

                if (msg !== undefined) {
                    setStore({
                        error: msg
                    })
                }
                console.log(data);
            },
            putProduct: async (e, id) => {
                e.preventDefault();
                const store = getStore();
                const formData = new FormData();
                formData.append("sku", store.productDetails.sku);
                formData.append("brand", store.productDetails.brand);
                formData.append("name", store.productDetails.name);
                formData.append("presentation", store.productDetails.presentation);
                formData.append("price", store.productDetails.price);
                formData.append("stock", store.productDetails.stock);
                formData.append("origin", store.productDetails.origin);
                formData.append("ground", store.productDetails.ground);
                formData.append("species", store.productDetails.species);
                formData.append("acidity", store.productDetails.acidity);
                formData.append("roasting", store.productDetails.roasting);
                formData.append("description", store.productDetails.description);
                formData.append("image", store.productImage);
                const resp = await fetch(`${store.apiURL}/api/admincoffee/products/${id}`, {
                    method: 'PUT',
                    body: formData,
                    headers: {
                        'Authorization': "Bearer " + store.currentUser.access_token
                    }
                })
                const data = await resp.json();

                const { msg } = data;

                if (msg !== undefined) {
                    setStore({
                        error: msg
                    })
                }
                console.log(data);
            },
            cartProducts: (item) => {
                const store = getStore();
                let found = false;
                let user = JSON.parse(sessionStorage.getItem("currentUser"));
                if (!!user) {
                    if (store.cart.length == 0) {
                        setStore({
                            cart: store.cart.concat({ product: item, quantity: 1, user_id: user.user.id })
                        })
                    } else {
                        for (let i = 0; i < store.cart.length; i++) {
                            if (item.sku === store.cart[i].product.sku) {
                                store.cart[i].quantity++;
                                found = true;
                                break;
                            }
                        }
                        if (!found) {
                            setStore({
                                cart: store.cart.concat({ product: item, quantity: 1, user_id: user.user.id })
                            })
                        }
                    }
                } else {
                    if (store.cart.length == 0) {
                        setStore({
                            cart: store.cart.concat({ product: item, quantity: 1 })
                        })
                    } else {
                        for (let i = 0; i < store.cart.length; i++) {
                            if (item.sku === store.cart[i].product.sku) {
                                store.cart[i].quantity++;
                                found = true;
                                break;
                            }
                        }
                        if (!found) {
                            setStore({
                                cart: store.cart.concat({ product: item, quantity: 1 })
                            })
                        }
                    }
                }
                setStore({
                    quantity: store.cart.reduce((total, a) => { return total + a.quantity }, 0)
                })
                localStorage.setItem('currentCart', JSON.stringify(store.cart))
                localStorage.setItem('quantityCart', JSON.stringify(store.quantity))
            },
            updateCart: () => {
                const store = getStore();
                let cartInitializer = JSON.parse(localStorage.getItem("currentCart"))
                if (cartInitializer == null) {
                    setStore({
                        cart: []
                    })
                } else {
                    setStore({
                        cart: JSON.parse(localStorage.getItem("currentCart"))
                    })
                }
            },
            deleteProduct: (i, productQuantity) => {
                const store = getStore();
                let { cart, quantity } = store;
                cart.splice(i, 1)
                quantity = quantity - productQuantity;
                setStore({
                    cart: cart,
                    quantity: quantity
                })
                localStorage.setItem('currentCart', JSON.stringify(cart))
                localStorage.setItem('quantityCart', JSON.stringify(store.quantity))
            },
            getTotalCart: () => {
                const store = getStore();
                let total = 0;
                store.cart.map(function (product, index) {
                    console.log(total + store.cart[index].quantity);
                    return total;
                })

                console.log(total);
            },
            logout: () => {
                const store = getStore();
                setStore({
                    quantity: 0,
                    cart: [],
                    currentUser: null
                });
                sessionStorage.removeItem('currentUser');
                localStorage.setItem('quantityCart', JSON.stringify(store.quantity))
            },
            setCurrentProduct: (product) => {
                const store = getStore();
                setStore({
                    productDetails: product
                });
            },
            cartNumActualize: () => {
                let cartInitializer = JSON.parse(localStorage.getItem("quantityCart"))
                if (cartInitializer == null) {
                    setStore({
                        quantity: 0
                    })
                } else {
                    setStore({
                        quantity: JSON.parse(localStorage.getItem("quantityCart"))
                    })
                }
            },
            setCurrentUser: user => {
                setStore({
                    name: user.user.name,
                    last_name: user.user.last_name,
                    password: user.user.password,
                    email: user.user.email,
                    phone: user.user.phone,
                    address: user.user.adress,
                    error: null
                })
            },
            isAuthenticated: () => {
                const store = getStore();
                setStore({
                    currentUser: JSON.parse(sessionStorage.getItem("currentUser"))
                })
            },
            getConversionValue: APIdate => {
                let store = getStore()
                fetch(`https://mindicador.cl/api/dolar/${APIdate}`, {
                    method: 'GET',
                    headers: {}
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            conversionValue: data.serie[0].valor
                        })
                    });
<<<<<<< HEAD
=======
            },
            storePassword: password => {
                const store = getStore();
                setStore({
                    password: password
                })
>>>>>>> ed33ab8062d1faa37d6065c66ed2945d4c266d07
            }
        }
    }
}


export default getState;


// cart = [ { product: { }, quantity: 1, user_id: 1 }, { product: { }, quantity: 1, user_id: 1 }, ]

// cart.indexOf({product: { }, quantity: 1, user_id: 1})

