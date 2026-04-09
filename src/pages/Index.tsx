import { Phone, Mail, MapPin, Clock, Star, Wifi, Car, UtensilsCrossed, Dumbbell, Waves, Plane, ShieldCheck, Shirt, ConciergeBell, Baby, Coffee, Briefcase, Users, Maximize, BedSingle, ChevronRight, ChevronLeft, Check, Image as ImageIcon } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/hero-hotel.jpg";
import roomStandardImage from "@/assets/room-standard.jpg";
import roomTwinImage from "@/assets/room-twin.jpg";
import roomExecutiveImage from "@/assets/room-executive.jpg";
import roomExecutiveKingImage from "@/assets/room-executive-king.jpg";
import restaurantImage from "@/assets/restaurant.jpg";

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
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border h-16 md:h-20">
    <div className="container mx-auto h-full flex items-center justify-between">
      <div className="relative h-full flex items-center min-w-[200px] md:min-w-[300px]">
        <img src={logo} alt="Hotel Ambience Logo" className="h-28 md:h-40 w-auto object-contain absolute left-0 top-1/2 -translate-y-1/2 drop-shadow-lg z-10" />
      </div>
      <nav className="hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground">
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#facilities" className="hover:text-foreground transition-colors">Facilities</a>
        <a href="#rooms" className="hover:text-foreground transition-colors">Rooms</a>
        <a href="#gallery" className="hover:text-foreground transition-colors">Gallery</a>
        <a href="#dining" className="hover:text-foreground transition-colors">Dining</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </nav>
      <a href="tel:+917514040341" className="flex items-center gap-2 text-sm text-primary font-body font-medium">
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">+91 751 404 0341</span>
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
    <img src={heroImage} alt="Hotel Ambience Gwalior exterior" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
    <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
    <div className="relative z-10 text-center px-4 max-w-3xl">
      <p className="font-body text-sm tracking-[0.3em] uppercase text-gold-light animate-fade-in-up mb-4">Welcome to</p>
      <h2 className="font-heading text-5xl md:text-7xl text-primary-foreground animate-fade-in-up-delay leading-tight">
        Hotel Ambience
      </h2>
      <p className="font-body text-lg md:text-xl text-primary-foreground/80 mt-4 animate-fade-in-up-delay-2 font-light">
        Your gateway to comfort in the heart of Gwalior
      </p>
      <div className="flex items-center justify-center gap-1 mt-6 animate-fade-in-up-delay-2">
        {[...Array(3)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-gold text-gold" />
        ))}
        <span className="text-primary-foreground/70 text-sm ml-2 font-body">3-Star Hotel</span>
      </div>
      <a href="#rooms" className="inline-block mt-8 px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase rounded hover:opacity-90 transition-opacity animate-fade-in-up-delay-2">
        View Rooms
      </a>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section-padding bg-warm-cream">
    <div className="container mx-auto max-w-4xl text-center">
      <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">About Us</p>
      <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">A Warm Welcome Awaits</h2>
      <div className="w-16 h-px bg-gold mx-auto mb-8" />
      <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg font-light max-w-2xl mx-auto">
        Located just a minute's walk from Gwalior Junction Railway Station, Hotel Ambience offers a perfect blend of comfort and convenience. Situated opposite Platform No. 1, we are ideally placed for both business and leisure travelers exploring the historic city of Gwalior — just 3 km from the magnificent Jai Vilas Mahal Palace and 5 km from the iconic Gwalior Fort.
      </p>
      <div className="grid grid-cols-3 gap-8 mt-12 max-w-lg mx-auto">
        <div>
          <p className="font-heading text-3xl text-primary">3.9</p>
          <p className="text-xs text-muted-foreground font-body mt-1">Guest Rating</p>
        </div>
        <div>
          <p className="font-heading text-3xl text-primary">24/7</p>
          <p className="text-xs text-muted-foreground font-body mt-1">Front Desk</p>
        </div>
        <div>
          <p className="font-heading text-3xl text-primary">3★</p>
          <p className="text-xs text-muted-foreground font-body mt-1">Star Hotel</p>
        </div>
      </div>
    </div>
  </section>
);

const facilities = [
  { icon: Wifi, title: "Free Wi-Fi", desc: "High-speed internet throughout" },
  { icon: Car, title: "Free Parking", desc: "Complimentary valet parking" },
  { icon: UtensilsCrossed, title: "Restaurant", desc: "Multi-cuisine dining" },
  { icon: Waves, title: "Swimming Pool", desc: "Refreshing outdoor pool" },
  { icon: Dumbbell, title: "Fitness Center", desc: "Modern gym equipment" },
  { icon: Plane, title: "Airport Shuttle", desc: "Convenient transfers" },
  { icon: ConciergeBell, title: "Room Service", desc: "24-hour in-room dining" },
  { icon: Coffee, title: "Free Breakfast", desc: "Complimentary morning meal" },
  { icon: Shirt, title: "Laundry Service", desc: "Professional cleaning" },
  { icon: Baby, title: "Kid-Friendly", desc: "Family-welcoming spaces" },
  { icon: ShieldCheck, title: "Air Conditioning", desc: "Climate-controlled rooms" },
  { icon: Briefcase, title: "Business Center", desc: "Meeting rooms available" },
];

const Facilities = () => (
  <section id="facilities" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <div className="text-center mb-12">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">Our Amenities</p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Facilities & Services</h2>
        <div className="w-16 h-px bg-gold mx-auto" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {facilities.map((f) => (
          <div key={f.title} className="bg-card rounded-lg p-6 text-center hover:shadow-md transition-shadow border border-border/50">
            <f.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-heading text-base text-foreground mb-1">{f.title}</h3>
            <p className="font-body text-xs text-muted-foreground">{f.desc}</p>
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
  <footer className="bg-foreground text-primary-foreground py-12 px-4">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Hotel Ambience Logo" className="w-12 h-12 object-contain brightness-0 invert" />
            <h3 className="font-heading text-xl">Hotel Ambience</h3>
          </div>
          <p className="font-body text-sm text-primary-foreground/60">A comfortable stay in the heart of Gwalior, Madhya Pradesh.</p>
        </div>
        <div>
          <h4 className="font-heading text-base mb-3">Quick Links</h4>
          <div className="space-y-2 font-body text-sm text-primary-foreground/60">
            <a href="#about" className="block hover:text-primary-foreground transition-colors">About</a>
            <a href="#facilities" className="block hover:text-primary-foreground transition-colors">Facilities</a>
            <a href="#rooms" className="block hover:text-primary-foreground transition-colors">Rooms</a>
            <a href="#gallery" className="block hover:text-primary-foreground transition-colors">Gallery</a>
            <a href="#contact" className="block hover:text-primary-foreground transition-colors">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-base mb-3">Book With Us</h4>
          <a href="https://www.exceedsoftware.in/Website/Booking?hid=X%2fOtTuYpVSI%3d&pid=iyb5gHXOC8w%3d" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 border border-primary-foreground/30 font-body text-sm text-primary-foreground rounded hover:bg-primary-foreground/10 transition-colors">
            Book Now
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center">
        <p className="font-body text-xs text-primary-foreground/40">© 2026 Hotel Ambience, Gwalior. All rights reserved.</p>
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
    <Rooms />
    <RoomGallery />
    <Dining />
    <Contact />
    <Footer />
  </div>
);

export default Index;
