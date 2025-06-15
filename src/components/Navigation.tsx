import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function Navigation() {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const navRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const isRTL = language === 'fa';

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fa' : 'en');
  };

  // Check if navigation is scrollable and update scroll indicators
  const checkScrollable = () => {
    if (navRef.current) {
      const container = navRef.current;
      const isScrollable = container.scrollWidth > container.clientWidth;
      setShowScrollIndicator(isScrollable);
      
      // Check if can scroll in either direction
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollWidth > container.clientWidth &&
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, []);

  // Update scroll indicators when scrolling
  const handleScroll = () => {
    checkScrollable();
  };

  // Scroll to active link on mobile
  useEffect(() => {
    if (navRef.current) {
      const activeLink = navRef.current.querySelector('.active-nav-link');
      if (activeLink) {
        // Get the position of the active link relative to the nav container
        const container = navRef.current;
        const linkRect = activeLink.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        // Calculate the scroll position to center the active link
        const scrollPosition = linkRect.left - containerRect.left - (containerRect.width / 2) + (linkRect.width / 2);
        
        // Scroll smoothly to the active link
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
        
        // Update scroll indicators after scrolling
        setTimeout(checkScrollable, 300);
      }
    }
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: t('nav.home'), icon: '🏠' },
    { path: '/guides', label: t('nav.guides'), icon: '📚' },
    { path: '/subscriptions', label: t('nav.subscriptions'), icon: '🔗' },
    { path: '/clients', label: t('nav.clients'), icon: '📱' },
    { path: '/about', label: t('nav.about'), icon: 'ℹ️' },
  ];

  // Add touch scroll hint for mobile
  const handleTouchStart = () => {
    if (showScrollIndicator) {
      setShowScrollIndicator(false);
    }
  };

  return (
    <div className="bg-card-bg rounded-lg overflow-hidden mb-6 shadow-lg">
      <div className="flex flex-wrap items-center relative">
        {/* Left fade effect */}
        {canScrollLeft && (
          <div className={`absolute top-0 bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-8 z-10 pointer-events-none ${isRTL ? 'nav-fade-right' : 'nav-fade-left'}`}></div>
        )}
        
        <div 
          ref={navRef}
          className="flex-1 flex overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onTouchStart={handleTouchStart}
          onScroll={handleScroll}
        >
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={`
                flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap
                ${location.pathname === item.path
                  ? 'text-primary-color border-b-2 border-primary-color active-nav-link'
                  : 'text-muted-text hover:text-light-text hover:bg-hover-bg'
                }
              `}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
        
        {/* Right fade effect */}
        {canScrollRight && (
          <div className={`absolute top-0 bottom-0 ${isRTL ? 'left-0' : 'right-0'} w-8 z-10 pointer-events-none ${isRTL ? 'nav-fade-left' : 'nav-fade-right'}`}></div>
        )}
        
        {showScrollIndicator && (
          <div className={`md:hidden absolute ${isRTL ? 'left-16' : 'right-16'} top-1/2 transform -translate-y-1/2 pointer-events-none z-20`}>
            <div className="scroll-indicator">
              <span className="text-primary-color">{isRTL ? '←' : '→'}</span>
            </div>
          </div>
        )}
        <div className="px-4 py-2 z-20">
          <button 
            onClick={toggleLanguage} 
            className="bg-primary-color hover:bg-primary-dark px-3 py-1 rounded-md text-sm font-medium text-white transition-colors"
          >
            {t('language.switch')}
          </button>
        </div>
      </div>
    </div>
  );
} 