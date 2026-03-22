"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import MetricCardEleven from "@/components/sections/metrics/MetricCardEleven";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Music, Star, Mail, Instagram, Twitter, Youtube } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="largeSmallSizeMediumTitles"
      background="circleGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="CMZ"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Music", id: "music" },
            { name: "Listen", id: "contact" }
          ]}
          button={{ text: "Stream Now", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDoubleCarousel
          title="CMZ – Redefining Modern Sound"
          description="High-energy producer and artist crafting genre-bending music that pushes creative boundaries. Experience a dynamic blend of electronic, hip-hop, and experimental beats that resonate globally."
          background={{ variant: "sparkles-gradient" }}
          leftCarouselItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/female-rock-star-blowing-bubbles-from-chewing-gum-nightclub_482257-117350.jpg",              imageAlt: "CMZ performing on stage with neon lights"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-musician-wearing-headphones_23-2150206741.jpg",              imageAlt: "CMZ in music production studio"
            }
          ]}
          rightCarouselItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/passionate-musician-celebrating-jazz-day_23-2148877009.jpg",              imageAlt: "CMZ professional artist portrait"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-psd/music-festival-youtube-cover-template_23-2150027017.jpg",              imageAlt: "CMZ album artwork visual"
            }
          ]}
          tag="Artist & Producer"
          tagIcon={Music}
          tagAnimation="slide-up"
          buttons={[
            { text: "Listen on Spotify", href: "https://spotify.com" },
            { text: "View Gallery", href: "#music" }
          ]}
          buttonAnimation="slide-up"
          avatarText="Join 50K+ music fans following CMZ"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/handsome-black-male-dressed-suit-from-wool_613910-15983.jpg", alt: "Fan 1" },
            { src: "http://img.b2bpic.net/free-photo/confident-businessman-smiling_107420-84734.jpg", alt: "Fan 2" },
            { src: "http://img.b2bpic.net/free-photo/close-up-studio-portrait-smiling-blonde-female-pink-jacket_613910-12467.jpg", alt: "Fan 3" },
            { src: "http://img.b2bpic.net/free-photo/man-portrait-posing-loft-modern-space_158595-5365.jpg", alt: "Fan 4" },
            { src: "http://img.b2bpic.net/free-photo/handsome-black-male-dressed-suit-from-wool_613910-15983.jpg", alt: "Fan 5" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "About CMZ – The Artist Behind the Sound" },
            { type: "image", src: "http://img.b2bpic.net/free-photo/man-relaxing-by-vaping-from-hookah-bar_23-2149191874.jpg", alt: "CMZ in creative environment" }
          ]}
          useInvertedBackground={false}
          buttons={[
            { text: "Follow on Instagram", href: "https://instagram.com" },
            { text: "Explore Discography", href: "#music" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="music" data-section="music">
        <ProductCardFour
          title="Latest Releases"
          description="Discover CMZ's latest tracks, EPs, and albums. Each release showcases evolved production techniques and artistic vision."
          tag="Featured Music"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "release-1",              name: "Neon Dreams",              price: "2024",              variant: "Album",              imageSrc: "http://img.b2bpic.net/free-psd/flat-design-music-template_23-2150311783.jpg",              imageAlt: "Neon Dreams album cover"
            },
            {
              id: "release-2",              name: "Electric Pulse",              price: "2024",              variant: "Single",              imageSrc: "http://img.b2bpic.net/free-vector/flat-design-minimal-music-festival-facebook-post_23-2149204157.jpg",              imageAlt: "Electric Pulse single cover"
            },
            {
              id: "release-3",              name: "Sonic Journey",              price: "2023",              variant: "EP",              imageSrc: "http://img.b2bpic.net/free-psd/dance-event-template-design_23-2150437124.jpg",              imageAlt: "Sonic Journey EP cover"
            }
          ]}
          buttons={[
            { text: "View All Releases", href: "#" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardEleven
          title="By the Numbers"
          description="CMZ's growing impact in the global music scene."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            { id: "metric-1", value: "50K+", title: "Followers", description: "Across all streaming platforms", imageSrc: "http://img.b2bpic.net/free-photo/handsome-black-male-dressed-suit-from-wool_613910-15983.jpg", imageAlt: "Followers metric icon" },
            { id: "metric-2", value: "2.5M", title: "Streams", description: "Monthly combined across platforms", imageSrc: "http://img.b2bpic.net/free-photo/confident-businessman-smiling_107420-84734.jpg", imageAlt: "Streams metric icon" },
            { id: "metric-3", value: "15", title: "Releases", description: "Albums, EPs, and singles", imageSrc: "http://img.b2bpic.net/free-photo/close-up-studio-portrait-smiling-blonde-female-pink-jacket_613910-12467.jpg", imageAlt: "Releases metric icon" },
            { id: "metric-4", value: "25+", title: "Countries", description: "Where music resonates", imageSrc: "http://img.b2bpic.net/free-photo/man-portrait-posing-loft-modern-space_158595-5365.jpg", imageAlt: "Countries metric icon" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="What Fans Are Saying"
          description="Real voices from the CMZ community."
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "testimonial-1",              title: "Mind-Bending Creativity",              quote: "CMZ's production is absolutely next-level. Every track takes me on a journey—innovative, bold, and refreshingly original.",              name: "Alex Rivera",              role: "Music Producer",              imageSrc: "http://img.b2bpic.net/free-photo/handsome-black-male-dressed-suit-from-wool_613910-15983.jpg"
            },
            {
              id: "testimonial-2",              title: "Pure Energy",              quote: "The energy in CMZ's live performances is unmatched. You can feel the passion behind every beat and every bar.",              name: "Jordan Lee",              role: "Music Journalist",              imageSrc: "http://img.b2bpic.net/free-photo/confident-businessman-smiling_107420-84734.jpg"
            },
            {
              id: "testimonial-3",              title: "Genre-Bending Excellence",              quote: "CMZ refuses to be confined to one genre. That artistic fearlessness is exactly what modern music needs.",              name: "Taylor Kim",              role: "Music Critic",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-studio-portrait-smiling-blonde-female-pink-jacket_613910-12467.jpg"
            },
            {
              id: "testimonial-4",              title: "Inspiring Artist",              quote: "Following CMZ's journey has inspired me to push my own creative boundaries. A true innovator in the scene.",              name: "Morgan Chase",              role: "Emerging Producer",              imageSrc: "http://img.b2bpic.net/free-photo/man-portrait-posing-loft-modern-space_158595-5365.jpg"
            },
            {
              id: "testimonial-5",              title: "Authentic Connection",              quote: "CMZ connects with fans on a real level. The music feels genuine, purposeful, and deeply resonant.",              name: "Casey Davis",              role: "Music Fan",              imageSrc: "http://img.b2bpic.net/free-photo/handsome-black-male-dressed-suit-from-wool_613910-15983.jpg"
            },
            {
              id: "testimonial-6",              title: "Future of Music",              quote: "CMZ represents the future of independent artists. Talented, independent, and unapologetically innovative.",              name: "Riley Mitchell",              role: "Artist Manager",              imageSrc: "http://img.b2bpic.net/free-photo/confident-businessman-smiling_107420-84734.jpg"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Stream CMZ Everywhere"
          description="CMZ's music is available on all major streaming platforms. Find your favorite way to listen."
          textboxLayout="default"
          useInvertedBackground={false}
          names={["Spotify", "Apple Music", "YouTube Music", "SoundCloud", "Bandcamp", "Amazon Music", "Tidal"]}
          logos={[
            "http://img.b2bpic.net/free-vector/music-logo-template_23-2149705593.jpg",            "http://img.b2bpic.net/free-photo/person-using-mobile-phone_53876-13413.jpg",            "http://img.b2bpic.net/free-psd/world-music-day-template-design_23-2150332618.jpg",            "http://img.b2bpic.net/free-photo/young-woman-holding-tablet-with-spotify-app_23-2147987821.jpg",            "http://img.b2bpic.net/free-photo/gamer-wearing-headphones-talking-with-friends-online-multiplayer-shooter_482257-116216.jpg",            "http://img.b2bpic.net/free-photo/lightbox-still-life-arrangement_23-2149198383.jpg",            "http://img.b2bpic.net/free-vector/flat-design-dj-logo-collection_23-2148873117.jpg"
          ]}
          showCard={true}
          speed={40}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Get In Touch"
          tagIcon={Mail}
          tagAnimation="slide-up"
          title="Join the CMZ Movement"
          description="Sign up for updates, exclusive content, and early access to new releases. Be part of the creative journey."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          buttons={[
            { text: "Subscribe Now", href: "#" },
            { text: "Contact Management", href: "#" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="CMZ"
          copyrightText="© 2024 CMZ | Independent Music Artist | All Rights Reserved"
          socialLinks={[
            { icon: Music, href: "https://spotify.com", ariaLabel: "Spotify" },
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Youtube, href: "https://youtube.com", ariaLabel: "YouTube" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}