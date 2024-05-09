import './App.css';
import Home from './pages/Home';
import { BusinessContextProvider } from './contexts/BusinessDetails';
import { useEffect, useState } from 'react';
import GetPublicBusinessDetails from './api/GetPublicBusinessDetails';
import GetDomain from './api/GetDomain';
import ScrollToTop from "react-scroll-to-top";
import Test from './pages/Test.jsx';
import Sample from './pages/Sample.jsx';


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
		const domainName = async () => {
			const domain = window.location.hostname;
			const res = await GetDomain(domain);
			console.log("Actual Domain", res);
		};

		domainName();
	}, []);

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
			{/* <Home /> */}
			{/* <Sample /> */}
			<Test />
			<ScrollToTop svgPath='M17.71,9.88l-4.3-4.29a2,2,0,0,0-2.82,0L6.29,9.88a1,1,0,0,0,0,1.41,1,1,0,0,0,1.42,0L11,8V19a1,1,0,0,0,2,0V8l3.29,3.29a1,1,0,1,0,1.42-1.41Z' viewBox='0 0 24 24' smooth />
		</BusinessContextProvider>
	);
}

export default App;
