import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useServiceDetail from '../../hooks/useServiceDetail';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service, setService] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);


    // const [user1, setUser1] = useState({
    //     name: 'Akbor the great',
    //     email: 'akbor@gmail.com',
    //     phone: '01711111111',
    //     address: 'Tajmohol road agra',
    // })

    // const handleAddressChange = event => {
    //     const { address, ...rest } = user;
    //     const newAddress = event.target.value;
    //     const newUser = { address: newAddress, ...rest }
    //     setUser1(newUser);
    // }
    const handleOrderPlace = event => {
        event.preventDefault();

        // const name = user.name;
        // const email = user.email;
        // const serviceName = service.name;
        // const id = service._id;
        // const address = event.target.address.value;
        // const phone = event.target.address.value;

        // const order = { name, email, serviceName, id, address, phone }

        const order = {
            name: user.name,
            email: user.email,
            serviceName: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        axios.post('http://localhost:5000/order', order)
            .then(respons => {
                const { data } = respons;
                if (data.insertedId) {
                    alert('Your Order Is Booked !!')
                    event.target.reset();
                }
            })


        // fetch('http://localhost:5000/order', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(order)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.insertedId) {
        //             alert('Your order is booked!!')
        //             event.target.reset();
        //         }
        //     })
    }


    return (
        <div className='w-75 mx-auto'>
            <h1>This is my checkout page. Place order</h1>

            <form onSubmit={handleOrderPlace}>
                <br />
                <input className='w-50 mb-2' type="text" value={user?.displayName} name="name" id="" disabled readOnly />
                <br />
                <input className='w-50 mb-2' type="text" value={user?.email} name="email" id="" disabled readOnly />
                <br />
                <input className='w-50 mb-2' type="text" value={service.name} name="service" id="" disabled readOnly />
                <br />
                <input className='w-50 mb-2' type="text" name="address" id="" placeholder='Enter your address' required />
                <br />
                <input className='w-50 mb-2' type="text" name="phone" id="" placeholder='Your phone number' required />
                <br />
                <input type="submit" value="Place Order" />

            </form>
        </div>
    );
};

export default Checkout;