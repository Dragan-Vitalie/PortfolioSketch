import { useEffect } from 'react';

const useActiveSection = (setActiveSection) => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    let observer;

    const createObserver = () => {
      const options = {
        root: null,
        rootMargin: window.innerWidth < 768 ? '0px' : '0px', 
        threshold: window.innerWidth < 768 ? 0.1 : 0.3 // Use 10% on small screens, 30% on larger screens
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, options);

      sections.forEach(section => observer.observe(section));
    };

    createObserver();

    const handleResize = () => {
      if (observer) {
        sections.forEach(section => observer.unobserve(section));
      }
      createObserver();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      sections.forEach(section => observer.unobserve(section));
    };
  }, [setActiveSection]);
};

export default useActiveSection;