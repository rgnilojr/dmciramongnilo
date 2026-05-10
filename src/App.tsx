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
    image: "/clubhousempl1.png",
    price: "₱10.1M – ₱12.9M",
    terms: "12% DP in 50 months",
    promo: "Reservation at ₱20,000 until May 31, 2026",
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
    <div className="min-h-screen flex flex-col selection:bg-dmci-navy selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-dmci-navy/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-dmci-navy flex items-center justify-center rounded-sm">
              <span className="text-white font-serif font-bold text-xl">D</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-dmci-navy font-bold tracking-tighter text-lg">DMCI HOMES</span>
              <span className="text-dmci-navy/50 text-[10px] font-semibold tracking-[0.2em] uppercase">Property Specialist</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase">
            <a href="#projects" className="hover:opacity-60 transition-opacity">Projects</a>
            <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
            <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              className="bg-dmci-navy text-white px-6 py-2.5 rounded-sm hover:bg-dmci-navy-light transition-all duration-300 shadow-md"
            >
              FREE CONSULTATION
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-dmci-navy/20 bg-white shadow-sm">
              <Award className="w-4 h-4 text-dmci-navy" />
              <span className="text-[10px] font-bold text-dmci-navy uppercase tracking-[0.2em]">Official DMCI Specialist</span>
            </div>
            <h1 className="text-6xl md:text-7xl leading-[1.1] tracking-tight font-light lowercase">
              Premium <span className="font-bold uppercase tracking-tight text-dmci-navy block">Residential Investments</span>
            </h1>
            <p className="text-xl text-dmci-navy/70 max-w-lg font-light leading-relaxed">
              Expert property guidance by <strong>Ramon M. Gnilo Jr.</strong>—specializing in high-value DMCI Homes developments across Metro Manila.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="flex items-center gap-2 bg-dmci-navy text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-dmci-navy-light transition-all group">
                Explore Portfolio
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4 border-l border-dmci-navy/20 pl-6">
                <div className="text-sm">
                  <p className="font-bold text-lg">15+ Years</p>
                  <p className="text-dmci-navy/50 text-[10px] uppercase tracking-widest">Industry Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden bg-dmci-navy shadow-[40px_40px_0px_0px_#e5e7eb] relative z-10 border-[12px] border-white">
              <img 
                src="/ramon.png" 
                alt="Ramon M. Gnilo Jr." 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-72 p-8 bg-dmci-navy text-white shadow-2xl z-20">
              <div className="space-y-2">
                <h3 className="font-bold text-2xl font-serif">Ramon M. Gnilo Jr.</h3>
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">Senior Property Specialist</p>
                <div className="w-12 h-0.5 bg-white/20 my-4" />
                <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest">
                  <CheckCircle2 className="w-3 h-3 text-white" />
                  <span>Verified Professional</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-dmci-navy uppercase">
              Current <span className="font-bold italic">Holdings</span>
            </h2>
            <div className="w-24 h-1 bg-dmci-navy" />
            <p className="text-dmci-navy/50 max-w-xl text-lg font-light pt-4">
              Premium residential opportunities featuring state-of-the-art building technology and resort-style living.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col h-full"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-sm relative mb-6 border border-dmci-navy/5">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {project.promo && (
                    <div className="absolute top-4 left-4 bg-dmci-navy text-white px-3 py-1.5 text-[8px] font-bold uppercase tracking-widest shadow-lg">
                      LIMITED OFFER
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col flex-grow space-y-4">
                  <div className="space-y-1">
                    <p className="text-dmci-navy/40 text-[10px] font-bold uppercase tracking-[0.2em]">{project.location}</p>
                    <h3 className="text-3xl font-serif font-bold text-dmci-navy">{project.name}</h3>
                  </div>
                  
                  {project.price ? (
                    <div className="p-6 bg-slate-50 border border-slate-100 flex flex-col gap-2">
                       <div className="flex justify-between items-baseline">
                         <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Estimate</span>
                         <span className="text-xl font-bold">{project.price}</span>
                       </div>
                       <div className="flex justify-between border-t border-dmci-navy/5 pt-2">
                         <span className="text-[10px] uppercase font-bold opacity-40">Payment</span>
                         <span className="text-[10px] font-bold">{project.terms}</span>
                       </div>
                       {project.promo && (
                         <p className="text-[9px] font-medium text-dmci-navy/60 italic pt-1">
                           * {project.promo}
                         </p>
                       )}
                    </div>
                  ) : (
                    <p className="text-sm text-dmci-navy/60 leading-relaxed italic">
                      {project.description}
                    </p>
                  )}

                  <div className="mt-auto pt-6 border-t border-dmci-navy/5 flex items-center justify-between">
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-50 transition-opacity">
                      Inquire Details
                    </a>
                    <ExternalLink className="w-4 h-4 opacity-20 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-dmci-navy text-white py-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm">
                  <span className="text-dmci-navy font-serif font-bold text-2xl uppercase">D</span>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-white font-bold tracking-tighter text-2xl uppercase">DMCI HOMES</span>
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Certified Sales</span>
                </div>
              </div>
              <p className="text-xl text-white/60 max-w-sm font-light leading-relaxed">
                Dedicated to providing high-end real estate solutions with transparency and integrity.
              </p>
              <div className="flex gap-4">
                {[MessageCircle, Phone, Mail].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center hover:bg-white hover:text-dmci-navy transition-all duration-500">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Direct Contact</h4>
              <ul className="space-y-6 text-sm font-medium">
                <li className="flex flex-col gap-1">
                  <span className="text-[9px] opacity-40 uppercase tracking-widest">Mobile</span>
                  <span className="text-lg">+63 995 295 4438</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[9px] opacity-40 uppercase tracking-widest">Official Email</span>
                  <span className="text-lg">rgnilojr@gmail.com</span>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Portfolio</h4>
              <ul className="space-y-4 text-sm font-light opacity-60 uppercase tracking-widest text-[10px]">
                <li><a href="#projects" className="hover:text-white transition-colors">Mulberry Place</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Alder Residences</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Maple Place</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] opacity-30">
            <p>© {new Date().getFullYear()} Ramon M. Gnilo Jr. • DMCI Homes Property Specialist</p>
            <div className="flex gap-8">
              <span>Privacy</span>
              <span>Inquiry Policy</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a 
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-10 right-10 z-[100] bg-dmci-navy text-white px-8 py-5 rounded-sm shadow-2xl flex items-center gap-3 group border border-white/10"
      >
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="font-bold text-xs uppercase tracking-[0.2em]">DIRECT INQUIRY</span>
      </motion.a>
    </div>
  );
}
