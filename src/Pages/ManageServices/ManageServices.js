import React, { useState } from 'react';
import useExperts from '../../hooks/useExperts';

const ManageServices = () => {
    const [experts, setExperts] = useExperts([]);

    const handleDeleteService = id => {
        const procced = window.confirm('Delete Confirm?')
        if (procced) {
            fetch(`http://localhost:5000/service/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h1>Total Expert {experts.length}</h1>
            {
                experts.map(expert =>
                    <div className='d-flex' key={expert._id}>
                        <h4>Name: {expert.name}</h4>
                        <button onClick={() => handleDeleteService(expert._id)} className=' m-2'>Delte Item</button>
                    </div>)
            }
        </div>
    );
};

export default ManageServices;