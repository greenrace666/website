import React from 'react';
import { Twitter, Linkedin, Github, BookOpen } from 'lucide-react';

const SocialHub = () => {
  const socialLinks = [
    {
      platform: 'GitHub',
      icon: Github,
      username: '@nikilkrishna',
      link: 'https://github.com/nikilkrishna'
    },
    {
      platform: 'LinkedIn',
      icon: Linkedin,
      username: 'Nikil Krishna',
      link: 'https://linkedin.com/in/nikilkrishna'
    },
    {
      platform: 'Twitter',
      icon: Twitter,
      username: '@nikilkrishna_bio',
      link: 'https://twitter.com/nikilkrishna_bio'
    },
    {
      platform: 'Research Gate',
      icon: BookOpen,
      username: 'Nikil Krishna',
      link: 'https://researchgate.net/profile/nikilkrishna'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Connect With Me</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <social.icon className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="font-semibold">{social.platform}</h3>
              </div>
              <p className="text-gray-600">{social.username}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialHub;