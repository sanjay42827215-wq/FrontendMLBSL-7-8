import { useEffect, useState } from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider.jsx';

function Hero() {
    const [isCvOpen, setIsCvOpen] = useState(false);

    useEffect(() => {
        if (!isCvOpen) return;

        const handleEscape = (event) => {
            if (event.key === 'Escape') setIsCvOpen(false);
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleEscape);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isCvOpen]);

    return (
        <div className='flex min-h-screen flex-col items-center justify-center gap-6 px-4 sm:flex-row sm:gap-16'>

            {/* left image slider */}
            <div className='w-full max-w-xl sm:flex-1'>
                <ImageSlider />
            </div>

            {/* right contents */}
            <div className='flex w-full max-w-2xl flex-col gap-8 sm:flex-1'>
                {/* headings and paragraphs  */}
                <div className='flex flex-col gap-4 justify-center text-center'>
                    <h1 className='text-blue-500 text-3xl font-bold'>MLBSL</h1>
                    <h2 className='text-xl text-green-400 font-semibold'>Frontend Web Developer and Trainer</h2>
                    <p className='text-justify leading-10 sm:leading-8 text-[16px] px-4'>I am a passionate frontend web developer and trainer with experience in creating responsive and user-friendly web applications.I design and develop websites that are visually appealing and easy to navigate, using the latest web technologies and best practices. I am committed to delivering high-quality work and providing excellent customer service.
                    </p>
                </div>


                {/* buttons  */}
                <div className='flex gap-4 text-center justify-center'>

                    <button
                        type="button"
                        onClick={() => setIsCvOpen(true)}
                        className='bg-blue-500 text-white font-semibold px-4 py-3 rounded'
                    >
                        View CV
                    </button>


                    <Link to="/projects">
                        <button className='border border-gray-300 px-4 py-3'>View Projects</button>
                    </Link>

                </div>
                
                {/* social icons  */}
                <div className='flex gap-7 justify-center text-2xl text-gray-700'>
                    <a href="https://www.facebook.com/" target='_blank'><FaFacebook /></a>
                    <a href="https://www.github.com/" target='_blank'><FaGithub /></a>
                    <a href="https://www.linkedin.com/" target='_blank'><FaLinkedin /></a>
                    <a href="https://www.twitter.com/" target='_blank'><FaTwitter /></a>
                </div>
            </div>

            {isCvOpen && (
                <div
                    className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-6'
                    role='presentation'
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) setIsCvOpen(false);
                    }}
                >
                    <div
                        role='dialog'
                        aria-modal='true'
                        aria-labelledby='cv-popup-title'
                        className='flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-lg bg-white shadow-2xl'
                    >
                        <div className='flex items-center justify-between border-b border-gray-200 px-4 py-3'>
                            <h2 id='cv-popup-title' className='font-semibold text-gray-800'>My CV</h2>
                            <div className='flex items-center gap-3'>
                                <a
                                    href='/cb.pdf'
                                    download
                                    className='rounded bg-blue-500 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-600'
                                >
                                    Download
                                </a>
                                <button
                                    type='button'
                                    onClick={() => setIsCvOpen(false)}
                                    className='flex h-9 w-9 items-center justify-center rounded-full text-2xl text-gray-600 hover:bg-gray-100'
                                    aria-label='Close CV popup'
                                >
                                    &times;
                                </button>
                            </div>
                        </div>
                        <iframe
                            src='/cb.pdf'
                            title='CV PDF'
                            className='h-full w-full flex-1'
                        />
                    </div>
                </div>
            )}
        </div >
    )
}

export default Hero