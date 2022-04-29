import React from 'react';
import useExperts from '../../../hooks/useExperts';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useExperts();
    return (
        <div className="row g-lg-5 ms-lg-5 me-lg-5 m-2">
            <h1 className='text-primary text-center'>Our Experts</h1>
            {
                experts.map(expert => <Expert key={expert._id} expert={expert}></Expert>)
            }
        </div>
    );
};

export default Experts;