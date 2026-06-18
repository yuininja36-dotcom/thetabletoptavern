import Image from "next/image";
import { Sword, Shield, Scroll, Zap, Users, MapPin, Clock, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Sword className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold text-amber-500">The Table Top Tavern</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-amber-500 transition">Home</a>
              <a href="#brands" className="text-gray-300 hover:text-amber-500 transition">Games</a>
              <a href="#features" className="text-gray-300 hover:text-amber-500 transition">Features</a>
              <a href="#contact" className="text-gray-300 hover:text-amber-500 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to <span className="text-amber-500">The Table Top Tavern</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your ultimate destination for tabletop gaming adventures. Battle with cards, conquer with strategy, and forge legends with friends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">
                Start Your Adventure
              </button>
              <button className="border-2 border-amber-600 text-amber-500 hover:bg-amber-600/20 font-bold py-3 px-8 rounded-lg transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16 relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/20">
            <Image
              src="https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=1200&h=600&fit=crop"
              alt="Tabletop Gaming Scene"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Our Featured <span className="text-amber-500">Games</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Dive into worlds of strategy, magic, and adventure with our curated selection of tabletop gaming experiences
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Yu-Gi-Oh */}
            <div className="bg-gradient-to-br from-red-900/40 to-red-950/40 rounded-xl p-6 border border-red-700/30 hover:border-red-500/50 transition transform hover:scale-105 group">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=400&h=300&fit=crop"
                  alt="Yu-Gi-Oh Cards"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-red-400 mb-2">Yu-Gi-Oh!</h3>
              <p className="text-gray-400 text-sm">Master the card game that started it all. Build your deck, summon monsters, and become the King of Games!</p>
            </div>

            {/* Magic: The Gathering */}
            <div className="bg-gradient-to-br from-purple-900/40 to-purple-950/40 rounded-xl p-6 border border-purple-700/30 hover:border-purple-500/50 transition transform hover:scale-105 group">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=400&h=300&fit=crop"
                  alt="Magic: The Gathering"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-purple-400 mb-2">Magic: The Gathering</h3>
              <p className="text-gray-400 text-sm">Enter the Multiverse and harness powerful magic. Strategic depth meets limitless creativity in the world's premier TCG.</p>
            </div>

            {/* Dungeons & Dragons */}
            <div className="bg-gradient-to-br from-amber-900/40 to-amber-950/40 rounded-xl p-6 border border-amber-700/30 hover:border-amber-500/50 transition transform hover:scale-105 group">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop"
                  alt="Dungeons & Dragons"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-amber-400 mb-2">Dungeons & Dragons</h3>
              <p className="text-gray-400 text-sm">Gather your party and embark on epic adventures. Create your hero and shape your own legendary story.</p>
            </div>

            {/* Warhammer */}
            <div className="bg-gradient-to-br from-gray-700/40 to-gray-800/40 rounded-xl p-6 border border-gray-600/30 hover:border-gray-400/50 transition transform hover:scale-105 group">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=300&fit=crop"
                  alt="Warhammer"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">Warhammer</h3>
              <p className="text-gray-400 text-sm">Command armies in the grim darkness of the far future. Strategy, tactics, and epic battles await.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Why Choose <span className="text-amber-500">The Tavern</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            More than just a game store - we're a community hub for tabletop enthusiasts
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-amber-500/50 transition">
              <div className="bg-amber-600/20 rounded-lg p-3 w-fit mb-4">
                <Users className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community Events</h3>
              <p className="text-gray-400">Regular tournaments, game nights, and meetups. Connect with fellow gamers and build lasting friendships.</p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-amber-500/50 transition">
              <div className="bg-amber-600/20 rounded-lg p-3 w-fit mb-4">
                <Scroll className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Staff</h3>
              <p className="text-gray-400">Knowledgeable staff passionate about tabletop gaming. Get recommendations, learn strategies, and improve your game.</p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-amber-500/50 transition">
              <div className="bg-amber-600/20 rounded-lg p-3 w-fit mb-4">
                <Shield className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Premium Products</h3>
              <p className="text-gray-400">Wide selection of cards, miniatures, dice, and accessories. Quality products for serious gamers and collectors.</p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-amber-500/50 transition">
              <div className="bg-amber-600/20 rounded-lg p-3 w-fit mb-4">
                <MapPin className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Play Space</h3>
              <p className="text-gray-400">Comfortable gaming tables and dedicated play areas. Perfect for casual games or competitive tournaments.</p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-amber-500/50 transition">
              <div className="bg-amber-600/20 rounded-lg p-3 w-fit mb-4">
                <Clock className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Extended Hours</h3>
              <p className="text-gray-400">Open late for night owls and weekend warriors. Game whenever inspiration strikes.</p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-amber-500/50 transition">
              <div className="bg-amber-600/20 rounded-lg p-3 w-fit mb-4">
                <Star className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Rewards Program</h3>
              <p className="text-gray-400">Earn points with every purchase. Get exclusive discounts, early access, and special member events.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Gaming <span className="text-amber-500">Gallery</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A glimpse into the world of tabletop gaming
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=400&fit=crop"
                alt="Gaming Dice"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1611371805429-8b5cc7c5b845?w=400&h=400&fit=crop"
                alt="Card Game"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1560252829-c839c27a6ae6?w=400&h=400&fit=crop"
                alt="Miniatures"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1605901309584-818e25960b8f?w=400&h=400&fit=crop"
                alt="Game Board"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1592478411213-61535fdd861d?w=400&h=400&fit=crop"
                alt="Playing Cards"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1640537906543-e8f9c405b0e0?w=400&h=400&fit=crop"
                alt="Strategy Game"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1611996575794-79a3a25f0d85?w=400&h=400&fit=crop"
                alt="Game Night"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1544982852-72c64313e41d?w=400&h=400&fit=crop"
                alt="Tabletop Setup"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Visit <span className="text-amber-500">The Tavern</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Ready to start your adventure? Come visit us or get in touch
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-amber-500" />
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-gray-400">123 Gaming Street, Adventure City, AC 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-amber-500" />
                  <div>
                    <p className="text-white font-semibold">Hours</p>
                    <p className="text-gray-400">Mon-Thu: 12pm-10pm | Fri-Sat: 12pm-12am | Sun: 12pm-8pm</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Zap className="h-6 w-6 text-amber-500" />
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-400">(555) 123-GAME</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input type="text" className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input type="email" className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition h-32 resize-none" placeholder="Your message..."></textarea>
                </div>
                <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sword className="h-6 w-6 text-amber-500" />
              <span className="text-xl font-bold text-amber-500">The Table Top Tavern</span>
            </div>
            <p className="text-gray-400 text-sm">© 2024 The Table Top Tavern. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
