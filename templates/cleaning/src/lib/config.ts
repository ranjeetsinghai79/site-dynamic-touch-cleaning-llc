import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Dynamic Touch Cleaning LLC",
    tagline: "Clean Spaces, Happy Faces. Always.",
    phone: "(209) 416-7631",
    phoneHref: "tel:+12094167631",
    email: "info@dynamictouchcleaning.com",
    address: "123 Main St",
    city: "Modesto",
    serviceAreas: ["Modesto", "Tracy", "Stockton"],
    license: "WOSB/SB/MB certified",
    since: "2018",
    google_rating: "5.0",
    review_count: "75",
    emergency: false,
    theme: "ocean",
    niche: "cleaning",
  },

  services: [
    { icon: "briefcase", title: "Commercial Cleaning", desc: "Maintain a professional and healthy environment for your business with our comprehensive commercial cleaning services.", urgent: false },
    { icon: "truck", title: "Industrial Cleaning", desc: "Specialized cleaning solutions for industrial facilities, ensuring safety and compliance in demanding environments.", urgent: false },
    { icon: "home", title: "Residential Cleaning", desc: "Enjoy a spotless home without the hassle; our team provides thorough and reliable residential cleaning.", urgent: false },
    { icon: "sparkles", title: "Parks & Recreation Cleaning", desc: "Keep public spaces pristine and inviting with our dedicated cleaning services for parks and recreational areas.", urgent: false },
    { icon: "hammer", title: "Post Construction Cleaning", desc: "Remove all debris and dust after construction, leaving your new or renovated space move-in ready.", urgent: false },
    { icon: "droplets", title: "Tile & Grout Cleaning", desc: "Restore the shine and cleanliness of your tile and grout surfaces with our deep cleaning techniques.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Modesto", stars: 5, text: "Dynamic Touch Cleaning transformed our office! After years of trying different services, their detail-focused approach truly stands out. Our space has never looked better, and the team is incredibly professional and reliable. Highly recommend for any business looking for top-tier cleaning." },
    { name: "Mark T.", location: "Tracy", stars: 5, text: "We hired Dynamic Touch for post-construction cleanup at our new facility. They were prompt, thorough, and left the place absolutely spotless. The crew worked efficiently and paid attention to every detail, making the handover process so much smoother. Fantastic job!" },
    { name: "Jessica R.", location: "Stockton", stars: 5, text: "Our home feels brand new after Dynamic Touch Cleaning's visit! They tackled every corner, and the tile and grout look amazing. The team was friendly, respectful, and incredibly efficient. It's such a relief to come home to a sparkling clean house. Worth every penny!" }
  ],

  trustBadges: [
    "WOSB/SB/MB Certified", "Licensed & Insured", "Detail-Focused Cleaning", "Tailored Cleaning Plans", "Trusted by Businesses", "5-Star Rated"
  ],

  stats: [
    { value: 5.0, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 500, label: "Happy Clients", suffix: "+", decimals: 0 },
    { value: 5, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "sparkles", title: "Detail-Focused", desc: "We meticulously clean every nook and cranny, ensuring no detail is overlooked for a truly spotless finish." },
    { icon: "shield-check", title: "Trusted & Consistent", desc: "Count on us for reliable, consistent, and high-quality cleaning services every single time." },
    { icon: "heart", title: "Healthier Environments", desc: "Committed to creating cleaner, healthier spaces that promote well-being for everyone." },
    { icon: "scissors", title: "Tailored Cleaning Plans", desc: "Customized cleaning solutions designed to perfectly match your specific needs and priorities." },
    { icon: "award", title: "Certified & Insured", desc: "Fully licensed, insured, and certified professionals providing peace of mind with every service." },
    { icon: "thumbs-up", title: "Satisfaction Guaranteed", desc: "We stand by our work, ensuring your complete satisfaction with our cleaning results." }
  ],

  formServiceOptions: ["Commercial Cleaning", "Industrial Cleaning", "Residential Cleaning", "Parks & Recreation Cleaning", "Post Construction Cleaning", "Tile & Grout Cleaning"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!