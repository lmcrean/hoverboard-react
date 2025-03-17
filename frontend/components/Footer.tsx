import React from 'react';

const Footer = () => {
  // Social media links config
  const socialLinks = [
    { name: 'Facebook', icon: '/assets/media/icons/facebook.svg', href: 'https://facebook.com' },
    { name: 'Instagram', icon: '/assets/media/icons/instagram.svg', href: 'https://instagram.com' },
    { name: 'GitHub', icon: '/assets/media/icons/github.svg', href: 'https://github.com' },
    { name: 'LinkedIn', icon: '/assets/media/icons/linkedin.svg', href: 'https://linkedin.com' },
    { name: 'TikTok', icon: '/assets/media/icons/tiktok.svg', href: 'https://tiktok.com' },
    { name: 'YouTube', icon: '/assets/media/icons/youtube.svg', href: 'https://youtube.com' },
    { name: 'Discord', icon: '/assets/media/icons/discord.svg', href: 'https://discord.com' },
    { name: 'Slack', icon: '/assets/media/icons/slack.svg', href: 'https://slack.com' }
  ];

  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Social Media Icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 focus:scale-110"
                aria-label={`Visit our ${social.name} page`}
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-8 h-8 opacity-50 hover:opacity-75"
                />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400">
            <p className="mb-2">© {new Date().getFullYear()} Hoverboard</p>
            <div className="flex justify-center gap-8 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-gray-600 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-gray-600 transition-colors">
                Terms of Service
              </a>
              <a href="/contact" className="text-gray-400 hover:text-gray-600 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;