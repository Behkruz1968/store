import React from 'react';
import backgroundImage from './assets/pipin.jpg'; // Ensure the path is correct

const VideoSection = () => {
    return (
        <section 
            className="relative h-screen bg-fixed bg-center bg-cover flex justify-center items-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            
            {/* Dark overlay to make text readable */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Increased overlay opacity */}

            {/* Content section */}
            <div className="relative z-10 text-center text-white p-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Приглашаем к сотрудничеству
                </h1>
                <p className="text-lg md:text-2xl mb-8">
                    Вот уже более 15 лет международный холдинг ArzonLab предлагает максимально возможный перечень лабораторных исследований и соответствие мировым стандартам
                </p>

                {/* Embedded YouTube video */}
                <div className="flex justify-center">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/X3Y6imdMPZY"  // Updated video embed link
                        title="ArzonLab Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-lg"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
