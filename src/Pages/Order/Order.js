import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setOrders(data)
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();
    }, [user])





    return (
        <div>
            <h1>Your Total Order is: {orders.length} </h1>
            {
                orders.map(order =>
                    <div>
                        <p>Name: {order.serviceName}</p>
                    </div>)
            }
        </div>
    );
};

export default Order;