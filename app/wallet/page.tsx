"use client"

import { useState } from "react"
import {
  Wallet,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Filter,
  Download,
  ChevronDown,
  CreditCard,
  AlertCircle,
  Sparkles,
  TrendingUp,
  Check,
} from "lucide-react"
import Link from "next/link"
import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"

const WalletPage = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [timeRange, setTimeRange] = useState("all")

  // Sample wallet data
  const walletData = {
    balance: 2500,
    pendingAmount: 150,
    totalDonated: 12500,
    thresholdAmount: 500,
  }

  // Sample transaction data
  const transactions = [
    {
      id: 1,
      type: "deposit",
      amount: 1000,
      date: "2023-05-15",
      status: "completed",
      method: "Credit Card",
    },
    {
      id: 2,
      type: "donation",
      amount: 500,
      date: "2023-05-10",
      status: "completed",
      recipient: "Educate India Foundation",
    },
    {
      id: 3,
      type: "deposit",
      amount: 2000,
      date: "2023-04-28",
      status: "completed",
      method: "UPI",
    },
    {
      id: 4,
      type: "donation",
      amount: 1000,
      date: "2023-04-20",
      status: "completed",
      recipient: "Healthcare For All",
    },
    {
      id: 5,
      type: "donation",
      amount: 150,
      date: "2023-04-15",
      status: "pending",
      recipient: "Smart Wallet Pool",
    },
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
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block mb-4">
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4 inline-block mr-2" />
                <span>Smart Wallet System</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Donation Wallet</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Manage your funds and track how your donations are making an impact.
            </p>
          </div>

          {/* Wallet Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg text-white p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  <Wallet className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Wallet Balance</h2>
                  <p className="text-white/80">Available for donations</p>
                </div>
              </div>
              <div className="text-4xl font-bold mb-6">{formatCurrency(walletData.balance)}</div>
              <div className="flex gap-3">
                <Button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                  <Plus className="h-5 w-5 mr-2" /> Add Funds
                </Button>
                <Link href="/donate" className="flex-1">
                  <Button className="w-full bg-white text-indigo-700 hover:bg-white/90">Donate Now</Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Total Donated</h2>
                  <p className="text-gray-600 text-sm">Lifetime contributions</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-4">{formatCurrency(walletData.totalDonated)}</div>
              <div className="text-sm text-gray-600">Your donations have helped 450+ people across 8 causes</div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Smart Wallet Status</h2>
                  <p className="text-gray-600 text-sm">Threshold-based donations</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Pending Amount:</span>
                  <span className="font-medium text-gray-900">{formatCurrency(walletData.pendingAmount)}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Threshold Amount:</span>
                  <span className="font-medium text-gray-900">{formatCurrency(walletData.thresholdAmount)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full"
                    style={{ width: `${(walletData.pendingAmount / walletData.thresholdAmount) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-sm text-gray-600 flex items-start gap-2">
                <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p>
                  {formatCurrency(walletData.thresholdAmount - walletData.pendingAmount)} more needed to reach threshold
                  and trigger automatic donation.
                </p>
              </div>
            </div>
          </div>

          {/* Tabs and Filters */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 mb-8">
            <div className="p-4 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex overflow-x-auto pb-2 gap-4">
                  {[
                    { id: "overview", label: "Overview", icon: <Wallet className="h-4 w-4" /> },
                    { id: "deposits", label: "Deposits", icon: <ArrowDownRight className="h-4 w-4" /> },
                    { id: "donations", label: "Donations", icon: <ArrowUpRight className="h-4 w-4" /> },
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

                <div className="flex items-center gap-2">
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    <span>Export</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Transactions Table */}
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Transaction
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
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {transactions
                      .filter((transaction) => {
                        if (activeTab === "overview") return true
                        if (activeTab === "deposits") return transaction.type === "deposit"
                        if (activeTab === "donations") return transaction.type === "donation"
                        return true
                      })
                      .map((transaction) => (
                        <tr key={transaction.id} className="hover:bg-gray-50">
                          <td className="py-4 px-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div
                                className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                                  transaction.type === "deposit" ? "bg-green-100" : "bg-purple-100"
                                }`}
                              >
                                {transaction.type === "deposit" ? (
                                  <ArrowDownRight className="h-4 w-4 text-green-600" />
                                ) : (
                                  <ArrowUpRight className="h-4 w-4 text-purple-600" />
                                )}
                              </div>
                              <div className="ml-3">
                                <div className="text-sm font-medium text-gray-900 capitalize">{transaction.type}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 whitespace-nowrap">
                            <div
                              className={`text-sm font-medium ${
                                transaction.type === "deposit" ? "text-green-600" : "text-purple-600"
                              }`}
                            >
                              {transaction.type === "deposit" ? "+" : "-"}
                              {formatCurrency(transaction.amount)}
                            </div>
                          </td>
                          <td className="py-4 px-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{formatDate(transaction.date)}</div>
                          </td>
                          <td className="py-4 px-4 whitespace-nowrap">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                transaction.status === "completed"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {transaction.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-500">
                            {transaction.type === "deposit"
                              ? `Via ${transaction.method}`
                              : `To ${transaction.recipient}`}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Smart Wallet Explanation */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="inline-block mb-2">
                  <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                    How It Works
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Smart Wallet</h2>
                <p className="text-gray-600 mb-4">
                  Our Smart Wallet system allows you to make small, frequent contributions that accumulate until they
                  reach a threshold amount. Once the threshold is reached, the funds are automatically donated to your
                  chosen cause or distributed via AI recommendations.
                </p>
                <p className="text-gray-600 mb-6">
                  This approach ensures that even small amounts can make a meaningful impact when pooled together. You
                  can set your own threshold amount and choose how your funds are allocated.
                </p>
                <Button className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                  <CreditCard className="h-4 w-4" />
                  <span>Set Up Auto-Contributions</span>
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Smart Wallet Benefits</h3>
                  <ul className="space-y-3">
                    {[
                      "Makes small donations meaningful by pooling them together",
                      "Automates the donation process based on your preferences",
                      "Provides complete transparency on fund utilization",
                      "Allows you to contribute regularly without thinking about it",
                      "Maximizes the impact of your giving through strategic allocation",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-green-100 p-1 rounded-full mt-0.5">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WalletPage
