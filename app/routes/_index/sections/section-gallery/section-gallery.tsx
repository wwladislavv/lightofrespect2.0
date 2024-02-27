import { useState } from 'react';
import type { LinksFunction } from "@remix-run/node";
import classNames from "classnames";
import { useTranslation } from 'react-i18next';

import ArrowRightIcon from '~/images/icons/right-arrow.svg';

import GalleryItem from "./gallery-item";

import styles from './styles.css';

export let handle = { i18n: "section-gallery" };

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styles },
];

const galleryPhotos = [
    'report-1.png',
    [
        'report-2.png',
        'report-3.png',
        'report-4.png',
    ],
    'report-5.jpeg',
    'report-6.png',
    'report-7.jpeg',
    'report-8.jpeg',
    'report-9.jpeg',
    'report-10.jpeg',
    'report-11.jpeg',
    'report-12.jpeg',
    'report-13.jpeg',
    'report-14.jpeg',
    'report-15.jpeg',
    'report-16.jpeg',
    'report-17.jpeg',
    'report-18.jpeg',
    'report-19.jpeg',
    'report-20.jpeg',
    'report-21.jpeg',
    'report-22.jpeg',
    'report-23.jpeg',
    'report-24.jpeg',
    'report-25.jpeg',
    'report-26.jpeg',
    'report-27.jpeg',
    'report-28.jpeg',
    'report-29.jpeg',
    'report-30.jpeg',
    'report-31.jpeg',
    'report-32.jpeg',
    'report-33.jpeg',
    'report-34.jpeg',
    'report-35.jpeg',
    'report-36.jpeg',
    'report-37.jpeg',
];

const SectionGallery = () => {
    const { t } = useTranslation('section-gallery');

    const [currentSlide, setCurrentSlide] = useState<number>(1);
    const handleNextSlide = () => {
        if (currentSlide === galleryPhotos.length) {
            return;
        }
        setCurrentSlide(currentSlide + 1);
    };
    const handlePrevSlide = () => {
        if (currentSlide === 1) {
            return;
        }
        setCurrentSlide(currentSlide - 1);
    };

    return (
        <section className="section-gallery">
            <div className="container">
                <div className="gallery-left d-flex flex-column justify-content-between">
                    <h4 className="title">{t('title')}</h4>
                    <div className="gallery-controls">
                        <div className="gallery-pagination d-flex justify-content-between align-items-center">
                            <button
                                className={classNames('gallery-pagination__trigger gallery-pagination__trigger--prev', {
                                    disabled: currentSlide === 1,
                                })}
                                onClick={handlePrevSlide}
                            >
                                <img
                                    src={ArrowRightIcon}
                                    alt="Previous slide"
                                />
                            </button>
                            <div className="gallery-pagination__info d-flex align-items-center">
    							<span
                                    className="gallery-pagination__info-current"
                                >
                                    {currentSlide}
                                </span>
                                <div className="gallery-pagination__info-divider"></div>
                                <span
                                    className="gallery-pagination__info-total"
                                >
                                    {galleryPhotos.length}
                                </span>
                            </div>
                            <button
                                className={classNames('gallery-pagination__trigger gallery-pagination__trigger--next', {
                                    disabled: currentSlide === galleryPhotos.length,
                                })}
                                onClick={handleNextSlide}
                            >
                                <img
                                    src={ArrowRightIcon}
                                    alt="Next slide"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gallery-content-container">
                {galleryPhotos.map((galleryItem, index) => {
                    return (
                        <div
                            key={index}
                            className={classNames('gallery-content', {
                                active: currentSlide === index + 1,
                            })}
                        >
                            <GalleryItem
                                data={galleryItem}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default SectionGallery;
