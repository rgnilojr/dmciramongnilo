/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle, ExternalLink, ChevronRight, Award, Home, CheckCircle2 } from "lucide-react";

const projects = [
  {
    name: "Mulberry Place",
    location: "Acacia Estates, Taguig",
    type: "Resort-Style Condominium",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    description: "An Asian-Tropical inspired community that offers a serene and relaxed living environment."
  },
  {
    name: "Alder Residences",
    location: "Acacia Estates, Taguig",
    type: "High-Rise Residential",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    description: "Modern living at its finest, featuring spacious units and world-class amenities."
  },
  {
    name: "Maple Place",
    location: "Acacia Estates, Taguig",
    type: "Boutique Condominium",
    image: "https://images.unsplash.com/photo-1493397212122-2b85edf59fd6?auto=format&fit=crop&q=80&w=800",
    description: "Lush gardens and intimate spaces for those who value privacy and tranquility."
  }
];

export default function App() {
  const whatsappNumber = "639952954438";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen flex flex-col selection:bg-dmci-gold selection:text-dmci-navy">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-off-white/80 backdrop-blur-md border-b border-dmci-navy/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-dmci-navy flex items-center justify-center rounded-sm">
              <span className="text-dmci-gold font-serif font-bold text-xl">D</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-dmci-navy font-bold tracking-tighter text-lg">DMCI HOMES</span>
              <span className="text-dmci-gold text-[10px] font-semibold tracking-[0.2em] uppercase">Property Specialist</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
            <a href="#projects" className="hover:text-dmci-gold transition-colors">Projects</a>
            <a href="#about" className="hover:text-dmci-gold transition-colors">About</a>
            <a href="#contact" className="hover:text-dmci-gold transition-colors">Contact</a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              className="bg-dmci-navy text-white px-6 py-2.5 rounded-full hover:bg-dmci-gold hover:text-dmci-navy transition-all duration-300 shadow-lg shadow-dmci-navy/20"
            >
              Inquire Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dmci-gold/10 border border-dmci-gold/20">
              <Award className="w-4 h-4 text-dmci-gold" />
              <span className="text-xs font-semibold text-dmci-gold uppercase tracking-wider">Top Property Specialist</span>
            </div>
            <h1 className="text-6xl md:text-8xl leading-[0.9] tracking-tight font-light italic">
              Find your <span className="font-bold not-italic text-dmci-gold">Dream Home</span> in the Heart of the City.
            </h1>
            <p className="text-lg text-dmci-navy/70 max-w-lg font-light leading-relaxed">
              Experience the distinctive DMCI Homes lifestyle with expert guidance from <strong>Ramon M. Gnilo Jr.</strong>, dedicated to finding the perfect space for your future.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="flex items-center gap-2 bg-dmci-navy text-white px-8 py-4 rounded-full font-semibold hover:bg-dmci-gold hover:text-dmci-navy transition-all group">
                View Projects
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4 px-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-off-white bg-slate-200" />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold">500+ Residents</p>
                  <p className="text-dmci-navy/50 text-xs">Trusted by families</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden bg-dmci-navy shadow-2xl relative z-10">
              <img 
                src="/ramon.png" 
                alt="Ramon M. Gnilo Jr." 
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 p-6 bg-white shadow-xl rounded-2xl z-20 border border-dmci-gold/20">
              <div className="space-y-1">
                <h3 className="font-bold text-xl">Ramon M. Gnilo Jr.</h3>
                <p className="text-dmci-gold text-sm font-semibold uppercase tracking-wider">Property Specialist</p>
                <div className="flex items-center gap-2 pt-2 text-xs text-dmci-navy/60">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Licensed & Certified</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-dmci-gold/20 rounded-full -z-0 opacity-50" />
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 bg-dmci-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-light">
                Our <span className="font-bold text-dmci-gold italic">Featured</span> Residences
              </h2>
              <p className="text-dmci-gold/60 max-w-xl text-lg font-light">
                Discover our hand-picked selection of the most prestigious DMCI Homes developments in prime locations.
              </p>
            </div>
            <a href="#" className="text-dmci-gold font-semibold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all">
              View All Properties <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-2xl relative">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dmci-navy via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2">
                    <p className="text-dmci-gold text-xs font-bold uppercase tracking-widest">{project.location}</p>
                    <h3 className="text-3xl font-serif font-bold">{project.name}</h3>
                    <p className="text-white/60 text-sm line-clamp-2 max-h-0 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
                      {project.description}
                    </p>
                    <div className="pt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-xs uppercase font-bold tracking-tighter">Learn More</span>
                      <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-dmci-gold group-hover:border-dmci-gold transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why DMCI */}
      <section id="about" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-square rounded-full border-2 border-dmci-navy/5 p-8 animate-[spin_60s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-dmci-gold rounded-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 border-2 border-dmci-navy rounded-full bg-white" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="w-full h-full rounded-2xl bg-dmci-navy flex items-center justify-center text-8xl font-serif font-bold text-dmci-gold">
                D
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-light leading-tight italic">
              Why Choose <span className="font-bold text-dmci-navy not-italic">DMCI Homes?</span>
            </h2>
            <div className="space-y-6">
              {[
                { title: "Lumiventt® Design Technology", desc: "Allows ambient light and fresh air to permeate the building and all unit spaces." },
                { title: "Resort-Inspired Amenities", desc: "Experience vacation living every day with our expansive pools, gardens, and lounges." },
                { title: "Quality Workmanship", desc: "Built with the highest standards by the country's first Quadruple A builder-developer." }
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-dmci-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-serif">{item.title}</h4>
                    <p className="text-dmci-navy/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="mt-auto bg-off-white border-t border-dmci-navy/10 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-dmci-navy flex items-center justify-center rounded-sm">
                  <span className="text-dmci-gold font-serif font-bold text-2xl">D</span>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-dmci-navy font-bold tracking-tighter text-2xl uppercase">DMCI HOMES</span>
                  <span className="text-dmci-gold text-xs font-semibold tracking-[0.2em] uppercase">Ramon M. Gnilo Jr.</span>
                </div>
              </div>
              <p className="text-lg text-dmci-navy/60 max-w-sm font-light">
                Your trusted partner in finding the perfect home. Let's start your journey toward homeownership today.
              </p>
              <div className="flex gap-4">
                {[MessageCircle, Phone, Mail].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 rounded-full bg-dmci-navy/5 flex items-center justify-center hover:bg-dmci-navy hover:text-white transition-all text-dmci-navy">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-dmci-gold">Contact Info</h4>
              <ul className="space-y-4 text-dmci-navy/70">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-dmci-gold shrink-0" />
                  <span>+63 995 295 4438</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-dmci-gold shrink-0" />
                  <span>rgnilojr@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-dmci-gold shrink-0" />
                  <span>Acacia Estates, Taguig City, Philippines</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-dmci-gold">Quick Links</h4>
              <ul className="space-y-3 text-dmci-navy/70">
                <li><a href="#projects" className="hover:text-dmci-gold transition-colors">Mulberry Place</a></li>
                <li><a href="#projects" className="hover:text-dmci-gold transition-colors">Alder Residences</a></li>
                <li><a href="#projects" className="hover:text-dmci-gold transition-colors">Maple Place</a></li>
                <li><a href="#about" className="hover:text-dmci-gold transition-colors">Why DMCI?</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-dmci-navy/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-dmci-navy/40">
            <p>© {new Date().getFullYear()} Ramon M. Gnilo Jr. • DMCI Homes Property Specialist</p>
            <div className="flex gap-8 italic capitalize">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a 
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8 group-hover:hidden" />
        <span className="hidden group-hover:inline px-2 font-bold whitespace-nowrap">Chat with Ramon</span>
        <div className="absolute inset-0 rounded-full border-4 border-[#25D366]/30 animate-ping" />
      </motion.a>
    </div>
  );
}
