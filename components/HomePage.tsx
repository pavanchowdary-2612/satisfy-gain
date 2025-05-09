"use client"

import { useState, useEffect } from "react"
import {
  Heart,
  Shield,
  Clock,
  ArrowRight,
  Star,
  Plus,
  X,
  Play,
  Mail,
  TrendingUp,
  HeartHandshake,
  Wallet,
  Sparkles,
  Globe,
  Users,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrustBadgeGroup } from "./TrustBadge"

// Enhanced Button component with beautiful styling
const GradientButton = ({ children, className = "", size = "default", variant = "default", ...props }) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
  const sizeStyles = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-lg",
    lg: "h-12 px-8 rounded-xl text-lg",
  }
  const variantStyles = {
    default:
      "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl",
    outline:
      "border-2 border-white/80 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white hover:shadow-lg",
    secondary: "bg-white text-gray-900 shadow hover:shadow-md hover:bg-gray-50",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "underline-offset-4 hover:underline text-primary",
  }

  return (
    <button className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Custom Card components with enhanced styling
const Card = ({ className = "", ...props }) => (
  <div
    className={`rounded-2xl border border-gray-100 bg-white text-card-foreground shadow-md hover:shadow-lg transition-shadow ${className}`}
    {...props}
  />
)

const CardHeader = ({ className = "", ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
)

const CardTitle = ({ className = "", ...props }) => (
  <h3 className={`text-2xl font-bold leading-none tracking-tight ${className}`} {...props} />
)

const CardContent = ({ className = "", ...props }) => <div className={`p-6 pt-0 ${className}`} {...props} />

const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const [email, setEmail] = useState("")
  const [showVideo, setShowVideo] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Image URLs
  const images = {
    hero: "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    features: [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    causes: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1576765974257-b414b9ea0051?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    testimonials: [
      "https://randomuser.me/api/portraits/women/44.jpg",
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/women/68.jpg",
    ],
    steps: [
      {
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "Sign Up",
        description: "Create your account in minutes",
      },
      {
        image:
          "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "Choose Amount",
        description: "Give any amount, even ₹10",
      },
      {
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "Select Cause",
        description: "Pick or let AI suggest",
      },
      {
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        title: "See Impact",
        description: "Track your donation's effect",
      },
    ],
  }

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Verified",
      description: "Every NGO is thoroughly vetted before listing",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI-Powered Matching",
      description: "Personalized recommendations for you",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Real-Time Tracking",
      description: "See your donation's journey",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Plus className="h-6 w-6" />,
      title: "Small Amounts Welcome",
      description: "Pool with others for greater impact",
      color: "bg-teal-100 text-teal-600",
    },
  ]

  const causes = [
    { name: "Child Education", color: "bg-blue-100 text-blue-800", icon: <Users className="h-5 w-5" /> },
    { name: "Elderly Care", color: "bg-purple-100 text-purple-800", icon: <Heart className="h-5 w-5" /> },
    { name: "Healthcare", color: "bg-green-100 text-green-800", icon: <Shield className="h-5 w-5" /> },
    { name: "Disaster Relief", color: "bg-red-100 text-red-800", icon: <Zap className="h-5 w-5" /> },
    { name: "Women Empowerment", color: "bg-pink-100 text-pink-800", icon: <Star className="h-5 w-5" /> },
    { name: "Animal Welfare", color: "bg-indigo-100 text-indigo-800", icon: <Globe className="h-5 w-5" /> },
  ]

  const testimonials = [
    {
      quote:
        "SatisfyGain helped me find causes that truly resonate with my values. Their ₹100 donation helped feed 5 kids today!",
      name: "Priya K.",
      role: "Monthly Donor",
    },
    {
      quote: "The transparency is amazing - I can see exactly where my money goes and the impact it creates.",
      name: "Rahul S.",
      role: "First-time Donor",
    },
    {
      quote: "The AI suggestions helped me find causes I truly care about. I've never felt so connected to my giving.",
      name: "Anjali M.",
      role: "Regular Donor",
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you for subscribing with ${email}!`)
    setEmail("")
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-200 z-50"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/6zNq60a4g3M?si=0k9G0sM9oNpYVn7S"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.hero || "/placeholder.svg"}
            alt="Community hands together"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-indigo-800/70" />
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="mb-6 inline-block">
            <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white/90 text-sm font-medium">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span>Empowering change through transparent giving</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg px-4">
            Transform Lives with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300">
              SatisfyGain
            </span>
          </h1>

          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 px-4">
            Join 1M+ donors creating real change through transparent, secure giving
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <Link href="/charities">
                <GradientButton
                  size="lg"
                  className="relative bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-8 py-6 text-lg shadow-2xl hover:shadow-3xl transition-all"
                >
                  <span className="font-bold">Start Donating</span> <ArrowRight className="ml-2 h-5 w-5" />
                </GradientButton>
              </Link>
            </div>
            <div>
              <GradientButton
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-2 border-white/80 text-white hover:bg-white/10 hover:border-white hover:shadow-lg backdrop-blur-sm"
                onClick={() => setShowVideo(true)}
              >
                <span className="font-bold">Watch Our Story</span> <Play className="ml-2 h-5 w-5" />
              </GradientButton>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16">
            <TrustBadgeGroup theme="dark" />
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Impact Numbers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "₹850M+", label: "Raised for Causes", icon: TrendingUp, color: "bg-purple-100 text-purple-600" },
              { value: "1.2M", label: "Lives Impacted", icon: HeartHandshake, color: "bg-indigo-100 text-indigo-600" },
              { value: "98%", label: "Direct to Cause", icon: Wallet, color: "bg-blue-100 text-blue-600" },
              { value: "4.9★", label: "Donor Rating", icon: Star, color: "bg-pink-100 text-pink-600" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div
                  className={`${stat.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}
                >
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                Our Unique Approach
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why SatisfyGain?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Revolutionizing philanthropy through technology and transparency
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="relative"
              >
                <div className="h-full">
                  <Card className="h-full bg-white overflow-hidden group hover:border-purple-200 transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-600/30" />
                      <img
                        src={images.features[index] || "/placeholder.svg"}
                        alt={feature.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`${feature.color} p-3 rounded-lg`}>{feature.icon}</div>
                        <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-indigo-500/30" />
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
                alt="Donation process"
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 p-6 rounded-full hover:bg-white transition-all shadow-lg"
                onClick={() => setShowVideo(true)}
              >
                <Play className="h-8 w-8 text-purple-600" />
              </button>
            </div>

            <div>
              <div className="inline-block mb-2">
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  Testimonials
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Stories, Real Impact</h2>

              <div className="relative h-96">
                <div className="absolute inset-0">
                  <Card className="h-full border-purple-100 bg-gradient-to-br from-purple-50 to-white shadow-md">
                    <CardContent className="p-8 h-full flex flex-col justify-center">
                      <div className="flex justify-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-xl text-gray-700 mb-6 text-center">
                        "{testimonials[activeTestimonial].quote}"
                      </blockquote>
                      <div className="flex flex-col items-center">
                        <img
                          src={images.testimonials[activeTestimonial] || "/placeholder.svg"}
                          alt={testimonials[activeTestimonial].name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg mb-4"
                        />
                        <div>
                          <p className="font-medium text-center">{testimonials[activeTestimonial].name}</p>
                          <p className="text-gray-600 text-sm text-center">{testimonials[activeTestimonial].role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-center mt-8 gap-2 absolute bottom-0 left-0 right-0">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${activeTestimonial === index ? "bg-purple-600" : "bg-gray-300"}`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section with Images */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                Simple Process
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Simple steps to make a difference</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {images.steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden shadow-lg group">
                  <img
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-md">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <div className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">
                Make A Difference
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Supported Causes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Contribute to what matters most to you</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {causes.map((cause, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg cursor-pointer h-48 group ${cause.color} hover:shadow-lg transition-all`}
              >
                <img
                  src={images.causes[index] || "/placeholder.svg"}
                  alt={cause.name}
                  className="w-full h-full object-cover absolute inset-0 mix-blend-multiply opacity-90 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex flex-col justify-end p-4">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg inline-flex items-center gap-2 mb-2 w-fit">
                    {cause.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg drop-shadow-lg">{cause.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-purple-600 to-indigo-600 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="mb-6 opacity-90">
                  Join our newsletter to receive updates on new causes and impact stories.
                </p>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6" />
                  <span>Never spam, unsubscribe anytime</span>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium py-3"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Beautiful Buttons */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 opacity-90">Join our community of donors creating real change</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <Link href="/charities">
                <GradientButton
                  size="lg"
                  className="relative bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl hover:from-pink-600 hover:to-yellow-600 transition-all"
                >
                  <span className="font-bold text-lg">Start Donating Today</span>
                </GradientButton>
              </Link>
            </div>
            <div>
              <Link href="/about">
                <GradientButton
                  size="lg"
                  variant="outline"
                  className="px-10 py-6 text-lg border-2 border-white text-white hover:bg-white/10 hover:shadow-lg backdrop-blur-sm transition-all"
                >
                  <span className="font-bold text-lg">Learn More</span>
                </GradientButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
