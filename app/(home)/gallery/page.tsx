"use client";
import React from 'react';
import {ImageGallery} from 'react-image-grid-gallery';

const GalleryComponent = () => {
    
    const imagesArray = Array.from({length: 22}, (_, i) => ({
        id: `unique_id${i + 1}`,
        alt: `Image ${i + 1}'s alt text`,
        caption: `Image ${i + 1}'s description`,
        src: `/assets/img/gallery/img-${i + 1}.jpeg`,
        thumbSrc: `/assets/img/gallery/img-${i + 1}.jpeg`,
    }));

    return (
        <div className="flex mt-8" suppressHydrationWarning>
            <div className="w-full">
                <div className="flex justify-center flex-col items-center">
                    <h2 className="text-3xl font-extrabold text-yellow-800">Gallery</h2>
                    <div className="w-16 h-1 mx-auto bg-yellow-800 mb-6 rounded"></div>
                    <p className="text-gray-600 mb-8">
                        See our community activities
                    </p>
                </div>

                {/* Image Gallery Component */}
                <div className="px-4 motion-blur-in">
                    <ImageGallery
                        customStyles={{
                            imageStyle: {
                                borderRadius: "3%",
                            }
                        }}
                        imagesInfoArray={imagesArray}
                        gapSize={10}
                    />
                </div>
            </div>
        </div>
    );
};

export default GalleryComponent;