import { useEffect, useState } from "react"

const useFakeData = () => {

const [services, setServices] = useState([])

useEffect(()=>{
    fetch('/fakeData.json')
    .then(res => res.json())
    .then(data => setServices(data))
}, [])

return {services};

}

export default useFakeData;