import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(url);
                if (!resp.ok) {
                    setError(`Error Occured ${resp.code}`)
                }
                else {

                    const responseData = await resp.json()
                    console.log(responseData);
                    setData(responseData);
                }
                setLoading(false);
            } catch (e) {
                setLoading(false)
                setError(`Error occured ${e.code}`)
            }


        }
        fetchData();

    }, [url])
    return { isLoading, data, error }
}
export default useFetch

