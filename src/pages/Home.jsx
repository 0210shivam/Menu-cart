import '../App.css';
import React, { useEffect, useState } from 'react';
import GetPublicCategories from '../api/GetPublicCategories';
// import '../assets/css/index.css';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import menuView from '../assets/img/menu-view.png';
import Loader from '../components/Loader';

const Home = () => {
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [products, setProducts] = useState([]);
	const [isAPILoading, setIsAPILoading] = useState(true);

	useEffect(() => {
		const getCategories = async () => {
			try {
				const response = await GetPublicCategories();
				setIsAPILoading(false);
				console.log("Category", response?.data);
				setCategories(response?.data?.category);
			} catch (error) {
				console.log(error);
			}
		};
		getCategories();
	}, []);

	// Function to check if the description contains a <p> tag
	const hasPTag = (description) => {
		const capitalizedDescription = description?.charAt(0)?.toUpperCase() + description?.slice(1);
		return /<[a-zA-Z][^>]*>/.test(capitalizedDescription);
	};

	// Function to extract text from HTML string
	const extractText = (htmlString) => {
		const doc = new DOMParser().parseFromString(htmlString, 'text/html');
		const textContent = doc.body.textContent || "";
		return textContent.charAt(0).toUpperCase() + textContent.slice(1);
	};


	const handleCategorySelect = (categoryId) => {
		if (selectedCategory === categoryId) {
			setSelectedCategory(null); // Close if already open
		} else {
			setSelectedCategory(categoryId);
			const categoryProducts = categories?.find(category => category?.id === categoryId)?.product_details;
			console.log("Products", categoryProducts);
			setProducts(categoryProducts);
		}
	};

	const scrollToCategory = (categoryId) => {
		const categoryTitle = document.getElementById(`category-${categoryId}`);
		if (categoryTitle) {
			categoryTitle?.scrollIntoView({ behavior: 'smooth' });
		}
	};

	// Function to close the offcanvas modal
	const closeOffcanvasModal = () => {
		const offcanvasElement = document.getElementById('offcanvasBottom');
		const offcanvasModal = bootstrap.Offcanvas.getInstance(offcanvasElement);
		if (offcanvasModal) {
			offcanvasModal.hide();
		}
	};

	const scrollToCategoryModal = (categoryId) => {
		const categoryTitle = document.getElementById(`category-${categoryId}`);
		if (categoryTitle) {
			categoryTitle.scrollIntoView({ behavior: 'smooth' });
			closeOffcanvasModal();
		}
	};

	return (
		!isAPILoading ?
			<>
				<Header />
				<Banner />

				<div className="container mt-4">
					<div id="carouselExampleDark" className="carousel carousel-dark slide d-none d-md-block" data-bs-ride="carousel" >
						<div className="carousel-inner" style={{ display: 'flex', gap: '15px', padding: '5px', justifyContent: 'center' }}>
							{
								categories.length > 0 && categories?.map((category) => (
									<div onClick={() => scrollToCategory(category?.id)} style={{ cursor: 'pointer' }} key={category?.id} >
										<img className="img-thumbnail rounded-circle"
											style={{ width: '80px' }}
											src={`${category?.image}?tr=w-20,h-20`}
											alt="..." />
										<p className='text-center mt-3'>
											{category?.name}
										</p>
									</div>
								))
							}
						</div>
					</div>
					{categories.length > 0 && categories.map(category => (
						<div key={category.id}>
							<div className='mt-3'>
								<div className="text-center">
									<h2 id={`category-${category?.id}`} >{category?.name}</h2>
								</div>
								{category?.product_details.length > 0 && category.product_details.map(product => (
									<div key={product.id}>
										<div className="row mt-3">
											<div className="col-md-3 col-3 text-center" >
												{
													product?.product_images.length > 0 ?
														<img className="img-thumbnail rounded"
															src={`${product.product_images[0]?.image}?tr=w-140,h-140`}
															alt="..." />
														: <p>No</p>
												}
											</div>
											<div className="col-md-6 col-6 align-content-center">
												<h5 className='mb-3 product-title'>{product?.name.charAt(0).toUpperCase() + product?.name.slice(1)}</h5>
												{/* Description */}
												{
													product?.description !== null ?
														hasPTag(product?.description) ? (
															<i className='desc d-md-block' dangerouslySetInnerHTML={{ __html: product?.description }} />
															// <i className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Ullam provident quo optio quibusdam Lorem, ipsum dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. </i>
														) : (
															<p>{extractText(product?.description)}</p>
														) : null
												}
											</div>
											{/* TODO: Check the mrp and selling prc */}
											<div className="col-md-3 col-3 align-content-md-center">
												<h3 className='mrp'> &#8377; {product?.selling_price}</h3>
											</div>
										</div>
									</div>
								))}
							</div>
							<hr />
						</div>
					))}
					{/* Menu image --  */}
					<div className='d-md-none' style={{ position: 'fixed', bottom: '5%', right: '35px', transform: 'translateY(-50%)', zIndex: '10', cursor: 'pointer' }}>
						<img
							data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"
							style={{
								width: '50px',
								height: '50px',
								borderRadius: '10px',
								boxShadow: 'rgba(0, 0, 0, 0.3) 0px 5px 10px 0px, rgba(93, 141, 213, 0.2) 0px 2px 1px 0px',
								transition: 'transform 0.25s ease-in-out 0s'
							}}
							src={menuView} alt="Menu"
						/>
					</div>
					<div className="offcanvas offcanvas-bottom rounded-top h-75" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
						<div class="offcanvas-header">
							<h5 class="offcanvas-title" id="offcanvasBottomLabel">Select Category</h5>
							<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
						</div>
						<div className="offcanvas-body small">
							{
								categories?.map((category) => (
									<div onClick={() => scrollToCategoryModal(category?.id)} style={{ cursor: 'pointer' }} key={category?.id} >
										<h6 className='mt-4'>
											{category?.name}
										</h6>
									</div>
								))
							}
						</div>
					</div>
				</div>
				<Footer />
			</>
			: <Loader />
	);
};

export default Home;
