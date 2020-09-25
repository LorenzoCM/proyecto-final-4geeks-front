const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            products: null,
            apiURL: 'http://localhost:5000',
            name: '',
            last_name: '',
            password: '',
            email: '',
            phone: '',
            address: '',
            currentUser: null,
            error: null,
            success: null,
            quantity: 0,
            cart: []
        },
        actions: {
            getProductsRaw: () => {
                fetch(`http://127.0.0.1:5000/api/products/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            products: data
                        })
                    });
            },
            getProductsFiltered: (brewing) => {
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
            },
            cartProducts: (item) => {
                const store = getStore();
                let found = false;
                let user = JSON.parse(sessionStorage.getItem("currentUser"));
                // if (store.cart.length === 0) {
                //     store.cart.map(function (product, index) {
                //         console.log(product)
                //     })
                // }              
                if (store.cart.length == 0) {
                    console.log("hola");
                    setStore({
                        cart: store.cart.concat({ product: item, quantity: 1, user_id: user.user.id })
                    })
                } else {
                    for (let i = 0; i < store.cart.length; i++) {
                        if (item.sku === store.cart[i].product.sku) {
                            console.log("hola")
                            store.cart[i].quantity++;
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        console.log("chao")
                        setStore({
                            cart: store.cart.concat({ product: item, quantity: 1, user_id: user.user.id })
                        })
                    }
                }
                setStore({
                    quantity: store.cart.reduce((total, a) => { return total + a.quantity }, 0)
                })
                localStorage.setItem('currentCart', JSON.stringify(store.cart))
            },
            updateCart: () => {
                const store = getStore();
                setStore({
                    cart: JSON.parse(localStorage.getItem("currentCart"))
                })
            },
            deleteProduct: (i) => {
                const store = getStore();
                let { cart } = store;
                cart.splice(i, 1)
                setStore({
                    cart: cart,                
                    quantity: store.cart.reduce((total, a) => { return total - a.quantity }, 0)
                })
                localStorage.setItem('currentCart', JSON.stringify(cart))
            },
            getTotalCart: () => {
                const store = getStore();
                let total = 0;
                store.cart.map(function (product, index) {
                    console.log(total + store.cart[index].quantity);
                    return total;
                })

                console.log(total);
            }
        }
    }
}


export default getState;


// cart = [ { product: { }, quantity: 1, user_id: 1 }, { product: { }, quantity: 1, user_id: 1 }, ]

// cart.indexOf({product: { }, quantity: 1, user_id: 1})