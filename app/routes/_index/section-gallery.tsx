import React from 'react';

import ArrowRightIcon from '~/images/icons/right-arrow.svg';

type Props = any;

const SectionGallery = (props: Props) => {
    // var galleryPhotos = [
    //     './content/photos/report-1.png',
    //     [
    //         './content/photos/report-2.png',
    //         './content/photos/report-3.png',
    //         './content/photos/report-4.png',
    //     ],
    //     './content/photos/report-5.jpeg',
    //     './content/photos/report-6.png',
    //     './content/photos/report-7.jpeg',
    //     './content/photos/report-8.jpeg',
    //     './content/photos/report-9.jpeg',
    //     './content/photos/report-10.jpeg',
    //     './content/photos/report-11.jpeg',
    //     './content/photos/report-12.jpeg',
    //     './content/photos/report-13.jpeg',
    //     './content/photos/report-14.jpeg',
    //     './content/photos/report-15.jpeg',
    //     './content/photos/report-16.jpeg',
    //     './content/photos/report-17.jpeg',
    //     './content/photos/report-18.jpeg',
    //     './content/photos/report-19.jpeg',
    //     './content/photos/report-20.jpeg',
    //     './content/photos/report-21.jpeg',
    //     './content/photos/report-22.jpeg',
    //     './content/photos/report-23.jpeg',
    //     './content/photos/report-24.jpeg',
    //     './content/photos/report-25.jpeg',
    //     './content/photos/report-26.jpeg',
    //     './content/photos/report-27.jpeg',
    //     './content/photos/report-28.jpeg',
    //     './content/photos/report-29.jpeg',
    //     './content/photos/report-30.jpeg',
    //     './content/photos/report-31.jpeg',
    //     './content/photos/report-32.jpeg',
    //     './content/photos/report-33.jpeg',
    //     './content/photos/report-34.jpeg',
    //     './content/photos/report-35.jpeg',
    //     './content/photos/report-36.jpeg',
    //     './content/photos/report-37.jpeg',
    // ];
    //
    // // pagination info
    // var galleryInfoCurrentEl = document.getElementById('gallery-pagination-info-current');
    // var galleryInfoTotalEl = document.getElementById('gallery-pagination-info-total');
    //
    // galleryInfoCurrentEl.innerText = '1'; // default
    // galleryInfoTotalEl.innerText = galleryPhotos.length;
    //
    // // pagination controls
    // var paginationControlPrev = document.querySelector('.gallery-pagination__trigger--prev');
    // var paginationControlNext = document.querySelector('.gallery-pagination__trigger--next');
    //
    // paginationControlNext.addEventListener('click', (event) => {
    //     event.preventDefault();
    //
    //     var activeContentEl = document.querySelector('.gallery-content.active');
    //     var activeContentIndex = +activeContentEl.getAttribute('data-content');
    //
    //     var nextActiveIndex = activeContentIndex + 1;
    //     var nextActiveContentEl = document.querySelector(`.gallery-content[data-content="${nextActiveIndex}"]`);
    //
    //     galleryInfoCurrentEl.innerText = nextActiveIndex;
    //
    //     if (nextActiveIndex === galleryPhotos.length) {
    //         paginationControlNext.classList.add('disabled');
    //     }
    //     if (activeContentIndex === 1) {
    //         paginationControlPrev.classList.remove('disabled');
    //     }
    //
    //     activeContentEl.classList.remove('active');
    //     nextActiveContentEl.classList.add('active');
    // });
    //
    // paginationControlPrev.addEventListener('click', (event) => {
    //     event.preventDefault();
    //
    //     var activeContentEl = document.querySelector('.gallery-content.active');
    //     var activeContentIndex = +activeContentEl.getAttribute('data-content');
    //
    //     var nextActiveIndex = activeContentIndex - 1;
    //     var nextActiveContentEl = document.querySelector(`.gallery-content[data-content="${nextActiveIndex}"]`);
    //
    //     galleryInfoCurrentEl.innerText = nextActiveIndex;
    //
    //     if (nextActiveIndex === 1) {
    //         paginationControlPrev.classList.add('disabled');
    //     }
    //     if (activeContentIndex === galleryPhotos.length) {
    //         paginationControlNext.classList.remove('disabled');
    //     }
    //
    //     activeContentEl.classList.remove('active');
    //     nextActiveContentEl.classList.add('active');
    // });
    //
    // // content initial
    // var galleryContentContainer = document.getElementById('gallery-content');
    //
    // galleryPhotos.forEach(
    //     (galleryItem, index) => {
    //         var innerDiv = document.createElement('div');
    //         innerDiv.classList.add('gallery-content');
    //         innerDiv.dataset.content = index + 1;
    //
    //         // initial logic
    //         if (index + 1 === 1) {
    //             innerDiv.classList.add('active');
    //         }
    //
    //         // multiple photos
    //         if (Array.isArray(galleryItem)) {
    //             galleryItem.forEach(
    //                 (gallerySubItem) => {
    //                     var photoSubEl = document.createElement('img');
    //                     photoSubEl.src = gallerySubItem;
    //                     innerDiv.appendChild(photoSubEl);
    //                 }
    //             );
    //         } else {
    //             // single photo
    //             var photoEl = document.createElement('img');
    //             photoEl.src = galleryItem;
    //             innerDiv.appendChild(photoEl);
    //         }
    //
    //         galleryContentContainer.appendChild(innerDiv);
    //     }
    // );
    return (
        <section className="section-gallery">
            <div className="container">
                <div className="gallery-left d-flex flex-column justify-content-between">
                    <h4 className="title">Фотозвіт</h4>
                    <div className="gallery-controls">
                        <div className="gallery-pagination d-flex justify-content-between align-items-center">
                            <a
                                className="gallery-pagination__trigger gallery-pagination__trigger--prev disabled"
                            >
                                <img
                                    src={ArrowRightIcon}
                                    alt="Previous slide"
                                />
                            </a>
                            <div className="gallery-pagination__info d-flex align-items-center">
    							<span
                                    id="gallery-pagination-info-current"
                                    className="gallery-pagination__info-current"
                                ></span>
                                <div className="gallery-pagination__info-divider"></div>
                                <span
                                    id="gallery-pagination-info-total"
                                    className="gallery-pagination__info-total"
                                ></span>
                            </div>
                            <a
                                className="gallery-pagination__trigger gallery-pagination__trigger--next"
                            >
                                <img
                                    src={ArrowRightIcon}
                                    alt="Next slide"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="gallery-content" className="gallery-content-container"></div>
        </section>
    );
};

export default SectionGallery;
