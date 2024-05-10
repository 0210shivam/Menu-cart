import React from 'react';

const Sample = () => {
    // Dummy data for cards
    const cards = [
        { id: 1, text: 'Card 1' },
        { id: 2, text: 'Card 2' },
        { id: 3, text: 'Card 3' },
        { id: 4, text: 'Card 4' },
        { id: 5, text: 'Card 5' },
        { id: 6, text: 'Card 6' },
        { id: 7, text: 'Card 7' },
        { id: 8, text: 'Card 8' },
        { id: 9, text: 'Card 9' },
    ];

    // Function to chunk array into groups of 4
    const chunkArray = (array, size) => {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
    };

    // Chunk cards into groups of 4
    const chunkedCards = chunkArray(cards, 4);

    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div class="carousel-item active" style={{ padding: '20px' }}>Something 1</div>
                    <div class="carousel-item" style={{ padding: '20px' }}>Something 2</div>
                    <div class="carousel-item" style={{ padding: '20px' }}>Something 3</div>
                    <div class="carousel-item" style={{ padding: '20px' }}>Something 4</div>
                    <div class="carousel-item" style={{ padding: '20px' }}>Something 5</div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Sample;
