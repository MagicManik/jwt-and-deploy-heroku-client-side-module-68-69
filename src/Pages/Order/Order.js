import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        const email = user.email;
        fetch(`http://localhost:5000/order?email=${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user])
    return (
        <div>
            <h1>Your Total Order is: {order.length} </h1>
        </div>
    );
};

export default Order;