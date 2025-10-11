import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaCheck,
  FaStar,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
  FaCreditCard,
  FaUniversity,
  FaPaypal,
} from "react-icons/fa";
import {
  packages,
  services,
  portfolioProjects,
  testimonials,
} from "../data/dummyData";

function LandingPage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setShowCart(true);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dr-Tasweeq
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#home"
                className="text-gray-300 hover:text-white transition"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-300 hover:text-white transition"
              >
                Services
              </a>
              <a
                href="#packages"
                className="text-gray-300 hover:text-white transition"
              >
                Packages
              </a>
              <a
                href="#portfolio"
                className="text-gray-300 hover:text-white transition"
              >
                Portfolio
              </a>
              <a
                href="#testimonials"
                className="text-gray-300 hover:text-white transition"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition"
              >
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowCart(!showCart)}
                className="relative p-2 text-gray-300 hover:text-white transition"
              >
                <FaShoppingCart className="text-xl" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
              <Link
                to="/login"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Cart Sidebar */}
      {showCart && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          onClick={() => setShowCart(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-full max-w-md bg-gray-800 shadow-2xl p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Shopping Cart</h3>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-400 text-center py-8">
                Your cart is empty
              </p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-700 rounded-lg p-4 flex items-center justify-between"
                    >
                      <div>
                        <h4 className="text-white font-semibold">
                          {item.name || item.title}
                        </h4>
                        <p className="text-purple-400">${item.price}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-4 mb-6">
                  <div className="flex justify-between text-white text-xl font-bold mb-4">
                    <span>Total:</span>
                    <span>${cartTotal}</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <p className="text-gray-400 text-sm">Payment Methods:</p>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-gray-700 rounded p-2 flex items-center justify-center gap-2 text-white text-xs">
                        <FaCreditCard /> Card
                      </div>
                      <div className="flex-1 bg-gray-700 rounded p-2 flex items-center justify-center gap-2 text-white text-xs">
                        <FaUniversity /> Bank
                      </div>
                      <div className="flex-1 bg-gray-700 rounded p-2 flex items-center justify-center gap-2 text-white text-xs">
                        <FaPaypal /> Mada
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition">
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Transform Your Business
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  With Digital Excellence
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Professional services, packages, and digital products to help
                your business thrive in the digital age
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#packages"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition inline-flex items-center gap-2"
                >
                  Explore Packages <FaArrowRight />
                </a>
                <a
                  href="#contact"
                  className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition border border-white/20"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-gray-400 text-lg">
                Choose from our wide range of professional services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition border border-gray-700 hover:border-purple-500 group"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-400">
                      ${service.price}
                    </span>
                    <button
                      onClick={() => addToCart(service)}
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Packages
              </h2>
              <p className="text-gray-400 text-lg">
                Complete solutions tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`bg-gray-800 rounded-xl p-8 border-2 ${
                    pkg.popular
                      ? "border-purple-500 shadow-xl shadow-purple-500/20 scale-105"
                      : "border-gray-700"
                  } relative`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-400 mb-6">{pkg.description}</p>

                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">
                      ${pkg.price}
                    </span>
                    <span className="text-gray-400">/project</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <FaCheck className="text-green-400 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => addToCart(pkg)}
                    className={`w-full py-3 rounded-lg font-semibold transition ${
                      pkg.popular
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                        : "bg-gray-700 text-white hover:bg-gray-600"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Portfolio
              </h2>
              <p className="text-gray-400 text-lg">
                Showcasing our best work and success stories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-purple-400 text-sm mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-white font-bold text-lg mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{project.client}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-gray-400 text-lg">
                Real feedback from satisfied customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h4 className="text-white font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-300">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-400 text-lg">
                Have a question? We'd love to hear from you
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      rows="4"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition">
                    Send Message
                  </button>
                </form>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-purple-400 text-2xl mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-400">info@markethub.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaPhone className="text-purple-400 text-2xl mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-purple-400 text-2xl mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <p className="text-gray-400">
                      123 Business St, Suite 100
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="bg-gray-800 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-800 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-800 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-800 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 Dr-Tasweeq. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
