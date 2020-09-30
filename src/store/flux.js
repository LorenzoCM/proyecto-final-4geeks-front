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
            cart: [],
            total: 0
        },
        actions: {
            mercadoPAGO: items => {
                fetch("https://www.mercadopago.cl/integrations/v1/web-payment-checkout.js", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(filters)
                })
                    .then(response => response.json())
                    .then(data => {
                        setStore({...store,
                            users: data
                        })
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            },
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
                        setStore({...store,
                            users: data
                        })
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
                        setStore({...store,
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
                        setStore({...store,
                            products: data
                        })
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            },
            deleteProducts: async (id, index) => {                
                const store = getStore();
                const resp = await fetch(`${store.apiURL}/api/products/${id}`, {
                    method: 'DELETE'            
                })
                const data = await resp.json();
                const { msg } = data;
                console.log(data);
                let { products } = store;
                products.splice(index, 1)
                setStore({
                    products: products
                })                                                               
            },
            handleChangeLogin: e => {
                setStore({
                    [e.target.name]: e.target.value
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
                }} else {
                    if (store.cart.length == 0) {                    
                        setStore({
                            cart: store.cart.concat({ product: item, quantity: 1})
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
                                cart: store.cart.concat({ product: item, quantity: 1})
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
                setStore({
                    cart: JSON.parse(localStorage.getItem("currentCart"))
                })
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
            cartNumActualize: () => {
                setStore({
                    quantity: JSON.parse(localStorage.getItem("quantityCart")),                    
                });   
            }
        }
    }
}


export default getState;


// cart = [ { product: { }, quantity: 1, user_id: 1 }, { product: { }, quantity: 1, user_id: 1 }, ]

// cart.indexOf({product: { }, quantity: 1, user_id: 1})