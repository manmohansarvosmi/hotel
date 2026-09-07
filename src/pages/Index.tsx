import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Star, Wifi, Car, UtensilsCrossed, Dumbbell, Waves, Plane, ShieldCheck, Shirt, ConciergeBell, Baby, Coffee, Briefcase, Users, Maximize, BedSingle, ChevronRight, ChevronLeft, Check, Image as ImageIcon, Compass, Heart, Crown, Landmark, ShoppingBag, Calendar, Award, Headphones, Send, Tag, MessageSquare, Search, User } from "lucide-react";
import logo from "@/assets/logo.png";
import hero1 from "@/assets/hero1.png";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero3.png";
import hero4 from "@/assets/hero4.png";
import hero5 from "@/assets/hero5.png";
import gwaliorfort from "@/assets/gwaliorfort.png";
import jaiVilas from "@/assets/jaivilaspalace.png";
import teliKaMandir from "@/assets/telimandir.png";
import gujariMahal from "@/assets/gujariMahal.png";
import tansentomb from "@/assets/tansentomb.png";
import sursagarLake from "@/assets/sursagarLake.png";
import roomStandardImage from "@/assets/room-standard.jpg";
import roomTwinImage from "@/assets/room-twin.jpg";
import roomExecutiveImage from "@/assets/room-executive.jpg";
import roomExecutiveKingImage from "@/assets/room-executive-king.jpg";
import restaurantImage from "@/assets/restaurant.jpg";
import footerImage from "@/assets/footer.png";
import background1 from "@/assets/backgroud1.png";

// Real hotel images for gallery and rooms
import img1 from "@/assets/image1.avif";
import img2 from "@/assets/image2.webp";
import img3 from "@/assets/image3.jpeg";
import img4 from "@/assets/image4.avif";
import img5 from "@/assets/image5.avif";
import img6 from "@/assets/image6.avif";
import img8 from "@/assets/image8.avif";
import img9 from "@/assets/image9.avif";
import img10 from "@/assets/image10.avif";
import img11 from "@/assets/image11.avif";
import img12 from "@/assets/image12.avif";
import img13 from "@/assets/image13.jpg";
import img14 from "@/assets/image14.avif";
import img15 from "@/assets/image15.avif";
import img16 from "@/assets/image16.avif";
import img17 from "@/assets/image17.avif";
import img18 from "@/assets/image18.avif";
import img19 from "@/assets/image19.webp";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border h-12 md:h-16">
    <div className="container mx-auto h-full flex items-center justify-between">
      <div className="relative h-full flex items-center min-w-[200px] md:min-w-[300px]">
        <img src={logo} alt="Hotel Ambience Logo" className="h-20 md:h-32 w-auto object-contain absolute left-0 top-1/2 -translate-y-1/2 drop-shadow-lg z-10" />
      </div>
      <nav className="hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground">
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#facilities" className="hover:text-foreground transition-colors">Facilities</a>
        <a href="#rooms" className="hover:text-foreground transition-colors">Rooms</a>
        <a href="#gallery" className="hover:text-foreground transition-colors">Gallery</a>
        <a href="#dining" className="hover:text-foreground transition-colors">Dining</a>
        <a href="#explore" className="hover:text-foreground transition-colors">Explore</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </nav>
      <a href="tel:+917514040341" className="flex items-center gap-2 text-sm text-primary font-body font-medium">
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">+91 751 404 0341</span>
      </a>
    </div>
  </header>
);

