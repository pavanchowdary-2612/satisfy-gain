"use client"

import { useState } from "react"
import {
  MessageSquare,
  Phone,
  Mail,
  FileText,
  ChevronDown,
  ChevronUp,
  Search,
  ArrowRight,
  Sparkles,
  BookOpen,
  HelpCircle,
  CheckCircle,
} from "lucide-react"
import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState("help-center")
  const [activeAccordion, setActiveAccordion] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const helpCategories = [
    {
      title: "Getting Started",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600",
      articles: 12,
    },
    {
      title: "Donations",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "bg-indigo-100 text-indigo-600",
      articles: 15,
    },
    {
      title: "Account Management",
      icon: <HelpCircle className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600",
      articles: 8,
    },
    {
      title: "Tax Benefits",
      icon: <FileText className="h-6 w-6" />,
      color: "bg-pink-100 text-pink-600",
      articles: 6,
    },
  ]

  const popularArticles = [
    {
      title: "How to set up recurring donations",
      category: "Donations",
      views: 1250,
    },
    {
      title: "Understanding your tax benefits",
      category: "Tax Benefits",
      views: 980,
    },
    {
      title: "How to update your payment method",
      category: "Account Management",
      views: 850,
    },
    {
      title: "Tracking the impact of your donations",
      category: "Donations",
      views: 720,
    },
    {
      title: "How to get your donation receipt",
      category: "Tax Benefits",
      views: 650,
    },
  ]

  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "Creating an account is simple. Click on the 'Sign In' button in the top right corner of the page, then select 'Create Account'. Fill in your details, verify your email, and you're ready to go!",
    },
    {
      question: "How can I track my donations?",
      answer:
        "You can track all your donations in your personal dashboard. Simply log in to your account and navigate to the 'Donations' tab to see your donation history, impact metrics, and upcoming recurring donations.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Absolutely. We use industry-standard encryption and security protocols to protect your payment information. We are PCI DSS compliant and never store your full credit card details on our servers.",
    },
    {
      question: "How do I get a tax receipt?",
      answer:
        "Tax receipts are automatically generated and emailed to you after each donation. You can also access all your tax receipts in the 'Tax Documents' section of your dashboard at any time.",
    },
    {
      question: "Can I change or cancel my recurring donation?",
      answer:
        "Yes, you can modify or cancel your recurring donations at any time. Go to your dashboard, select the 'Recurring Donations' section, and you'll find options to edit or cancel each recurring donation.",
    },
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-700 py-16 px-4 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block mb-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium">
                <Sparkles className="h-4 w-4 inline-block mr-2 text-yellow-300" />
                <span>We're Here to Help</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">How Can We Help You?</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 mb-8">
              Find answers to your questions or get in touch with our support team
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-none focus:ring-2 focus:ring-purple-300 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Tabs */}
        <section className="bg-white border-b py-4 sticky top-0 z-10 shadow-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex overflow-x-auto pb-2 gap-4">
              {[
                { id: "help-center", label: "Help Center", icon: <BookOpen className="h-4 w-4" /> },
                { id: "faqs", label: "FAQs", icon: <HelpCircle className="h-4 w-4" /> },
                { id: "contact", label: "Contact Us", icon: <MessageSquare className="h-4 w-4" /> },
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
            {/* Help Center */}
            {activeTab === "help-center" && (
              <div>
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Help Categories</h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {helpCategories.map((category, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`p-3 rounded-lg ${category.color}`}>{category.icon}</div>
                          <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                        </div>
                        <p className="text-sm text-gray-500">{category.articles} articles</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Articles</h2>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="divide-y divide-gray-100">
                      {popularArticles.map((article, index) => (
                        <div
                          key={index}
                          className="p-6 hover:bg-gray-50 transition-colors cursor-pointer flex items-center justify-between"
                        >
                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-1">{article.title}</h3>
                            <p className="text-sm text-gray-500">Category: {article.category}</p>
                          </div>
                          <Button variant="ghost" size="sm" className="gap-1">
                            <span>Read</span>
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FAQs */}
            {activeTab === "faqs" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
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

                <div className="mt-12 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Still have questions?</h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    If you couldn't find the answer to your question, our support team is here to help.
                  </p>
                  <Button
                    className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                    onClick={() => setActiveTab("contact")}
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Contact Support</span>
                  </Button>
                </div>
              </div>
            )}

            {/* Contact Us */}
            {activeTab === "contact" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Our Support Team</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all text-center">
                    <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Chat Support</h3>
                    <p className="text-gray-600 mb-4">Chat with our support team in real-time</p>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                      Start Chat
                    </Button>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all text-center">
                    <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                    <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours</p>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                      Email Us
                    </Button>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all text-center">
                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                    <p className="text-gray-600 mb-4">Call us directly at +91 98765 43210</p>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                      Call Now
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                    <form>
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
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

                        <div>
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
                      </div>

                      <div className="mb-6">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                          placeholder="What is your message about?"
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
            )}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default SupportPage
