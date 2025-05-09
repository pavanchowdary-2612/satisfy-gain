"use client"

import Link from "next/link"

import { useState } from "react"
import { Heart, Users, Globe, Sparkles, ArrowRight, Mail, Phone, MapPin, ChevronDown, ChevronUp } from "lucide-react"
import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"

const AboutPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const teamMembers = [
    {
      name: "K. Pavan Kumar Chowdary",
      role: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Visionary entrepreneur with a passion for leveraging technology to create social impact and transform charitable giving.",
    },
    {
      name: "Priya Sharma",
      role: "Program Director",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "15+ years experience in the non-profit sector with expertise in program development and implementation.",
    },
    {
      name: "Amit Patel",
      role: "CTO",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      bio: "AI expert focused on creating technology for social good and transparent donation systems.",
    },
    {
      name: "Anjali Verma",
      role: "Impact Officer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Specializes in measuring and reporting social impact across diverse charitable initiatives.",
    },
  ]

  const faqs = [
    {
      question: "How does SatisfyGain verify charities?",
      answer:
        "We have a rigorous verification process that includes legal checks, financial audits, and impact assessment. We only list organizations that meet our strict criteria for transparency and effectiveness.",
    },
    {
      question: "How much of my donation goes to the cause?",
      answer:
        "At least 98% of your donation goes directly to the cause. We maintain a small 2% platform fee to cover operational costs and continue improving our services.",
    },
    {
      question: "Can I get a tax receipt for my donations?",
      answer:
        "Yes, all donations made through SatisfyGain are eligible for tax benefits under Section 80G. You'll receive an official receipt via email immediately after your donation.",
    },
    {
      question: "How does the AI-powered matching work?",
      answer:
        "Our AI analyzes your interests, past donation behavior, and the causes you care about to suggest charities that align with your values. The more you use the platform, the better our recommendations become.",
    },
    {
      question: "Can I set up recurring donations?",
      answer:
        "Yes, you can set up monthly, quarterly, or annual recurring donations to any charity on our platform. You can manage or cancel your recurring donations at any time from your dashboard.",
    },
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-600 to-indigo-700 py-20 px-4 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="inline-block mb-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium">
                <Sparkles className="h-4 w-4 inline-block mr-2 text-yellow-300" />
                <span>Our Mission & Vision</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">About SatisfyGain</h1>
            <p className="text-xl opacity-90 max-w-3xl mb-8">
              We're revolutionizing charitable giving through technology, transparency, and trust.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4">
                  <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                    Our Story
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey of Impact</h2>
                <p className="text-gray-600 mb-6">
                  SatisfyGain was founded in 2024 with a simple mission: to make charitable giving more transparent,
                  effective, and accessible to everyone. We saw a gap in the market where donors wanted to know exactly
                  how their contributions were making a difference.
                </p>
                <p className="text-gray-600 mb-6">
                  Our team of technologists, social impact experts, and non-profit veterans came together to build a
                  platform that uses cutting-edge technology to connect donors with verified causes that align with
                  their values.
                </p>
                <p className="text-gray-600 mb-6">
                  Today, we've helped over 1 million donors contribute to meaningful change across India, with 98% of
                  donations going directly to the causes that need them most.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="SatisfyGain team working"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Heart className="h-8 w-8 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">1M+</div>
                      <div className="text-sm text-gray-500">Lives Impacted</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                  Our Values
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Drives Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our core values guide everything we do, from how we build our platform to how we interact with donors
                and charities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="bg-purple-100 p-3 rounded-lg w-fit mb-6">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
                <p className="text-gray-600">
                  We believe in complete transparency in how donations are used and the impact they create. Every rupee
                  is tracked and reported.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="bg-indigo-100 p-3 rounded-lg w-fit mb-6">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusivity</h3>
                <p className="text-gray-600">
                  We make giving accessible to everyone, regardless of how much they can donate. Every contribution
                  matters, no matter how small.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
                <p className="text-gray-600">
                  We focus on measurable impact, ensuring that every donation creates real, tangible change in the
                  communities we serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">Our Team</div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the People Behind SatisfyGain</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our diverse team brings together expertise in technology, non-profit management, and social impact.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group"
                >
                  <div className="h-64 relative overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-white/80">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">FAQ</div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about SatisfyGain and how we work.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    {activeAccordion === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {activeAccordion === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4">
                  <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                    Contact Us
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-6">
                  Have questions or want to learn more about SatisfyGain? We'd love to hear from you.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="font-medium">help@satisfygain.org</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-indigo-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Phone</div>
                      <div className="font-medium">+91 98765 43210</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Address</div>
                      <div className="font-medium">123 Charity Lane, Mumbai, India</div>
                    </div>
                  </div>
                </div>

                <Button className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                  <span>Contact Support</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <form className="p-8">
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 opacity-90">Join our community of donors creating real change</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <Link href="/charities">
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl hover:from-pink-600 hover:to-yellow-600 transition-all"
                  >
                    <span className="font-bold text-lg">Start Donating Today</span>
                  </Button>
                </Link>
              </div>
              <div>
                <Link href="/auth">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-10 py-6 text-lg border-2 border-white text-white hover:bg-white/10 hover:shadow-lg backdrop-blur-sm transition-all"
                  >
                    <span className="font-bold text-lg">Create Account</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage
