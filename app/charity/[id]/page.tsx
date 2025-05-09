"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import {
  Heart,
  Share2,
  MapPin,
  Calendar,
  Users,
  Shield,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Download,
  ExternalLink,
  ImageIcon,
  FileText,
  BarChart3,
  Sparkles,
  Mail,
  Phone,
  Globe,
  Play,
} from "lucide-react"
import Link from "next/link"
import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"
import { TrustBadgeGroup } from "@/components/TrustBadge"

const CharityDetailPage = () => {
  const params = useParams()
  const router = useRouter()
  const { id } = params
  const [activeTab, setActiveTab] = useState("overview")
  const [activeAccordion, setActiveAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  // Sample charity data
  const charity = {
    id: Number.parseInt(id as string),
    name: "Educate India Foundation",
    category: "Education",
    location: "Delhi, India",
    rating: 4.8,
    verified: true,
    established: "2010",
    description:
      "Educate India Foundation is dedicated to providing quality education to underprivileged children across rural India. We believe that education is the most powerful tool to transform lives and create a better future for all.",
    longDescription:
      "Founded in 2010, Educate India Foundation has been working tirelessly to bridge the education gap in rural India. Our programs focus on providing access to quality education, training teachers, building and improving school infrastructure, and developing innovative teaching methodologies. We work closely with local communities to ensure that our initiatives are sustainable and have a lasting impact. Through our efforts, we have helped thousands of children receive the education they deserve and opened doors to opportunities they might not have had otherwise.",
    mission:
      "To ensure that every child in India has access to quality education regardless of their socioeconomic background.",
    vision: "A future where education empowers every child to reach their full potential and contribute to society.",
    impact: {
      studentsHelped: 15000,
      schoolsSupported: 120,
      teachersTrained: 850,
      villagesReached: 75,
    },
    financials: {
      totalRaised: 12500000,
      goal: 20000000,
      adminExpenses: 8,
      programExpenses: 92,
    },
    team: [
      {
        name: "Rajesh Kumar",
        role: "Founder & CEO",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        name: "Priya Sharma",
        role: "Program Director",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        name: "Amit Patel",
        role: "Finance Director",
        image: "https://randomuser.me/api/portraits/men/62.jpg",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1550975558-5dc56be1e0e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    testimonials: [
      {
        quote:
          "The Educate India Foundation has transformed our village. Children who had no access to proper education are now thriving academically.",
        name: "Ramesh Singh",
        role: "Village Head, Rajasthan",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
      },
      {
        quote:
          "As a teacher who received training from this organization, I can confidently say that their methods have revolutionized how I teach and connect with students.",
        name: "Sunita Devi",
        role: "Teacher, Bihar",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
      },
    ],
    faqs: [
      {
        question: "How does my donation help?",
        answer:
          "Your donation directly supports our educational programs, including building and improving schools, providing learning materials, training teachers, and implementing innovative teaching methodologies. We ensure that at least 92% of all donations go directly to these programs.",
      },
      {
        question: "Can I volunteer with your organization?",
        answer:
          "Yes, we welcome volunteers who are passionate about education. We have various volunteering opportunities, from teaching and mentoring to administrative support and fundraising. Please contact us for more information on how you can get involved.",
      },
      {
        question: "How do you measure your impact?",
        answer:
          "We track various metrics to measure our impact, including student enrollment and retention rates, academic performance, teacher effectiveness, and community engagement. We conduct regular assessments and publish annual impact reports that are available on our website.",
      },
      {
        question: "Are donations tax-deductible?",
        answer:
          "Yes, all donations to Educate India Foundation are tax-deductible under Section 80G of the Income Tax Act. You will receive an official receipt for your donation that you can use for tax purposes.",
      },
    ],
    documents: [
      { name: "Annual Report 2022", type: "PDF", size: "2.4 MB" },
      { name: "Financial Statement", type: "PDF", size: "1.8 MB" },
      { name: "Registration Certificate", type: "PDF", size: "1.2 MB" },
      { name: "80G Certificate", type: "PDF", size: "0.9 MB" },
    ],
  }

  // Format currency
  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)}Cr`
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`
    } else if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(1)}K`
    } else {
      return `₹${amount}`
    }
  }

  // Calculate percentage of goal raised
  const calculateProgress = (raised, goal) => {
    return Math.min(Math.round((raised / goal) * 100), 100)
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 to-indigo-700 py-20 px-4 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <div className="inline-block mb-4">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium">
                    <Sparkles className="h-4 w-4 inline-block mr-2 text-yellow-300" />
                    <span>{charity.category}</span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{charity.name}</h1>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{charity.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Est. {charity.established}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{charity.impact.studentsHelped.toLocaleString()} beneficiaries</span>
                  </div>
                </div>
                <p className="text-lg opacity-90 mb-8">{charity.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Link href={`/donate?charity=${charity.id}`}>
                    <Button className="gap-2 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all">
                      <Heart className="h-5 w-5" />
                      <span>Donate Now</span>
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="gap-2 border-white/30 hover:bg-white/10"
                    onClick={() => {
                      if (navigator.share) {
                        navigator
                          .share({
                            title: charity.name,
                            text: `Support ${charity.name} on SatisfyGain`,
                            url: window.location.href,
                          })
                          .catch((err) => console.error("Error sharing:", err))
                      } else {
                        // Fallback for browsers that don't support the Web Share API
                        navigator.clipboard
                          .writeText(window.location.href)
                          .then(() => alert("Link copied to clipboard!"))
                          .catch((err) => console.error("Error copying link:", err))
                      }
                    }}
                  >
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Fundraising Goal</h3>
                    {charity.verified && (
                      <div className="flex items-center gap-1 bg-green-500/20 px-2 py-1 rounded-full text-xs">
                        <Shield className="h-3 w-3" />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="opacity-90">Raised:</span>
                      <span className="font-medium">{formatCurrency(charity.financials.totalRaised)}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="opacity-90">Goal:</span>
                      <span className="font-medium">{formatCurrency(charity.financials.goal)}</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-pink-500 to-yellow-500 h-2 rounded-full"
                        style={{
                          width: `${calculateProgress(charity.financials.totalRaised, charity.financials.goal)}%`,
                        }}
                      ></div>
                    </div>
                    <div className="text-right text-sm mt-1">
                      {calculateProgress(charity.financials.totalRaised, charity.financials.goal)}% Complete
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="opacity-90">Program Expenses:</span>
                      <span className="font-medium">{charity.financials.programExpenses}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="opacity-90">Admin Expenses:</span>
                      <span className="font-medium">{charity.financials.adminExpenses}%</span>
                    </div>
                  </div>
                  <Link href={`/donate?charity=${charity.id}`} className="block">
                    <Button className="w-full gap-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:from-pink-600 hover:to-yellow-600">
                      <Heart className="h-5 w-5" />
                      <span>Support This Cause</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Navigation */}
        <section className="bg-white border-b py-4 sticky top-0 z-10 shadow-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex overflow-x-auto pb-2 gap-4">
              {[
                { id: "overview", label: "Overview", icon: <BarChart3 className="h-4 w-4" /> },
                { id: "impact", label: "Impact", icon: <Sparkles className="h-4 w-4" /> },
                { id: "gallery", label: "Gallery", icon: <ImageIcon className="h-4 w-4" /> },
                { id: "team", label: "Team", icon: <Users className="h-4 w-4" /> },
                { id: "documents", label: "Documents", icon: <FileText className="h-4 w-4" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                  {/* About Section */}
                  <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">About {charity.name}</h2>
                      <p className="text-gray-600 mb-6">{charity.longDescription}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
                          <p className="text-gray-600">{charity.mission}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Vision</h3>
                          <p className="text-gray-600">{charity.vision}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <a href="https://educateindia.org" target="_blank" rel="noopener noreferrer">
                          <Button className="gap-2">
                            <ExternalLink className="h-4 w-4" />
                            <span>Visit Website</span>
                          </Button>
                        </a>
                        <Button
                          variant="outline"
                          className="gap-2"
                          onClick={() => alert("Brochure download will be available soon!")}
                        >
                          <Download className="h-4 w-4" />
                          <span>Download Brochure</span>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Impact Stats */}
                  <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Impact</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-purple-600 mb-2">
                            {charity.impact.studentsHelped.toLocaleString()}
                          </div>
                          <div className="text-gray-600">Students Helped</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-indigo-600 mb-2">
                            {charity.impact.schoolsSupported.toLocaleString()}
                          </div>
                          <div className="text-gray-600">Schools Supported</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-600 mb-2">
                            {charity.impact.teachersTrained.toLocaleString()}
                          </div>
                          <div className="text-gray-600">Teachers Trained</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-pink-600 mb-2">
                            {charity.impact.villagesReached.toLocaleString()}
                          </div>
                          <div className="text-gray-600">Villages Reached</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonials */}
                  <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Testimonials</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {charity.testimonials.map((testimonial, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-6">
                            <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                            <div className="flex items-center gap-3">
                              <img
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <div>
                                <div className="font-medium text-gray-900">{testimonial.name}</div>
                                <div className="text-sm text-gray-500">{testimonial.role}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* FAQs */}
                  <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                      <div className="space-y-4">
                        {charity.faqs.map((faq, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                              className="w-full flex items-center justify-between p-4 text-left bg-gray-50"
                              onClick={() => toggleAccordion(index)}
                            >
                              <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                              {activeAccordion === index ? (
                                <ChevronUp className="h-5 w-5 text-gray-500" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-500" />
                              )}
                            </button>
                            {activeAccordion === index && (
                              <div className="p-4 bg-white">
                                <p className="text-gray-600">{faq.answer}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Donation CTA */}
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-md text-white p-6">
                    <h3 className="text-xl font-bold mb-4">Make a Difference Today</h3>
                    <p className="opacity-90 mb-6">
                      Your donation will help us continue our mission to provide quality education to underprivileged
                      children.
                    </p>
                    <Link href={`/donate?charity=${charity.id}`} className="block">
                      <Button className="w-full bg-white text-indigo-700 hover:bg-white/90">Donate Now</Button>
                    </Link>
                  </div>

                  {/* Trust Badges */}
                  <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Trusted Platform</h3>
                    <TrustBadgeGroup theme="light" className="flex-col items-start gap-3" />
                  </div>

                  {/* Verification */}
                  <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Shield className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Verified Organization</h3>
                        <p className="text-sm text-gray-600">Thoroughly vetted by SatisfyGain</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">Legal Registration Verified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">Financial Transparency</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">Impact Reporting</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">On-ground Verification</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-700">123 Charity Lane, Delhi, India</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-700">info@educateindia.org</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-700">+91 98765 43210</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-gray-500" />
                        <a href="#" className="text-purple-600 hover:underline">
                          www.educateindia.org
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Impact Tab */}
            {activeTab === "impact" && (
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Impact</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                      <div className="bg-purple-50 rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                          {charity.impact.studentsHelped.toLocaleString()}
                        </div>
                        <div className="text-gray-700">Students Helped</div>
                      </div>
                      <div className="bg-indigo-50 rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-indigo-600 mb-2">
                          {charity.impact.schoolsSupported.toLocaleString()}
                        </div>
                        <div className="text-gray-700">Schools Supported</div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          {charity.impact.teachersTrained.toLocaleString()}
                        </div>
                        <div className="text-gray-700">Teachers Trained</div>
                      </div>
                      <div className="bg-pink-50 rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-pink-600 mb-2">
                          {charity.impact.villagesReached.toLocaleString()}
                        </div>
                        <div className="text-gray-700">Villages Reached</div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact Stories</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                          alt="Impact Story"
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="text-lg font-medium text-gray-900 mb-2">Transforming Rural Schools</h4>
                          <p className="text-gray-600 mb-4">
                            Our infrastructure development program has helped renovate 50 schools in rural areas,
                            providing better learning environments for over 5,000 students.
                          </p>
                          <Button variant="outline" className="gap-2">
                            <span>Read More</span>
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                          alt="Impact Story"
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="text-lg font-medium text-gray-900 mb-2">Teacher Training Initiative</h4>
                          <p className="text-gray-600 mb-4">
                            Our comprehensive teacher training program has equipped 850 teachers with modern teaching
                            methodologies, benefiting thousands of students.
                          </p>
                          <Button variant="outline" className="gap-2">
                            <span>Read More</span>
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Transparency & Accountability</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Fund Allocation</h3>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-700">Program Expenses</span>
                              <span className="font-medium text-gray-900">{charity.financials.programExpenses}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-green-600 h-2 rounded-full"
                                style={{ width: `${charity.financials.programExpenses}%` }}
                              ></div>
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-700">Administrative Expenses</span>
                              <span className="font-medium text-gray-900">{charity.financials.adminExpenses}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${charity.financials.adminExpenses}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6">
                          <h4 className="font-medium text-gray-900 mb-2">Program Breakdown</h4>
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                              <span>School Infrastructure: 35%</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                              <span>Teacher Training: 25%</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                              <span>Learning Materials: 20%</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-pink-600"></div>
                              <span>Student Scholarships: 15%</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-green-600"></div>
                              <span>Community Engagement: 5%</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Impact Measurement</h3>
                        <p className="text-gray-600 mb-4">
                          We believe in transparent reporting and rigorous impact measurement. Our methodology includes:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                              <CheckCircle className="h-4 w-4 text-purple-600" />
                            </div>
                            <span className="text-gray-700">Regular student assessment and progress tracking</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                              <CheckCircle className="h-4 w-4 text-purple-600" />
                            </div>
                            <span className="text-gray-700">Teacher effectiveness evaluations</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                              <CheckCircle className="h-4 w-4 text-purple-600" />
                            </div>
                            <span className="text-gray-700">Community feedback and engagement metrics</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                              <CheckCircle className="h-4 w-4 text-purple-600" />
                            </div>
                            <span className="text-gray-700">Independent third-party evaluations</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                              <CheckCircle className="h-4 w-4 text-purple-600" />
                            </div>
                            <span className="text-gray-700">Comprehensive annual impact reports</span>
                          </li>
                        </ul>

                        <div className="mt-6">
                          <Button
                            className="gap-2"
                            onClick={() => alert("Impact report download will be available soon!")}
                          >
                            <Download className="h-4 w-4" />
                            <span>Download Impact Report</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Gallery Tab */}
            {activeTab === "gallery" && (
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {charity.gallery.map((image, index) => (
                        <div
                          key={index}
                          className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-64 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Videos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="rounded-lg overflow-hidden shadow-sm">
                        <div className="aspect-video bg-gray-200 flex items-center justify-center">
                          <Play className="h-12 w-12 text-gray-400" />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-gray-900 mb-1">Our Mission in Action</h3>
                          <p className="text-gray-600 text-sm">See how we're transforming education in rural India</p>
                        </div>
                      </div>

                      <div className="rounded-lg overflow-hidden shadow-sm">
                        <div className="aspect-video bg-gray-200 flex items-center justify-center">
                          <Play className="h-12 w-12 text-gray-400" />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-gray-900 mb-1">Student Success Stories</h3>
                          <p className="text-gray-600 text-sm">Hear from the students whose lives we've changed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Team Tab */}
            {activeTab === "team" && (
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {charity.team.map((member, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full h-64 object-cover"
                          />
                          <div className="p-4 text-center">
                            <h3 className="text-lg font-medium text-gray-900 mb-1">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Partners</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[1, 2, 3, 4].map((partner) => (
                        <div key={partner} className="bg-gray-50 p-6 rounded-lg flex items-center justify-center">
                          <div className="h-16 w-32 bg-gray-200 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Documents Tab */}
            {activeTab === "documents" && (
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Documents & Reports</h2>
                    <div className="space-y-4">
                      {charity.documents.map((document, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="bg-purple-100 p-2 rounded-lg">
                              <FileText className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">{document.name}</h3>
                              <p className="text-sm text-gray-500">
                                {document.type} • {document.size}
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="gap-2">
                            <Download className="h-4 w-4" />
                            <span>Download</span>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-2">Registration Details</h3>
                        <div className="space-y-2 text-gray-600">
                          <div className="flex justify-between">
                            <span>Registration Type:</span>
                            <span>Non-Profit Organization</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Registration Number:</span>
                            <span>NPO12345678</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Date of Registration:</span>
                            <span>January 15, 2010</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Tax Exemption Status:</span>
                            <span>80G Certified</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-2">Compliance</h3>
                        <div className="space-y-2 text-gray-600">
                          <div className="flex justify-between">
                            <span>FCRA Registration:</span>
                            <span>Yes (FCRA123456)</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Annual Returns Filed:</span>
                            <span>Up to Date</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Audit Status:</span>
                            <span>Completed for FY 2022-23</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Governing Document:</span>
                            <span>Trust Deed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Donation CTA */}
        <section className="py-12 px-4 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Support Our Mission</h2>
            <p className="text-xl mb-8 opacity-90">
              Your donation can help us provide quality education to more underprivileged children across India.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href={`/donate?charity=${charity.id}`}>
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all px-8"
                >
                  <Heart className="h-5 w-5" />
                  <span>Donate Now</span>
                </Button>
              </Link>
              <a href="mailto:volunteer@educateindia.org">
                <Button size="lg" variant="outline" className="gap-2 border-white/30 hover:bg-white/10 px-8">
                  <Users className="h-5 w-5" />
                  <span>Become a Volunteer</span>
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default CharityDetailPage
