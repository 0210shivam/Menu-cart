const GetDomain = async (domain_name) => {
    try {
        const host = "https://testapi.arbsindia.com";

        const response = await fetch(`${host}/public/api/search-connect-domain`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ domain_name })
        });

        const json_data = await response.json();
        return json_data;
    } catch (error) {
        return console.log(error);
    }
};

export default GetDomain;
