import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RollingNumber from '@/components/RollingNumber';
import { Users, Target, Globe, Award, Heart, Lightbulb } from 'lucide-react';
const AboutUs = () => {
  useEffect(() => {
    document.title = 'About Us - Lawexa | Legal Intelligence for Africa';
  }, []);
  const values = [{
    icon: Heart,
    title: 'Accessibility',
    description: 'Making legal knowledge accessible to every Nigerian, regardless of their background or economic status.'
  }, {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Leveraging cutting-edge AI technology to solve real legal challenges faced by Africans.'
  }, {
    icon: Target,
    title: 'Excellence',
    description: 'Delivering the highest quality legal intelligence with accuracy and reliability you can trust.'
  }, {
    icon: Globe,
    title: 'Impact',
    description: 'Creating meaningful change in how legal services are accessed and delivered across Africa.'
  }];
  const team = [{
    name: 'Precious Ekong',
    role: 'CEO & Founder',
    description: 'Visionary leader driving the democratization of legal knowledge across Africa through innovative AI technology.',
    image: 'https://placehold.co/300x300/374151/FFD700?text=PE'
  }, {
    name: 'Stay Njokede',
    role: 'CTO & Co-Founder',
    description: 'Technology architect building cutting-edge AI solutions for legal intelligence and accessibility.',
    image: 'https://placehold.co/300x300/374151/FFD700?text=SN'
  }, {
    name: 'Akintola Temiloluwa',
    role: 'Head of Legal Research',
    description: 'Graduate of Law from Lead City University, leading our legal research and content development initiatives.',
    image: 'https://placehold.co/300x300/374151/FFD700?text=AT'
  }];
  return <div className="min-h-screen bg-background animate-fade-in">
      <div className="bg-black min-h-[64px] flex items-center">
        <Header />
      </div>
      
      <main>
        {/* Hero Section */}
        <section className="bg-lawexa-dark text-white py-20 bg-slate-950 pt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-yellow-400 md:text-6xl">Built By Lawyers</h1>
              <p className="text-xl md:text-2xl mb-8 text-yellow-300">
                Designed For Africa.
              </p>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We're on a mission to democratize legal knowledge across Africa, making professional legal intelligence accessible to students, professionals, and everyday people who deserve better access to justice.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground md:text-5xl">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="text-xl leading-relaxed mb-6">
                  Lawexa was born from a simple frustration: why should accessing basic legal information 
                  be so difficult and expensive in Nigeria? Our founders, a team of lawyers and technologists, 
                  experienced firsthand the barriers that prevent ordinary Nigerians from understanding 
                  their legal rights and obligations.
                </p>
                <p className="text-xl leading-relaxed mb-6">Today, Lawexa serves over 15,000 users, saving them millions of naira in legal fees while empowering them with the knowledge they need to make informed decisions. 
     
We're on a mission to democratize legal knowledge across Africa, making professional legal intelligence accessible to students, professionals, and everyday people who deserve better access to justice.</p>
                <p className="text-xl leading-relaxed">
                  Today, Lawexa serves over 15,000 users across 130+ universities and countless 
                  professionals, saving them millions of naira in legal fees while empowering them 
                  with the knowledge they need to make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-lg text-gray-600">To democratise legal knowledge across Africa by providing AI-powered legal intelligence that is accessible, affordable, and accurate for everyone, from law students to everyday citizens.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-lg text-gray-600">
                  A future where every African has equal access to legal knowledge and can confidently 
                  navigate legal challenges without barriers of cost, complexity, or geographic location.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => {
              const IconComponent = value.icon;
              return <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>;
            })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => <div key={index} className="bg-white rounded-2xl p-6 shadow-medium hover:shadow-large transition-shadow duration-300">
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
                    <p className="text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-lawexa-dark text-white bg-slate-950">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Our Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl md:text-6xl font-bold text-primary mb-2">
                  <RollingNumber value={15000} formatNumber={num => `${num.toLocaleString()}+`} />
                </div>
                <p className="text-xl text-gray-300">Active Users</p>
              </div>
              <div>
                <div className="text-4xl md:text-6xl font-bold text-primary mb-2">
                  <RollingNumber value={130} formatNumber={num => `${num}+`} />
                </div>
                <p className="text-xl text-gray-300">Universities Served</p>
              </div>
              <div>
                <div className="text-4xl md:text-6xl font-bold text-primary mb-2">
                  <RollingNumber value={50} formatNumber={num => `₦${num}M+`} />
                </div>
                <p className="text-xl text-gray-300">Saved in Legal Fees</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Welcome to the Future</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Be part of the movement that's transforming how Africa accesses legal knowledge. 
              Start your journey with Lawexa today.
            </p>
            <Link to="/signup" className="inline-block">
              <button className="btn-gold text-lg px-8 py-4">
                Get Started For Free
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default AboutUs;