const heroSlides = [hero1, hero2, hero3, hero4, hero5];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => {
    setCurrent(idx);
  };

  const prev = () => goTo((current - 1 + heroSlides.length) % heroSlides.length);
  const next = () => goTo((current + 1) % heroSlides.length);

  return (
    <section className="relative w-full overflow-hidden bg-background select-none pt-12 md:pt-16">
      <div className="relative w-full overflow-hidden">

        {/* Slideshow Images with 100% Natural Scale (Zero Zoom, Zero Crop) */}
        {heroSlides.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Hotel Ambience Gwalior - Slide ${idx + 1}`}
            className={`w-full h-auto block transition-opacity duration-1000 ease-in-out ${
              idx === 0
                ? (idx === current ? "opacity-100" : "opacity-0")
                : (idx === current ? "opacity-100 absolute inset-0" : "opacity-0 absolute inset-0 pointer-events-none")
            }`}
            style={{
              position: idx === 0 ? "relative" : "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "auto",
            }}
            loading={idx === 0 ? "eager" : "lazy"}
          />
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/35 hover:bg-black/60 text-white border border-white/25 backdrop-blur-md transition-all duration-300 shadow-xl cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/35 hover:bg-black/60 text-white border border-white/25 backdrop-blur-md transition-all duration-300 shadow-xl cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Bottom Pagination Dots */}
        <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-md px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/15">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="transition-all duration-400 rounded-full cursor-pointer"
              style={{
                width: idx === current ? '24px' : '7px',
                height: '7px',
                background: idx === current ? '#D4AF37' : 'rgba(255,255,255,0.4)',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="relative w-full overflow-hidden bg-[#FAF6F0] py-12 lg:py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="bg-white/90 rounded-2xl md:rounded-3xl shadow-xl border border-[#EADBCC] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

          {/* Left Column: Story, Title & Metrics */}
          <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between bg-gradient-to-br from-[#FFFDF9] via-[#FAF6F0] to-[#F5ECE0]">
            <div>
              {/* Header Badge */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-gold" />
                <span className="font-body text-xs md:text-sm tracking-[0.25em] uppercase text-gold font-semibold">
                  About Us
                </span>
                <div className="w-8 h-[1px] bg-gold" />
              </div>

              {/* Main Heading */}
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] text-[#3B111A] leading-tight font-normal mb-3">
                A Warm Welcome Awaits
              </h2>

              {/* Decorative motif */}
              <div className="flex items-center gap-2 mb-6 text-gold text-xs tracking-widest">
                ❖ ──────── ❖
              </div>

              {/* Description */}
              <p className="font-body text-foreground/80 leading-relaxed text-sm md:text-base font-light mb-8">
                Located just a minute's walk from Gwalior Junction Railway Station, Hotel Ambience offers a perfect blend of comfort and convenience. Situated opposite Platform No. 1, we are ideally placed for both business and leisure travellers exploring the historic city of Gwalior — just 3 km from the magnificent Jai Vilas Mahal Palace and 5 km from the iconic Gwalior Fort.
              </p>
            </div>

            <div>
              {/* Key Metrics Bar */}
              <div className="grid grid-cols-3 gap-2 py-4 border-y border-gold/30 bg-white/60 rounded-xl px-2 my-4">
                <div className="text-center flex flex-col items-center">
                  <Users className="w-5 h-5 text-gold mb-1" />
                  <p className="font-heading text-2xl md:text-3xl font-semibold text-[#3B111A]">3.9</p>
                  <p className="text-[11px] md:text-xs text-muted-foreground font-body">Guest Rating</p>
                </div>
                <div className="text-center flex flex-col items-center border-x border-gold/30">
                  <ConciergeBell className="w-5 h-5 text-gold mb-1" />
                  <p className="font-heading text-2xl md:text-3xl font-semibold text-[#3B111A]">24/7</p>
                  <p className="text-[11px] md:text-xs text-muted-foreground font-body">Front Desk</p>
                </div>
                <div className="text-center flex flex-col items-center">
                  <Star className="w-5 h-5 text-gold fill-gold mb-1" />
                  <p className="font-heading text-2xl md:text-3xl font-semibold text-[#3B111A]">3★</p>
                  <p className="text-[11px] md:text-xs text-muted-foreground font-body">Star Hotel</p>
                </div>
              </div>

              {/* Handwritten Script Tagline */}
              <p className="font-heading italic text-2xl md:text-3xl text-[#6B202B] tracking-wide mt-4">
                More Than Just a Stay
              </p>
            </div>
          </div>

          {/* Center Column: Grand Hotel Facade / Entrance */}
          <div className="lg:col-span-4 relative min-h-[340px] lg:min-h-full overflow-hidden group">
            <img
              src={img3}
              alt="Hotel Ambience Grand Entrance"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            <div className="absolute bottom-6 left-6 text-white z-10 bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
              <p className="text-xs tracking-[0.2em] uppercase font-body text-gold-light">
                Comfort · Hospitality · Memories
              </p>
            </div>
          </div>

          {/* Right Column: 3 Stacked Cards (Rooms, Dining, Heritage) */}
          <div className="lg:col-span-3 p-4 sm:p-6 bg-gradient-to-br from-[#FAF6F0] to-[#F3E8DB] flex flex-col justify-between gap-3 relative">
            <div className="relative rounded-xl overflow-hidden shadow-md border-2 border-white group h-[120px] sm:h-[130px]">
              <img
                src={roomExecutiveImage}
                alt="Luxury Hotel Room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2.5">
                <span className="text-white text-xs font-body font-medium">Luxury Rooms</span>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-md border-2 border-white group h-[120px] sm:h-[130px]">
              <img
                src={restaurantImage}
                alt="Fine Dining Restaurant"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2.5">
                <span className="text-white text-xs font-body font-medium">Fine Dining</span>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-md border-2 border-white group h-[120px] sm:h-[130px]">
              <img
                src={hero4}
                alt="Gwalior Fort Heritage"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2.5">
                <span className="text-white text-xs font-body font-medium">Gwalior Heritage</span>
              </div>
            </div>

            {/* Bottom-Right Curved Maroon Badge */}
            <div className="mt-1 bg-[#4A101D] text-white rounded-xl sm:rounded-2xl p-3.5 border border-gold/40 shadow-lg flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gold shrink-0" />
              <div>
                <p className="text-xs font-heading font-semibold text-gold uppercase tracking-wider">
                  GWALIOR —
                </p>
                <p className="text-[10px] text-white/90 uppercase tracking-widest font-body">
                  A City of Heritage, A Destination of Memories
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
);

const facilities = [
  { icon: Wifi, title: "Free Wi-Fi", desc: "High-speed internet throughout the hotel" },
  { icon: Car, title: "Free Parking", desc: "Complimentary valet parking" },
  { icon: UtensilsCrossed, title: "Restaurant", desc: "Multi-cuisine dining experience" },
  { icon: Waves, title: "Swimming Pool", desc: "Refreshing outdoor pool for relaxation" },
  { icon: Dumbbell, title: "Fitness Center", desc: "Modern gym equipment for your wellness" },
  { icon: Plane, title: "Airport Shuttle", desc: "Convenient and reliable transfers" },
  { icon: ConciergeBell, title: "Room Service", desc: "24-hour in-room dining" },
  { icon: Coffee, title: "Free Breakfast", desc: "Complimentary morning meal" },
];

const Facilities = () => (
  <section
    id="facilities"
    className="relative w-full py-16 md:py-24 overflow-hidden bg-cover bg-center bg-no-repeat bg-[#FAF7F2]"
    style={{ backgroundImage: `url(${background1})` }}
  >
    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl z-10">

      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-8 h-[1px] bg-gold" />
          <span className="font-body text-xs md:text-sm tracking-[0.25em] uppercase text-gold font-semibold">
            Our Amenities
          </span>
          <div className="w-8 h-[1px] bg-gold" />
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#3B111A] font-normal mb-3">
          Facilities & Services
        </h2>

        <div className="flex items-center justify-center gap-2 mb-3 text-gold text-xs tracking-widest">
          ❖
        </div>

        <p className="font-body text-sm md:text-base text-foreground/75 font-light max-w-xl mx-auto">
          Thoughtful amenities for a comfortable and memorable stay.
        </p>
      </div>

      {/* 8 Cards in 4x2 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {facilities.map((f) => (
          <div
            key={f.title}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-7 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-[#EADBCC]/80 hover:-translate-y-1 hover:border-gold/60 group"
          >
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#F5EBE1] flex items-center justify-center mx-auto mb-4 text-[#8C6239] group-hover:scale-110 group-hover:bg-[#EAD8C7] transition-all duration-300 shadow-inner">
              <f.icon className="w-6 h-6 stroke-[1.75]" />
            </div>
            <h3 className="font-heading text-lg md:text-xl font-medium text-[#3B111A] mb-1.5">
              {f.title}
            </h3>
            <p className="font-body text-xs md:text-sm text-foreground/70 leading-relaxed mb-4 min-h-[36px] flex items-center justify-center">
              {f.desc}
            </p>
            <div className="w-8 h-[1.5px] bg-gold/50 mx-auto" />
          </div>
        ))}
      </div>

    </div>
  </section>
);

const services = [
  { cat: "Reception", items: ["24-hour Front Desk", "Luggage Storage", "Tour Desk", "Express Check-in/Check-out", "Valet Parking"] },
  { cat: "Food & Beverage", items: ["Restaurant", "Room Service", "Breakfast in Room", "Special Diet Menus", "Packed Lunches", "Complimentary Water & Fruits"] },
  { cat: "Housekeeping", items: ["Daily Maid Service", "Laundry", "Trouser Press", "Shoeshine"] },
  { cat: "Business", items: ["Business Centre", "Meeting Rooms", "Car Rental"] },
];

const DetailedServices = () => (
  <section className="section-padding bg-warm-cream">
    <div className="container mx-auto max-w-5xl">
      <div className="text-center mb-12">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">At Your Service</p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Complete Services</h2>
        <div className="w-16 h-px bg-gold mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s) => (
          <div key={s.cat}>
            <h3 className="font-heading text-lg text-foreground mb-4 border-b border-gold pb-2">{s.cat}</h3>
            <ul className="space-y-2">
              {s.items.map((item) => (
                <li key={item} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BookYourStay = () => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [roomsCount, setRoomsCount] = useState("1 Room");
  const [adultsCount, setAdultsCount] = useState("2 Adults");
  const [childrenCount, setChildrenCount] = useState("0 Children");
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const generateBookingMessage = () => {
    return encodeURIComponent(
      `🛎️ *NEW BOOKING INQUIRY - HOTEL AMBIENCE GWALIOR*\n\n` +
      `👤 *Guest Name:* ${guestName || "Valued Guest"}\n` +
      `📱 *Contact Phone:* ${guestPhone || "Not provided"}\n` +
      `📅 *Check-in Date:* ${checkIn}\n` +
      `📅 *Check-out Date:* ${checkOut}\n` +
      `🛏️ *Rooms:* ${roomsCount}\n` +
      `👥 *Occupancy:* ${adultsCount}, ${childrenCount}\n\n` +
      `📍 *Location:* Opp. Platform No. 1, Gwalior Junction\n` +
      `✨ Please confirm room availability and tariff.`
    );
  };

  const handleTelegramBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = generateBookingMessage();
    // Open Telegram with pre-filled booking inquiry
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent("https://hotelambiencegwalior.com")}&text=${msg}`;
    window.open(telegramUrl, "_blank");
    setBookingSuccess(true);
  };

  const handleWhatsAppBooking = () => {
    const msg = generateBookingMessage();
    const whatsappUrl = `https://wa.me/917514040341?text=${msg}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="book" className="relative w-full py-16 md:py-20 overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#F5ECE0]">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl z-10">

        {/* Top Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="font-body text-xs md:text-sm tracking-[0.25em] uppercase text-gold font-semibold">
              Book Your Stay
            </span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#3B111A] font-normal mb-3">
            Your Perfect Stay in Gwalior
          </h2>

          <p className="font-body text-sm sm:text-base text-foreground/75 font-light leading-relaxed max-w-2xl mx-auto">
            Comfortable rooms, warm hospitality and a convenient location — all at Hotel Ambience.
          </p>

          {/* 4 Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#F5EBE1] flex items-center justify-center text-[#8C6239] mb-2">
                <Award className="w-5 h-5" />
              </div>
              <p className="font-heading text-xs sm:text-sm font-semibold text-[#3B111A]">Best Rate</p>
              <p className="text-[11px] text-muted-foreground font-body">Guarantee</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#F5EBE1] flex items-center justify-center text-[#8C6239] mb-2">
                <Calendar className="w-5 h-5" />
              </div>
              <p className="font-heading text-xs sm:text-sm font-semibold text-[#3B111A]">Easy & Secure</p>
              <p className="text-[11px] text-muted-foreground font-body">Booking</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#F5EBE1] flex items-center justify-center text-[#8C6239] mb-2">
                <Headphones className="w-5 h-5" />
              </div>
              <p className="font-heading text-xs sm:text-sm font-semibold text-[#3B111A]">24/7</p>
              <p className="text-[11px] text-muted-foreground font-body">Support</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#F5EBE1] flex items-center justify-center text-[#8C6239] mb-2">
                <Users className="w-5 h-5" />
              </div>
              <p className="font-heading text-xs sm:text-sm font-semibold text-[#3B111A]">Flexible</p>
              <p className="text-[11px] text-muted-foreground font-body">Stay Options</p>
            </div>
          </div>
        </div>

        {/* Interactive Booking Bar Card */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-[#EADBCC] p-4 sm:p-6 md:p-8 max-w-6xl mx-auto mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-end">

            {/* Check-in */}
            <div className="space-y-1.5">
              <label className="font-body text-xs font-semibold text-foreground/80 block">Check-in</label>
              <div className="relative">
                <input
                  type="date"
                  value={checkIn}
                  min={today}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-[#FAF6F0] border border-[#EADBCC] rounded-xl px-3 py-2.5 text-xs sm:text-sm font-body font-medium text-[#3B111A] focus:outline-none focus:border-gold cursor-pointer"
                />
              </div>
            </div>

            {/* Check-out */}
            <div className="space-y-1.5">
              <label className="font-body text-xs font-semibold text-foreground/80 block">Check-out</label>
              <div className="relative">
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || today}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-[#FAF6F0] border border-[#EADBCC] rounded-xl px-3 py-2.5 text-xs sm:text-sm font-body font-medium text-[#3B111A] focus:outline-none focus:border-gold cursor-pointer"
                />
              </div>
            </div>

            {/* Rooms */}
            <div className="space-y-1.5">
              <label className="font-body text-xs font-semibold text-foreground/80 block">Rooms</label>
              <select
                value={roomsCount}
                onChange={(e) => setRoomsCount(e.target.value)}
                className="w-full bg-[#FAF6F0] border border-[#EADBCC] rounded-xl px-3 py-2.5 text-xs sm:text-sm font-body font-medium text-[#3B111A] focus:outline-none focus:border-gold cursor-pointer"
              >
                <option value="1 Room">1 Room</option>
                <option value="2 Rooms">2 Rooms</option>
                <option value="3 Rooms">3 Rooms</option>
                <option value="4+ Rooms">4+ Rooms</option>
              </select>
            </div>

            {/* Adults */}
            <div className="space-y-1.5">
              <label className="font-body text-xs font-semibold text-foreground/80 block">Adults</label>
              <select
                value={adultsCount}
                onChange={(e) => setAdultsCount(e.target.value)}
                className="w-full bg-[#FAF6F0] border border-[#EADBCC] rounded-xl px-3 py-2.5 text-xs sm:text-sm font-body font-medium text-[#3B111A] focus:outline-none focus:border-gold cursor-pointer"
              >
                <option value="1 Adult">1 Adult</option>
                <option value="2 Adults">2 Adults</option>
                <option value="3 Adults">3 Adults</option>
                <option value="4+ Adults">4+ Adults</option>
              </select>
            </div>

            {/* Children */}
            <div className="space-y-1.5">
              <label className="font-body text-xs font-semibold text-foreground/80 block">Children</label>
              <select
                value={childrenCount}
                onChange={(e) => setChildrenCount(e.target.value)}
                className="w-full bg-[#FAF6F0] border border-[#EADBCC] rounded-xl px-3 py-2.5 text-xs sm:text-sm font-body font-medium text-[#3B111A] focus:outline-none focus:border-gold cursor-pointer"
              >
                <option value="0 Children">0 Children</option>
                <option value="1 Child">1 Child</option>
                <option value="2 Children">2 Children</option>
                <option value="3+ Children">3+ Children</option>
              </select>
            </div>

            {/* CTA Button */}
            <div>
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="w-full h-[42px] bg-[#6B1824] hover:bg-[#54121C] text-white rounded-xl font-body font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Check Availability</span>
                <span>→</span>
              </button>
            </div>

          </div>
        </div>

        {/* Footer Bar of Widget */}
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 max-w-5xl mx-auto pt-4 border-t border-gold/20">
          <a href="tel:+917514040341" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#F5EBE1] flex items-center justify-center text-[#8C6239] group-hover:bg-[#EAD8C7] transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-body">Need Help with Booking?</p>
              <p className="font-heading text-sm font-semibold text-[#3B111A]">+91 751 404 0341</p>
            </div>
          </a>

          <button onClick={handleWhatsAppBooking} className="flex items-center gap-3 group text-left cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-[#E7F7ED] flex items-center justify-center text-[#25D366] group-hover:bg-[#D4EEDD] transition-colors">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-body">Chat on WhatsApp</p>
              <p className="font-heading text-sm font-semibold text-[#3B111A]">Book Faster</p>
            </div>
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F5EBE1] flex items-center justify-center text-[#8C6239]">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-body">Exclusive Deals</p>
              <p className="font-heading text-sm font-semibold text-[#3B111A]">Book Direct & Save More</p>
            </div>
          </div>
        </div>

      </div>

      {/* Booking Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-gold/30 relative">
            <button
              onClick={() => { setShowModal(false); setBookingSuccess(false); }}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#F5EBE1] text-[#8C6239] flex items-center justify-center mx-auto mb-3">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl text-[#3B111A] font-semibold">Instant Booking Inquiry</h3>
              <p className="font-body text-xs text-muted-foreground mt-1">
                Send your booking directly to our Telegram Bot & Hotel Reservation Desk
              </p>
            </div>

            {/* Booking Summary Card */}
            <div className="bg-[#FAF6F0] rounded-xl p-3.5 mb-5 border border-[#EADBCC] text-xs font-body space-y-1">
              <div className="flex justify-between text-muted-foreground">
                <span>Check-in:</span>
                <span className="font-semibold text-[#3B111A]">{checkIn}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Check-out:</span>
                <span className="font-semibold text-[#3B111A]">{checkOut}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Rooms & Guests:</span>
                <span className="font-semibold text-[#3B111A]">{roomsCount}, {adultsCount}, {childrenCount}</span>
              </div>
            </div>

            {bookingSuccess ? (
              <div className="text-center py-4 space-y-3">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-[#3B111A]">Inquiry Sent!</h4>
                <p className="text-xs text-muted-foreground font-body">
                  Your booking details have been opened in Telegram. Our reservation manager will confirm shortly.
                </p>
                <button
                  onClick={() => { setShowModal(false); setBookingSuccess(false); }}
                  className="mt-4 px-6 py-2 bg-[#6B1824] text-white rounded-lg text-xs font-body uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleTelegramBooking} className="space-y-4">
                <div>
                  <label className="block text-xs font-body font-semibold text-foreground/80 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-[#FAF6F0] border border-[#EADBCC] rounded-xl px-3.5 py-2.5 text-xs font-body focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-body font-semibold text-foreground/80 mb-1">Mobile / WhatsApp Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-[#FAF6F0] border border-[#EADBCC] rounded-xl px-3.5 py-2.5 text-xs font-body focus:outline-none focus:border-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-xl font-body font-medium text-sm flex items-center justify-center gap-2 shadow-lg transition-all mt-4 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Booking via Telegram Bot</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-body font-medium text-xs flex items-center justify-center gap-2 shadow transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Or Send via WhatsApp</span>
                </button>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
};

const galleryImages = [img1, img2, img3, img4, img5, img6, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19];

const rooms = [
  {
    name: "Standard Room",
    image: img1,
    size: "200 sq.ft (19 sq.mt)",
    bed: "1 Double Bed",
    view: "City View",
    maxGuests: "Max 2 Guests",
    desc: "Comfortable and affordable room with essential amenities including AC, TV, and attached bathroom.",
    originalPrice: "₹2,500",
    price: "1,870",
    taxes: "₹224",
    features: ["Free Wi-Fi", "Free Breakfast", "Air Conditioning", "Room Service"],
    highlights: ["Free Cancellation till 24 hrs before check-in", "Breakfast only"],
  },
  {
    name: "Executive Twin Bed",
    image: img2,
    size: "250 sq.ft (23 sq.mt)",
    bed: "2 Single Bed(s)",
    view: "City View",
    maxGuests: "Max 3 Guests",
    desc: "Comfortable twin bed setup with complimentary breakfast, hi-tea, and laundry discounts.",
    originalPrice: "₹4,930",
    price: "2,575",
    taxes: "₹357",
    features: ["Free Wi-Fi", "Free Breakfast", "Complimentary Hi-Tea", "15% Off on Laundry"],
    highlights: ["Free Cancellation till 24 hrs before check-in", "Breakfast only"],
  },
  {
    name: "Executive Room",
    image: img3,
    size: "280 sq.ft (26 sq.mt)",
    bed: "1 King Bed",
    view: "City View",
    maxGuests: "Max 3 Guests",
    desc: "Spacious suite with king-size bed and comfortable seating area. Includes complimentary breakfast and hi-tea.",
    originalPrice: "₹5,200",
    price: "2,950",
    taxes: "₹450",
    features: ["Free Wi-Fi", "Free Breakfast", "Complimentary Hi-Tea", "King Size Bed"],
    highlights: ["Free Cancellation till 24 hrs before check-in", "Breakfast only"],
  },
  {
    name: "Executive Deluxe Room",
    image: img4,
    size: "300 sq.ft (28 sq.mt)",
    bed: "1 Double Bed",
    view: "City View",
    maxGuests: "Max 3 Guests",
    desc: "Premium room with complimentary breakfast, early check-in, heater, and interconnected room option.",
    originalPrice: "₹5,946",
    price: "3,782",
    taxes: "₹540",
    features: ["Free Wi-Fi", "Free Breakfast", "Early Check-in", "Heater Available"],
    highlights: ["Free Cancellation till 24 hrs before check-in", "Breakfast only"],
  },
];

const Rooms = () => (
  <section id="rooms" className="section-padding bg-slate-50">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-12">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">Accommodation</p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Our Rooms</h2>
        <div className="w-16 h-px bg-gold mx-auto" />
      </div>
      <div className="space-y-6">
        {rooms.map((room) => (
          <div key={room.name} className="flex flex-col lg:flex-row bg-white rounded-xl shadow-sm border border-border/60 overflow-hidden hover:shadow-md transition-shadow duration-300">
            {/* Room Image Section */}
            <div className="relative lg:w-1/3 h-64 lg:h-auto overflow-hidden">
              <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 border border-border/50">
                <ImageIcon className="w-3 h-3 text-muted-foreground" />
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">3 Photos</span>
                <ChevronRight className="w-3 h-3 text-primary" />
              </div>
            </div>

            {/* Room Content Section */}
            <div className="flex-1 p-6 flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="font-heading text-2xl text-foreground font-semibold">{room.name}</h3>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Maximize className="w-4 h-4" />
                      <span className="text-sm font-body">{room.size}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-body">{room.view}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <BedSingle className="w-4 h-4" />
                      <span className="text-sm font-body">{room.bed}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-blue-600 font-semibold text-sm flex items-center gap-2">
                    Room With Free Cancellation | Breakfast only
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                    {room.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="w-3 h-3 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="text-primary text-xs font-semibold hover:underline inline-block mt-2">More Details</a>
                </div>
              </div>

              {/* Price Section */}
              <div className="w-full md:w-56 flex flex-col justify-between items-end md:border-l border-border/40 md:pl-6">
                <div className="text-right w-full">
                  <p className="text-xs text-muted-foreground line-through mb-1">{room.originalPrice}</p>
                  <p className="text-3xl font-heading text-foreground font-bold">₹ {room.price}</p>
                  <p className="text-[10px] text-muted-foreground mt-1">+ {room.taxes} Taxes & Fees Per Night</p>
                  <p className="text-xs text-cyan-600 font-bold mt-2">Book with ₹0</p>
                </div>

                <div className="w-full mt-6 space-y-3">
                  <a
                    // href="https://www.makemytrip.com/hotels/hotel-details/?hotelId=201508181147003396"
                    href="https://www.exceedsoftware.in/Website/Booking?hid=X%2fOtTuYpVSI%3d&pid=iyb5gHXOC8w%3d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wider uppercase rounded-md transition-colors shadow-sm"
                  >
                    Select Room
                  </a>
                  <div className="bg-cyan-50 p-3 rounded-md border border-cyan-100/50">
                    <p className="text-[10px] text-cyan-800 leading-tight">
                      Central Bank Rupay Select Debit Card Offer - Get INR 757 Off! <span className="text-primary font-bold cursor-pointer">SELECT TO AVAIL</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const RoomGallery = () => (
  <section id="gallery" className="section-padding bg-warm-cream">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">Visual Tour</p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Hotel Gallery</h2>
        <div className="w-16 h-px bg-gold mx-auto" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((img, index) => (
          <div key={index} className="group relative aspect-square overflow-hidden rounded-lg shadow-sm">
            <img
              src={img}
              alt={`Hotel View ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="p-2 bg-white/20 backdrop-blur-md rounded-full border border-white/40 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <Maximize className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Dining = () => (
  <section id="dining" className="section-padding bg-warm-cream">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">Culinary Experience</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">In-House Restaurant</h2>
          <div className="w-16 h-px bg-gold mb-6" />
          <p className="font-body text-muted-foreground leading-relaxed font-light mb-4">
            Savour a delightful selection of multi-cuisine dishes at our in-house restaurant. From traditional Indian flavours to continental favourites, our kitchen caters to every palate.
          </p>
          <ul className="space-y-2 font-body text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><span className="text-gold">✦</span> Complimentary breakfast included</li>
            <li className="flex items-center gap-2"><span className="text-gold">✦</span> Room service available 24/7</li>
            <li className="flex items-center gap-2"><span className="text-gold">✦</span> Special diet menus on request</li>
            <li className="flex items-center gap-2"><span className="text-gold">✦</span> Packed lunches for travelers</li>
          </ul>
        </div>
        <img src={restaurantImage} alt="Hotel Ambience Restaurant" className="rounded-lg w-full h-80 object-cover" loading="lazy" width={800} height={600} />
      </div>
    </div>
  </section>
);

const itineraries = [
  {
    title: "Gwalior Fort",
    desc: "A timeless legacy",
    image: gwaliorfort,
    icon: Landmark,
  },
  {
    title: "Jai Vilas Palace",
    desc: "Royal elegance",
    image: jaiVilas,
    icon: Landmark,
  },
  {
    title: "Teli Ka Mandir",
    desc: "Architectural marvel",
    image: teliKaMandir,
    icon: Landmark,
  },
  {
    title: "Gujari Mahal",
    desc: "Art & history",
    image: gujariMahal,
    icon: Landmark,
  },
  {
    title: "Tansen Tomb",
    desc: "A musical heritage",
    image: tansentomb,
    icon: Landmark,
  },
  {
    title: "Sursagar Lake",
    desc: "Serene beauty",
    image: sursagarLake,
    icon: Waves,
  },
  {
    title: "Local Food",
    desc: "Flavours of Gwalior",
    image: hero5,
    icon: UtensilsCrossed,
  },
  {
    title: "Local Markets",
    desc: "Shop & explore",
    image: img16,
    icon: ShoppingBag,
  },
];

const ExploreGwalior = () => (
  <section id="explore" className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#F5ECE0]">
    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl z-10">

      {/* Top Header Area */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="font-body text-xs md:text-sm tracking-[0.25em] uppercase text-gold font-semibold">
              Plan Your Trip
            </span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[50px] text-[#3B111A] leading-[1.15] font-normal mb-4">
            Explore Gwalior<br />Your Way
          </h2>

          <p className="font-body text-sm sm:text-base text-foreground/80 font-light leading-relaxed max-w-xl">
            From royal heritage to soulful flavours, we help you plan the perfect Gwalior experience — stay, explore and create memories that last a lifetime.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#6B1824] hover:bg-[#54121C] text-white rounded-lg text-sm font-medium shadow-md transition-all mt-4"
          >
            <span>Explore Gwalior</span>
            <span>→</span>
          </a>
        </div>

        {/* 4 Feature Highlights & Tag */}
        <div className="flex flex-col items-start lg:items-end gap-4 w-full lg:w-auto">
          <div className="hidden lg:flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground font-body">
            <span>History</span> • <span>Culture</span> • <span>Flavours</span> • <span>Experiences</span>
          </div>

          <p className="font-heading italic text-2xl md:text-3xl text-[#6B202B] tracking-wide self-start lg:self-end">
            More Than Just a Stay
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 bg-white/70 backdrop-blur-sm p-3 rounded-2xl border border-gold/30 shadow-sm w-full lg:w-auto">
            <div className="flex items-center gap-2.5 px-3 py-2">
              <div className="w-8 h-8 rounded-full bg-[#F5EBE1] flex items-center justify-center shrink-0 text-[#8C6239]">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-xs font-body font-medium text-foreground/85">Handpicked Experiences</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-2 sm:border-l border-gold/20">
              <div className="w-8 h-8 rounded-full bg-[#F5EBE1] flex items-center justify-center shrink-0 text-[#8C6239]">
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-xs font-body font-medium text-foreground/85">Easy Itineraries</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-2 sm:border-l border-gold/20">
              <div className="w-8 h-8 rounded-full bg-[#F5EBE1] flex items-center justify-center shrink-0 text-[#8C6239]">
                <Users className="w-4 h-4" />
              </div>
              <span className="text-xs font-body font-medium text-foreground/85">Family Friendly Options</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-2 sm:border-l border-gold/20">
              <div className="w-8 h-8 rounded-full bg-[#F5EBE1] flex items-center justify-center shrink-0 text-[#8C6239]">
                <Crown className="w-4 h-4" />
              </div>
              <span className="text-xs font-body font-medium text-foreground/85">Heritage, Food & More</span>
            </div>
          </div>
        </div>
      </div>

      {/* 8 Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 mb-12">
        {itineraries.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#EADBCC] flex flex-col group hover:-translate-y-1.5"
          >
            {/* Image Header with Circular Icon Badge */}
            <div className="relative h-28 sm:h-32 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#F5EBE1] shadow-md border border-gold/30 flex items-center justify-center text-[#8C6239] z-10 group-hover:bg-[#EAD8C7] transition-colors">
                <item.icon className="w-4 h-4" />
              </div>
            </div>

            {/* Content */}
            <div className="pt-5 pb-3.5 px-2.5 text-center flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-xs sm:text-sm font-semibold text-[#3B111A] mb-1 leading-tight">
                  {item.title}
                </h3>
                <p className="font-body text-[11px] text-muted-foreground leading-tight mb-2">
                  {item.desc}
                </p>
              </div>

              <a
                href="#contact"
                aria-label={`Explore ${item.title}`}
                className="inline-flex items-center justify-center font-body text-xs font-semibold text-[#8C6239] hover:text-primary transition-colors mt-1"
              >
                <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Royal Maroon Wave Banner */}
      <div className="bg-[#4A101D] text-white rounded-2xl md:rounded-3xl p-4 sm:p-6 border border-gold/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <MapPin className="w-6 h-6 text-gold shrink-0" />
          <div>
            <p className="text-xs font-heading font-semibold text-gold uppercase tracking-wider">
              GWALIOR —
            </p>
            <p className="text-xs text-white/90 uppercase tracking-widest font-body">
              A City of Heritage, A Lifetime of Memories
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-gold-light/90 font-body">
          <span>Stay</span> • <span>Explore</span> • <span>Experience</span>
        </div>
      </div>

    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <div className="text-center mb-12">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">Get In Touch</p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Location & Contact</h2>
        <div className="w-16 h-px bg-gold mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="font-heading text-base text-foreground mb-1">Address</h3>
              <p className="font-body text-sm text-muted-foreground">Opposite Platform No. 1, Railway Station Campus,<br />Gwalior, Madhya Pradesh 474002, India</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="font-heading text-base text-foreground mb-1">Phone</h3>
              <a href="tel:+917514040341" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">+91 751 404 0341</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="font-heading text-base text-foreground mb-1">Check-in / Check-out</h3>
              <p className="font-body text-sm text-muted-foreground">Check-in: 12:00 PM &nbsp;|&nbsp; Check-out: 11:00 AM</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Users className="w-5 h-5 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="font-heading text-base text-foreground mb-1">Nearby Attractions</h3>
              <p className="font-body text-sm text-muted-foreground">Jai Vilas Mahal Palace — 3 km<br />Gwalior Fort — 5 km<br />Gwalior Junction Railway Station — 1 min walk</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border border-border/50 h-80">
          <iframe
            title="Hotel Ambience Gwalior location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.123!2d78.181962!3d26.214972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6a07c983ca7%3A0x79211260843e4f13!2sHotel%20Ambience!5e0!3m2!1sen!2sin!4v1"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="relative py-12 px-4 overflow-hidden">
    {/* Footer Background Image */}
    <img
      src={footerImage}
      alt="Hotel Ambience Gwalior"
      className="absolute inset-0 w-full h-full object-cover object-center"
    />

    <div className="container mx-auto max-w-5xl relative z-10">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Hotel Ambience Logo" className="w-12 h-12 object-contain" />
            <h3 className="font-heading text-xl" style={{ color: '#3b1f00' }}>Hotel Ambience</h3>
          </div>
          <p className="font-body text-sm" style={{ color: '#5c3a10' }}>A comfortable stay in the heart of Gwalior, Madhya Pradesh.</p>
        </div>
        <div>
          <h4 className="font-heading text-base mb-3 font-bold" style={{ color: '#3b1f00' }}>Quick Links</h4>
          <div className="space-y-2 font-body text-sm" style={{ color: '#5c3a10' }}>
            <a href="#about" className="block hover:opacity-70 transition-opacity" style={{ color: '#5c3a10' }}>About</a>
            <a href="#facilities" className="block hover:opacity-70 transition-opacity" style={{ color: '#5c3a10' }}>Facilities</a>
            <a href="#rooms" className="block hover:opacity-70 transition-opacity" style={{ color: '#5c3a10' }}>Rooms</a>
            <a href="#gallery" className="block hover:opacity-70 transition-opacity" style={{ color: '#5c3a10' }}>Gallery</a>
            <a href="#contact" className="block hover:opacity-70 transition-opacity" style={{ color: '#5c3a10' }}>Contact</a>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-base mb-3 font-bold" style={{ color: '#3b1f00' }}>Book With Us</h4>
          <a href="https://www.exceedsoftware.in/Website/Booking?hid=X%2fOtTuYpVSI%3d&pid=iyb5gHXOC8w%3d" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 font-body text-sm rounded transition-colors" style={{ color: '#3b1f00', border: '1.5px solid #3b1f00' }}>
            Book Now
          </a>
        </div>
      </div>
      <div className="mt-8 pt-6 text-center" style={{ borderTop: '1px solid rgba(59,31,0,0.25)' }}>
        <p className="font-body text-xs" style={{ color: '#7a4a1a' }}>© 2026 Hotel Ambience, Gwalior. All rights reserved.</p>
      </div>
    </div>
  </footer>
);


const Index = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <About />
    <Facilities />
    <DetailedServices />
    <BookYourStay />
    <Rooms />
    <RoomGallery />
    <Dining />
    <ExploreGwalior />
    <Contact />
    <Footer />
  </div>
);

export default Index;
