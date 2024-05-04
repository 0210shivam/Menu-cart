const GetPublicBusinessDetails = async () => {
    try {
        const host = "https://testapi.arbsindia.com";
        const business_id = 267;

        const response = await fetch(`${host}/public/api/get-public-business-details-list`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ business_id })
        });

        const json_data = await response.json();
        return json_data;
    } catch (error) {
        return console.log(error);
    }
};

export default GetPublicBusinessDetails;
