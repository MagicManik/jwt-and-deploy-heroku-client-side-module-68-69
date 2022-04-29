import { useEffect, useState } from "react"

const useExperts = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])

    return [experts, setExperts];
}

export default useExperts;