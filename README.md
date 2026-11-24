# MARIYA TRAVELS – PREMIUM WEBSITE

A luxury, Awwwards-style editorial travel website developed with React.js, Vite, Tailwind CSS, Framer Motion, and Lucide React.

## 🌟 Brand Highlights & Color Palette
- **Warm Ivory / Off-White**: `#FBF9F5`, `#F5F0E6`
- **Deep Forest Green**: `#091E17`, `#0D271F`, `#143A2E`
- **Rich Charcoal**: `#0A0C0C`, `#111414`, `#171B1B`
- **Subtle Champagne Gold**: `#C9A86A`, `#D8BA7A`, `#AF8E4D`
- **Typography**: Cinzel, Playfair Display & Plus Jakarta Sans

---

## 🚗 Fleet & Exact Tariff Matrix (Preserved 100%)

| Vehicle | Capacity | 1 Day Rent | Per KM | Hills Charge | Above Limit Rate |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **21 Seat AC Coach** | 21 Seats | ₹4,500 | ₹25/km | ₹2,500 | Above 400 KM: ₹35/km |
| **21 Seat Non-AC Coach** | 21 Seats | ₹3,800 | ₹18/km | ₹2,500 | Above 400 KM: ₹28/km |
| **18 Seat Traveller** | 18 Seats | ₹3,900 | ₹19/km | ₹2,000 | Above 400 KM: ₹30/km |
| **14 Seat Traveller** | 14 Seats | ₹2,800 | ₹18/km | ₹2,000 | Above 400 KM: ₹24/km |
| **Innova** | 7 Seats | ₹2,300 | ₹13/km | ₹1,500 | Above 300 KM: ₹18/km |
| **Innova Crysta** | 7 Seats | ₹2,700 | ₹17/km | ₹1,500 | Above 300 KM: ₹23/km |
| **Sedan** | 4 Seats | ₹1,700 | ₹12/km | ₹1,000 | Above 300 KM: ₹14/km |

---

## ⚙️ Configuration & Asset Replacement

### 1. Replacing Vehicle Photos with Real Photos
When the client provides the actual photos of their vehicles, update the `image` path in `src/data/vehicles.js`:
```javascript
// src/data/vehicles.js
{
  id: 'coach-21-ac',
  name: '21 Seat AC Luxury Coach',
  image: '/images/fleet/21-seat-ac.jpg', // Place your photo in public/images/fleet/
  ...
}
```

### 2. Configuring Official WhatsApp Number
In `src/components/BookingForm.jsx`, update `CLIENT_WHATSAPP_NUMBER`:
```javascript
// src/components/BookingForm.jsx
export const CLIENT_WHATSAPP_NUMBER = '919842100000'; // Country code + 10 digit number
```

---

## 🚀 Running the Project

```bash
# Navigate to project
cd mariya

# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```
