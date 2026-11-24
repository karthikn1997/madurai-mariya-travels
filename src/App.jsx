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

export default function App() {
  const [selectedVehicleForDetail, setSelectedVehicleForDetail] = useState(null);
  const [selectedPackageForDetail, setSelectedPackageForDetail] = useState(null);
  const [prefilledVehicle, setPrefilledVehicle]   = useState('21 Seat AC Luxury Coach');
  const [prefilledEstimate, setPrefilledEstimate] = useState(null);
  const [showTourPopup, setShowTourPopup]         = useState(false);
  const [popupDismissed, setPopupDismissed]       = useState(false);

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

  /* ── Scroll to booking form with optional prefilled values ── */
  const handleScrollToBooking = (vehicleName = null, estimateAmount = null, destinationName = null) => {
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
    setSelectedPackageForDetail(null);
    setTimeout(() => {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) pricingSection.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleScrollToPackages = (dest = null) => {
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
    setSelectedPackageForDetail(null);
    setTimeout(() => {
      const packagesSection = document.getElementById('packages');
      if (packagesSection) packagesSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleBackToFleet = () => {
    setSelectedVehicleForDetail(null);
    setTimeout(() => {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) pricingSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
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
          onSelectVehicle={(vehicle) => setSelectedVehicleForDetail(vehicle)}
          onSelectPackage={(pkg) => setSelectedPackageForDetail(pkg)}
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
          onSelectVehicle={(vehicle) => setSelectedVehicleForDetail(vehicle)}
        />

        {/* 5. TOUR PACKAGES */}
        <Packages
          onSelectPackage={(pkg) => setSelectedPackageForDetail(pkg)}
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
