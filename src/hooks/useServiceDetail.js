import { useEffect, useState } from "react";

const useServiceDetail = serviceId => {
    const [service, setService] = useState([]);
    // console.log(services.img)

    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId]);

    return [service, setService];
}

export default useServiceDetail;