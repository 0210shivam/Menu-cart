import './App.css';
import Home from './pages/Home';
import { BusinessContextProvider } from './contexts/BusinessDetails';
import { useEffect, useState } from 'react';
import GetPublicBusinessDetails from './api/GetPublicBusinessDetails';

function App() {
	const [banners, setBanners] = useState([]);
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [company_name, setCompany_name] = useState("");
	const [link_name, setLink_name] = useState("");
	const [businessLogo, setBusinessLogo] = useState("");

	useEffect(() => {
		const getBusiness = async () => {
			const response = await GetPublicBusinessDetails();
			setBanners(response.data.banners);
			setBusinessLogo(response.data.business[0].image);
			setAddress(response.data.business[0].address);
			setCity(response.data.business[0].city);
			setEmail(response.data.business[0].email);
			setPhone(response.data.business[0].phone);
			setLink_name(response.data.seo[0].link_name);
			setCompany_name(response.data.seo[0].meta_title);
			console.log("Business Data", response.data);
		};
		getBusiness();
	}, []);

	return (
		<BusinessContextProvider value={{ banners, businessLogo, company_name, link_name, address, city, phone, email }}>
			<Home />
		</BusinessContextProvider>
	);
}

export default App;
