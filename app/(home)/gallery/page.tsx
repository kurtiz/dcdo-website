"use client";
import React from 'react';
import {ImageGallery} from 'react-image-grid-gallery';

const GalleryComponent = () => {
    // Create an array of image objects
    const imagesArray = Array.from({length: 22}, (_, i) => ({
        id: `unique_id${i + 1}`, // Unique ID for each image
        alt: `Image ${i + 1}'s alt text`, // Alt text for accessibility
        caption: `Image ${i + 1}'s description`, // Optional caption
        src: `/assets/img/gallery/img-${i + 1}.jpeg`, // Image source
        thumbSrc: `/assets/img/gallery/img-${i + 1}.jpeg`, // Thumbnail source (optional)
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
                <div className="px-4">
                    <ImageGallery
                        customStyles={{
                            imageStyle: {
                                borderRadius: "3%",
                            }
                        }}
                        imagesInfoArray={imagesArray} // Array of image objects
                        gapSize={10} // Gap between images in pixels
                    />
                </div>
            </div>
        </div>
    );
};

export default GalleryComponent;