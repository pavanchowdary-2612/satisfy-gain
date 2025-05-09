"use client"

import { useState } from "react"
import {
  Heart,
  TrendingUp,
  Calendar,
  Clock,
  ChevronRight,
  Wallet,
  User,
  Settings,
  Bell,
  Filter,
  Download,
  ArrowRight,
  Zap,
  BarChart3,
  PieChart,
  LineChart,
  Smile,
  Droplet,
  Globe,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"

// Card component
const Card = ({ className = "", ...props }) => (
  <div
    className={`bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all ${className}`}
    {...props}
  />
)

// Badge component
const Badge = ({ children, variant = "default", className = "", ...props }) => {
  const variantStyles = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
    info: "bg-purple-100 text-purple-800",
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data for the dashboard
  const donationStats = {
    totalDonated: 12500,
    monthlyAverage: 1250,
    donationCount: 15,
    impactScore: 125,
  }

  const recentDonations = [
    { id: 1, cause: "Child Education", amount: 2000, date: "2023-05-15", status: "completed" },
    { id: 2, cause: "Healthcare", amount: 1500, date: "2023-05-10", status: "completed" },
    { id: 3, cause: "Disaster Relief", amount: 3000, date: "2023-05-05", status: "completed" },
    { id: 4, cause: "Women Empowerment", amount: 1000, date: "2023-04-28", status: "completed" },
    { id: 5, cause: "Animal Welfare", amount: 500, date: "2023-04-20", status: "completed" },
  ]

  const upcomingDonations = [
    { id: 1, cause: "Child Education", amount: 2000, date: "2023-06-15", recurring: true },
    { id: 2, cause: "Healthcare", amount: 1500, date: "2023-06-10", recurring: true },
  ]

  const impactMetrics = [
    { category: "Education", value: 25, icon: <Smile className="h-5 w-5" />, color: "text-purple-600" },
    { category: "Healthcare", value: 15, icon: <Heart className="h-5 w-5" />, color: "text-pink-600" },
    { category: "Water", value: 120, icon: <Droplet className="h-5 w-5" />, color: "text-blue-600" },
    { category: "Environment", value: 45, icon: <Globe className="h-5 w-5" />, color: "text-green-600" },
  ]

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  // Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-block mb-2">
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Sparkles className="h-4 w-4 inline-block mr-2" />
                  <span>Your Impact Dashboard</span>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, User</h1>
              <p className="text-gray-600">Here's an overview of your donation activity and impact</p>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" className="gap-2 text-base">
                <Bell className="h-4 w-4" />
                <span className="hidden sm:inline">Notifications</span>
              </Button>
              <Link href="/wallet">
                <Button className="gap-2 text-base bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600">
                  <Wallet className="h-4 w-4" />
                  <span className="hidden sm:inline">Add Funds</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Dashboard Tabs */}
          <div className="flex overflow-x-auto pb-2 mb-6 gap-2">
            {[
              { id: "overview", label: "Overview", icon: <BarChart3 className="h-4 w-4" /> },
              { id: "donations", label: "Donations", icon: <Heart className="h-4 w-4" /> },
              { id: "impact", label: "Impact", icon: <Zap className="h-4 w-4" /> },
              { id: "analytics", label: "Analytics", icon: <LineChart className="h-4 w-4" /> },
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                className={`gap-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600"
                    : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </Button>
            ))}
          </div>

          {/* Main Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Stats & Charts */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-500">Total Donated</span>
                    <span className="p-1.5 rounded-lg bg-purple-100 text-purple-600">
                      <Wallet className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{formatCurrency(donationStats.totalDonated)}</div>
                  <div className="mt-1 flex items-center text-xs text-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+12% from last month</span>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-500">Monthly Average</span>
                    <span className="p-1.5 rounded-lg bg-indigo-100 text-indigo-600">
                      <Calendar className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{formatCurrency(donationStats.monthlyAverage)}</div>
                  <div className="mt-1 flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>Based on last 3 months</span>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-500">Donations Made</span>
                    <span className="p-1.5 rounded-lg bg-pink-100 text-pink-600">
                      <Heart className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{donationStats.donationCount}</div>
                  <div className="mt-1 flex items-center text-xs text-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+3 this month</span>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-500">Impact Score</span>
                    <span className="p-1.5 rounded-lg bg-yellow-100 text-yellow-600">
                      <Zap className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{donationStats.impactScore}</div>
                  <div className="mt-1 flex items-center text-xs text-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+15 points</span>
                  </div>
                </Card>
              </div>

              {/* Donation Distribution Chart */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Donation Distribution</h2>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Filter className="h-3 w-3" />
                      <span>Filter</span>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Download className="h-3 w-3" />
                      <span>Export</span>
                    </Button>
                  </div>
                </div>

                <div className="h-64 flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
                  <div className="text-center">
                    <PieChart className="h-16 w-16 text-purple-500 mx-auto mb-4 opacity-50" />
                    <p className="text-gray-500">Donation distribution chart will appear here</p>
                  </div>
                </div>
              </Card>

              {/* Recent Donations */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Donations</h2>
                  <Link href="/wallet">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <span>View All</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Cause
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {recentDonations.map((donation) => (
                        <tr key={donation.id} className="hover:bg-gray-50">
                          <td className="py-4 px-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                                <Heart className="h-4 w-4 text-purple-600" />
                              </div>
                              <div className="ml-3">
                                <div className="text-sm font-medium text-gray-900">{donation.cause}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{formatCurrency(donation.amount)}</div>
                          </td>
                          <td className="py-4 px-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{formatDate(donation.date)}</div>
                          </td>
                          <td className="py-4 px-4 whitespace-nowrap">
                            <Badge variant="success">Completed</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* User Profile Card */}
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">User</h3>
                    <p className="text-gray-500">user@example.com</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start gap-3">
                    <User className="h-4 w-4" />
                    <span>Edit Profile</span>
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3">
                    <Settings className="h-4 w-4" />
                    <span>Account Settings</span>
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3 text-red-600 hover:bg-red-50">
                    <span>Sign Out</span>
                  </Button>
                </div>
              </Card>

              {/* Upcoming Donations */}
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Donations</h2>

                {upcomingDonations.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingDonations.map((donation) => (
                      <div
                        key={donation.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                            <Calendar className="h-5 w-5 text-indigo-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{donation.cause}</p>
                            <p className="text-sm text-gray-500">{formatDate(donation.date)}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">{formatCurrency(donation.amount)}</p>
                          {donation.recurring && (
                            <Badge variant="info" className="mt-1">
                              Recurring
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">No upcoming donations</p>
                  </div>
                )}

                <div className="mt-4">
                  <Link href="/donate">
                    <Button className="w-full gap-2 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600">
                      <span>Schedule a Donation</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Impact Metrics */}
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Impact</h2>

                <div className="space-y-4">
                  {impactMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gray-100 ${metric.color}`}>{metric.icon}</div>
                        <span className="text-gray-700">{metric.category}</span>
                      </div>
                      <div className="font-semibold text-gray-900">{metric.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link href="/impact">
                    <Button variant="outline" className="w-full gap-2">
                      <span>View Detailed Impact</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DashboardPage
