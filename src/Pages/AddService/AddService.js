import React from 'react';

const AddService = () => {

    const handleAddService = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const img = event.target.img.value;




        const service = { description, name, price, img }
        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <h1>This is my add services component</h1>
            <form onSubmit={handleAddService} className='d-flex flex-column w-50 mx-auto'>
                <input className='mb-2' placeholder='Photo URL' type="" name="img" id="" />
                <input className='mb-2' placeholder='Name' type="text" name="name" id="" />
                <textarea className='mb-2' placeholder='Description' name="description" id="" cols="90" rows="2"></textarea>
                <input className='mb-2' placeholder='Price' type="number" name="price" id="" />
                <input className='mb-2' type="submit" value="Add Service" />

            </form>
        </div>
    );
};

export default AddService;