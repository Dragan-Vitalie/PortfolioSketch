import { useEffect } from 'react';

const useActiveSection = (setActiveSection) => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // make scroll when 50% is visibble
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, [setActiveSection]);
};

export default useActiveSection;