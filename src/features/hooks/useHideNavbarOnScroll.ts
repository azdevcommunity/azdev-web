import { useEffect } from 'react';

const useHideNavbarOnScroll = () => {
    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        let scrollDelta = 0; // This will track the cumulative scroll amount
        const threshold = 70; // Set a threshold for scroll sensitivity

        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            scrollDelta += Math.abs(currentScrollY - lastScrollY);

            if (scrollDelta >= threshold) {
                const navbar = document.querySelector('.navbar');
                if (navbar) {
                    if (lastScrollY < currentScrollY) {
                        navbar.classList.add('navbar-hidden');
                    } else {
                        navbar.classList.remove('navbar-hidden');
                    }
                }
                scrollDelta = 0; // Reset the scrollDelta after hiding/showing the navbar
            }

            lastScrollY = currentScrollY; // Update lastScrollY to the new position
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
};

export default useHideNavbarOnScroll;