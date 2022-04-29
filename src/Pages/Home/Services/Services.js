import React from 'react';
import useExperts from '../../../hooks/useExperts';
import Service from '../Service/Service';

const Services = () => {
    const [experts, setExperts] = useExperts();

    return (
        <div>
            <div className="row g-lg-5 ms-lg-5 me-lg-5 m-2">
                <h1 className='text-primary text-center'>Our Services</h1>
                {
                    experts.map(expert => <Service key={expert._id} expert={expert}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;