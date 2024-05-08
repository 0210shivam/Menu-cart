import React from 'react';
import { useBusiness } from '../contexts/BusinessDetails';

const Banner = () => {
    const { banners } = useBusiness();

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 px-0">
                        <div
                            id="carouselExampleSlidesOnly"
                            className="carousel slide"
                            data-bs-ride="carousel"
                            data-bs-interval="2000"
                            data-bs-touch="false"
                        >
                            <div className="carousel-inner">
                                {banners.map((banner, index) => (
                                    <div
                                        key={index}
                                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                    >
                                        <img
                                            src={`${banner.image}?tr=w-800,h-400`}
                                            className="d-block w-100 updated-banner"
                                            alt="..."
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
