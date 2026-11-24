import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import About from './components/About';
import Pricing from './components/Pricing';
import Packages from './components/Packages';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import VehicleDetailPage from './components/VehicleDetailPage';
import PackageDetailPage from './components/PackageDetailPage';
import TourContactModal from './components/TourContactModal';
import { VEHICLES } from './data/vehicles';
import { TOUR_PACKAGES } from './data/packages';

export default function App() {
  const [selectedVehicleForDetail, setSelectedVehicleForDetail] = useState(null);
  const [selectedPackageForDetail, setSelectedPackageForDetail] = useState(null);
  const [prefilledVehicle, setPrefilledVehicle]   = useState('21 Seat AC Luxury Coach');
  const [prefilledEstimate, setPrefilledEstimate] = useState(null);
  const [showTourPopup, setShowTourPopup]         = useState(false);
  const [popupDismissed, setPopupDismissed]       = useState(false);

  // Restore detail view if URL has #vehicle-... or #package-... on initial load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#vehicle-')) {
      const vId = hash.replace('#vehicle-', '');
      const found = VEHICLES.find(v => String(v.id) === String(vId));
      if (found) setSelectedVehicleForDetail(found);
    } else if (hash.startsWith('#package-')) {
      const pId = hash.replace('#package-', '');
      const found = TOUR_PACKAGES.find(p => String(p.id) === String(pId));
      if (found) setSelectedPackageForDetail(found);
    }
  }, []);

  // Mobile Back Button & Gesture Support: sync with browser popstate
  useEffect(() => {
    const handlePopState = (event) => {
      const state = event.state;
      const hash = window.location.hash;

      if (state?.view === 'vehicle-detail' || hash.startsWith('#vehicle-')) {
        const vId = state?.vehicleId || hash.replace('#vehicle-', '');
        const found = VEHICLES.find(v => String(v.id) === String(vId));
        setSelectedVehicleForDetail(found || null);
        setSelectedPackageForDetail(null);
      } else if (state?.view === 'package-detail' || hash.startsWith('#package-')) {
        const pId = state?.packageId || hash.replace('#package-', '');
        const found = TOUR_PACKAGES.find(p => String(p.id) === String(pId));
        setSelectedPackageForDetail(found || null);
        setSelectedVehicleForDetail(null);
      } else {
        // User backed out of the detail view to the main page
        const wasInVehicle = !!selectedVehicleForDetail;
        const wasInPackage = !!selectedPackageForDetail;

        setSelectedVehicleForDetail(null);
        setSelectedPackageForDetail(null);

        // Smoothly scroll back to the section they were browsing
        setTimeout(() => {
          if (wasInVehicle) {
            const pricingSection = document.getElementById('pricing');
            if (pricingSection) pricingSection.scrollIntoView({ behavior: 'smooth' });
          } else if (wasInPackage) {
            const packagesSection = document.getElementById('packages');
            if (packagesSection) packagesSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedVehicleForDetail, selectedPackageForDetail]);

  // Show enquiry popup ONLY ONCE when website is first opened (runs for 30s)
  useEffect(() => {
    const hasShown = sessionStorage.getItem('mariya_initial_popup_shown');
    if (hasShown) {
      setPopupDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      setShowTourPopup(true);
      sessionStorage.setItem('mariya_initial_popup_shown', 'true');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenVehicleDetail = (vehicle) => {
    setSelectedVehicleForDetail(vehicle);
    setSelectedPackageForDetail(null);
    window.history.pushState({ view: 'vehicle-detail', vehicleId: vehicle.id }, '', `#vehicle-${vehicle.id}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleOpenPackageDetail = (pkg) => {
    setSelectedPackageForDetail(pkg);
    setSelectedVehicleForDetail(null);
    window.history.pushState({ view: 'package-detail', packageId: pkg.id }, '', `#package-${pkg.id}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  /* ── Scroll to booking form with optional prefilled values ── */
  const handleScrollToBooking = (vehicleName = null, estimateAmount = null, destinationName = null) => {
    if (window.history.state?.view) {
      window.history.replaceState(null, '', '#contact');
    }
    setSelectedPackageForDetail(null);
    setSelectedVehicleForDetail(null);
    if (vehicleName)   setPrefilledVehicle(vehicleName);
    if (estimateAmount) setPrefilledEstimate(estimateAmount);

    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });

        if (destinationName) {
          setTimeout(() => {
            const destInput = document.querySelector('input[name="destination"]');
            if (destInput) {
              destInput.value = destinationName;
              destInput.dispatchEvent(new Event('input', { bubbles: true }));
            }
          }, 300);
        }
      }
    }, 50);
  };

  const handleScrollToPricing = () => {
    if (window.history.state?.view) {
      window.history.replaceState(null, '', '#pricing');
    }
    setSelectedPackageForDetail(null);
    setSelectedVehicleForDetail(null);
    setTimeout(() => {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) pricingSection.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleScrollToPackages = (dest = null) => {
    if (window.history.state?.view) {
      window.history.replaceState(null, '', '#packages');
    }
    setSelectedPackageForDetail(null);
    setSelectedVehicleForDetail(null);
    setTimeout(() => {
      if (dest?.packageId) {
        const pkgEl = document.getElementById(`pkg-${dest.packageId}`);
        if (pkgEl) {
          pkgEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }
      }
      const packagesSection = document.getElementById('packages');
      if (packagesSection) {
        packagesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  const handleSelectPlan = (planData) => {
    handleScrollToBooking(planData?.vehicleName, planData?.totalEstimate);
  };

  const handleBackToPackages = () => {
    if (window.history.state?.view === 'package-detail') {
      window.history.back();
    } else {
      setSelectedPackageForDetail(null);
      if (window.location.hash.startsWith('#package-')) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      setTimeout(() => {
        const packagesSection = document.getElementById('packages');
        if (packagesSection) packagesSection.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    }
  };

  const handleBackToFleet = () => {
    if (window.history.state?.view === 'vehicle-detail') {
      window.history.back();
    } else {
      setSelectedVehicleForDetail(null);
      if (window.location.hash.startsWith('#vehicle-')) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      setTimeout(() => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) pricingSection.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    }
  };

  /* ── Vehicle Detail Full Page ── */
  if (selectedVehicleForDetail) {
    return (
      <VehicleDetailPage
        vehicle={selectedVehicleForDetail}
        onBack={handleBackToFleet}
        onBookNow={(vehicleName) => handleScrollToBooking(vehicleName)}
      />
    );
  }

  /* ── Package Detail Full Page ── */
  if (selectedPackageForDetail) {
    return (
      <PackageDetailPage
        packageData={selectedPackageForDetail}
        onBack={handleBackToPackages}
        onBookVehicle={(vehicleName) => handleScrollToBooking(vehicleName, null, selectedPackageForDetail.name)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 font-sans selection:bg-[#F5B800] selection:text-black">
      {/* Sticky & Dynamic Navigation */}
      <Navbar onBookClick={() => handleScrollToBooking()} />

      <main>
        {/* 1. HOME */}
        <Hero
          onExploreFleet={handleScrollToPricing}
          onPlanJourney={() => handleScrollToBooking()}
          onSelectVehicle={handleOpenVehicleDetail}
          onSelectPackage={handleOpenPackageDetail}
          onBookVehicle={(vehicleName, destination) => handleScrollToBooking(vehicleName, null, destination)}
        />

        {/* 2. EXPLORE INDIA DESTINATIONS (KINGHILLS CAROUSEL) */}
        <Destinations
          onSelectDestination={handleScrollToPackages}
          onViewAll={() => handleScrollToPackages()}
        />

        {/* 3. ABOUT */}
        <About />

        {/* 4. TARIFF & FLEET SHOWROOM */}
        <Pricing
          onSelectPlan={handleSelectPlan}
          onSelectVehicle={handleOpenVehicleDetail}
        />

        {/* 5. TOUR PACKAGES */}
        <Packages
          onSelectPackage={handleOpenPackageDetail}
          onEnquirePackage={(packageName) => handleScrollToBooking(null, null, packageName)}
        />

        {/* 6. WHY CHOOSE US (TRUST & SAFETY PILLARS) */}
        <WhyChooseUs onBookClick={() => handleScrollToBooking()} />

        {/* 7. GALLERY */}
        <Gallery />

        {/* 8. CONTACT & DIRECT BOOKING */}
        <BookingForm
          initialVehicle={prefilledVehicle}
          initialEstimate={prefilledEstimate}
        />
      </main>

      {/* Luxury Footer */}
      <Footer onSelectVehicleName={(vehicleName) => handleScrollToBooking(vehicleName)} />

      {/* 30-Second Auto Contact Enquiry Popup - Shows ONLY ONCE on site open */}
      <TourContactModal
        isOpen={showTourPopup}
        onClose={() => {
          setShowTourPopup(false);
          setPopupDismissed(true);
        }}
        packageName="Quick Reservation & Instant Itinerary Quote"
        durationSeconds={30}
      />
    </div>
  );
}
