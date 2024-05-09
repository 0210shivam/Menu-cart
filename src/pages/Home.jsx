import '../App.css';
import React, { useEffect, useState } from 'react';
import GetPublicCategories from '../api/GetPublicCategories';
// import '../assets/css/index.css';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const Home = () => {
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getCategories = async () => {
			const response = await GetPublicCategories();
			console.log("Category", response.data);
			setCategories(response.data.category);
		};
		getCategories();
	}, []);

	// Function to check if the description contains a <p> tag
	const hasPTag = (description) => {
		const capitalizedDescription = description.charAt(0).toUpperCase() + description.slice(1);
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
			const categoryProducts = categories.find(category => category.id === categoryId).product_details;
			console.log("Products", categoryProducts);
			setProducts(categoryProducts);
		}
	};

	return (
		<>
			<Header />
			<Banner />
			{/* {
				categories?.map((category) => (
					<div className='container' key={category.id}>
						<div className="accordion" >
							<div className="accordion-item">
								<h2 className="accordion-header" id={`heading${category.id}`}>
									<button
										className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"
										onClick={() => handleCategorySelect(category.id)}
									>
										<div className="card updated-product-card">
											<div className="row g-0">
												<div className="col-md-10">
													<div className="card-body">
														<h5 className="card-title updated-card-title">{category.name}</h5>
													</div>
												</div>
												<div className="col-md-2">
													
												</div>
											</div>
										</div>
									</button>
								</h2>
								<div

									id={`collapse${category.id}`}
									className={`accordion-collapse collapse ${selectedCategory === category.id ? 'show' : ''}`}
									aria-labelledby={`heading${category.id}`}
								>
									<div className="accordion-body">

										{selectedCategory === category.id && (
											products.map(product => (
												<div key={product.id}>
													<div className="card updated-sub-product-card">
														<div className="row g-0">
															<div className="col-md-1">
																<img
																	style={{ objectFit: "contain" }}
																	src={product.product_images[0].image}
																	className="img-fluid updated-sub-product-img"
																	alt="..."
																/>
															</div>
															<div className="col-md-9">
																<div className="card-body">
																	<h5 className="card-title updated-product-heading py-0">
																		{product.name}
																	</h5>
																	<p className="card-text updated-product-sub-title mt-0">
																		Our classic pizza sauce topped with onions,capsicum and
																		tomatoes made with a blend of cheese
																	</p>
																</div>
															</div>
															<div className="col-md-2">
																<div className="quantity-selector">
																	<h5 style={{ color: "#FF4D2A" }} className="card-title updated-product-heading">
																		RS. {product.mrp}
																	</h5>
																</div>
															</div>
														</div>
													</div>
													<hr />
												</div>
											))
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				))
			} */}

			{/* <div>
				{categories.map(category => (
					<div style={{ marginTop: '15px' }} className='container' key={category.id}>
						<div style={{ textAlign: 'center' }}>
							<h2>{category.name}</h2>
						</div>
						{category.product_details.map(product => (
							<div key={product.id} style={{ display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'space-between' }}>
								<div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
									<div style={{ aspectRatio: '1/1' }}>
										<img style={{ width: '100px' }} src={product.product_images[0].image} alt="..." />
									</div>
									<div>
										<h6 key={product.id}>{product.name}</h6>
										{hasPTag(product.description) ? (
											<div dangerouslySetInnerHTML={{ __html: product.description }} />
										) : (
											<p>{extractText(product.description)}</p>
										)}
									</div>
								</div>
								<div>
									RS. {product.mrp}
								</div>
								
							</div>
						))}
					</div>
				))}
			</div> */}

			<div className="container">
				{categories.map(category => (
					<div key={category.id}>
						<div className='mt-3'>
							<div className="text-center">
								<h2 className=''>{category?.name}</h2>
							</div>
							{category?.product_details.map(product => (
								<div key={product.id} className="row mt-3">
									<div className="col-md-3 col-3" >
										<img className="img-thumbnail rounded-circle"
											src={`${product?.product_images[0]?.image}?tr=w-140,h-140`}
											alt="..." />
									</div>
									<div className="col-md-6 col-6 align-content-center">
										<h5 className='mb-3 product-title'>{product.name.charAt(0).toUpperCase() + product.name.slice(1)}</h5>

										{hasPTag(product?.description) ? (
											<i dangerouslySetInnerHTML={{ __html: product?.description }} />
											// <i className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Ullam provident quo optio quibusdam Lorem, ipsum dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit.Atque, nulla beatae.Nostrum ea ut quaerat incidunt accusantium?Dolore consectetur quasi eligendi perferendis.Omnisquibusdam Lorem, ipsum dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit.Atque, nulla beatae.Nostrum ea ut quaerat incidunt accusantium?Dolore consectetur quasi eligendi perferendis.Omnis. </i>
										) : (
											<p>{extractText(product?.description)}</p>
										)}
									</div>
									<div className="col-md-3 col-3 align-content-md-center">
										<h3 className='mrp'> &#8377; {product?.mrp}</h3>
									</div>
								</div>
							))}
						</div>
						<hr />
					</div>
				))}
			</div>
			<Footer />
		</>
	);
};

export default Home;
