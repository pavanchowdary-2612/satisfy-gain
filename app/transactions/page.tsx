"use client"

import { useState } from "react"
import {
  Download,
  Filter,
  Search,
  ArrowUpRight,
  ArrowDownRight,
  ChevronDown,
  FileText,
  BarChart3,
  PieChart,
  Sparkles,
} from "lucide-react"
import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"

export default function TransactionsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [timeRange, setTimeRange] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Sample transaction data
  const transactions = [
    {
      id: 1,
      type: "deposit",
      amount: 1000,
      date: "2023-05-15",
      status: "completed",
      method: "Credit Card",
      description: "Wallet top-up",
    },
    {
      id: 2,
      type: "donation",
      amount: 500,
      date: "2023-05-10",
      status: "completed",
      recipient: "Educate India Foundation",
      category: "Education",
      description: "Monthly donation",
    },
    {
      id: 3,
      type: "deposit",
      amount: 2000,
      date: "2023-04-28",
      status: "completed",
      method: "UPI",
      description: "Wallet top-up",
    },
    {
      id: 4,
      type: "donation",
      amount: 1000,
      date: "2023-04-20",
      status: "completed",
      recipient: "Healthcare For All",
      category: "Healthcare",
      description: "One-time donation",
    },
    {
      id: 5,
      type: "donation",
      amount: 150,
      date: "2023-04-15",
      status: "pending",
      recipient: "Smart Wallet Pool",
      category: "Multiple",
      description: "Smart wallet contribution",
    },
    {
      id: 6,
      type: "donation",
      amount: 300,
      date: "2023-04-10",
      status: "completed",
      recipient: "Clean Water Initiative",
      category: "Environment",
      description: "One-time donation",
    },
    {
      id: 7,
      type: "deposit",
      amount: 500,
      date: "2023-04-05",
      status: "completed",
      method: "Net Banking",
      description: "Wallet top-up",
    },
    {
      id: 8,
      type: "donation",
      amount: 200,
      date: "2023-03-25",
      status: "completed",
      recipient: "Women Empowerment Trust",
      category: "Women",
      description: "One-time donation",
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

  // Filter transactions based on active tab, time range, and search query
  const filteredTransactions = transactions.filter((transaction) => {
    // Filter by tab
    if (activeTab === "donations" && transaction.type !== "donation") return false
    if (activeTab === "deposits" && transaction.type !== "deposit") return false

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      const matchesRecipient = transaction.recipient?.toLowerCase().includes(query) || false
      const matchesDescription = transaction.description?.toLowerCase().includes(query) || false
      const matchesMethod = transaction.method?.toLowerCase().includes(query) || false

      return matchesRecipient || matchesDescription || matchesMethod
    }

    return true
  })

  // Calculate total amounts
  const totalDonated = transactions
    .filter((t) => t.type === "donation" && t.status === "completed")
    .reduce((sum, t) => sum + t.amount, 0)

  const totalDeposited = transactions
    .filter((t) => t.type === "deposit" && t.status === "completed")
    .reduce((sum, t) => sum + t.amount, 0)

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block mb-4">
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4 inline-block mr-2" />
                <span>Transaction History</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Transactions</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Track all your donations and wallet activities in one place.
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Total Transactions</h2>
                  <p className="text-gray-600 text-sm">All time activity</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-4">{transactions.length}</div>
              <div className="text-sm text-gray-600">
                {transactions.filter((t) => t.status === "completed").length} completed,{" "}
                {transactions.filter((t) => t.status === "pending").length} pending
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <ArrowDownRight className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Total Deposited</h2>
                  <p className="text-gray-600 text-sm">Funds added to wallet</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-4">{formatCurrency(totalDeposited)}</div>
              <div className="text-sm text-gray-600">
                {transactions.filter((t) => t.type === "deposit").length} deposits
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <ArrowUpRight className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Total Donated</h2>
                  <p className="text-gray-600 text-sm">Funds given to causes</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-4">{formatCurrency(totalDonated)}</div>
              <div className="text-sm text-gray-600">
                {transactions.filter((t) => t.type === "donation").length} donations
              </div>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex overflow-x-auto pb-2 gap-4">
                  {[
                    { id: "all", label: "All Transactions" },
                    { id: "deposits", label: "Deposits" },
                    { id: "donations", label: "Donations" },
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
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search transactions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
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
                    {filteredTransactions.map((transaction) => (
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
                              <div className="text-xs text-gray-500">{transaction.description}</div>
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
                          {transaction.type === "deposit" ? `Via ${transaction.method}` : `To ${transaction.recipient}`}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Donation Distribution */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Donation Distribution</h2>
              <div className="h-64 flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
                <div className="text-center">
                  <PieChart className="h-16 w-16 text-purple-500 mx-auto mb-4 opacity-50" />
                  <p className="text-gray-500">Donation distribution chart will appear here</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Transaction Timeline</h2>
              <div className="h-64 flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-purple-500 mx-auto mb-4 opacity-50" />
                  <p className="text-gray-500">Transaction timeline chart will appear here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Export Options */}
          <div className="mt-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Need a Transaction Report?</h2>
                <p className="text-gray-600">Download your transaction history for record-keeping or tax purposes.</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="gap-2 bg-white">
                  <FileText className="h-4 w-4" />
                  <span>PDF Report</span>
                </Button>
                <Button className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                  <Download className="h-4 w-4" />
                  <span>CSV Export</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
