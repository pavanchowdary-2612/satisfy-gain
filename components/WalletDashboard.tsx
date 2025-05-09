"use client"

import { useState } from "react"
import { Wallet, ArrowUpCircle, ArrowDownCircle, Clock, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Mock data
const walletBalance = 1250
const pendingAmount = 75
const thresholdAmount = 500
const recentTransactions = [
  { id: 1, type: "deposit", amount: 200, date: "2023-05-15", status: "completed" },
  { id: 2, type: "donation", amount: 500, date: "2023-05-10", status: "completed", charity: "Child Care Foundation" },
  { id: 3, type: "deposit", amount: 100, date: "2023-05-05", status: "completed" },
  { id: 4, type: "donation", amount: 300, date: "2023-04-28", status: "completed", charity: "Healthcare Initiative" },
  { id: 5, type: "deposit", amount: 75, date: "2023-04-25", status: "pending" },
]

export function WalletDashboard() {
  const [addFundsAmount, setAddFundsAmount] = useState("")
  const [isAddingFunds, setIsAddingFunds] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleAddFunds = () => {
    setIsAddingFunds(true)
    // Simulate API call
    setTimeout(() => {
      setIsAddingFunds(false)
      setIsDialogOpen(false)
      // Would update wallet balance here in a real app
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{walletBalance.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Available for donations</p>
            <div className="mt-4 flex gap-2">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="sm" className="w-full">
                    Add Funds
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add Funds to Wallet</DialogTitle>
                    <DialogDescription>
                      Add money to your SatisfyGain wallet to use for future donations.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="amount">Amount (₹)</Label>
                      <Input
                        id="amount"
                        type="number"
                        min="1"
                        value={addFundsAmount}
                        onChange={(e) => setAddFundsAmount(e.target.value)}
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={handleAddFunds} disabled={!addFundsAmount || isAddingFunds}>
                      {isAddingFunds ? "Processing..." : "Add Funds"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Button size="sm" variant="outline" className="w-full">
                Withdraw
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Funds</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{pendingAmount}</div>
            <p className="text-xs text-muted-foreground">Processing or on hold</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Threshold Progress</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">
                ₹{walletBalance} / ₹{thresholdAmount}
              </div>
              {walletBalance >= thresholdAmount && (
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Ready
                </Badge>
              )}
            </div>
            <Progress
              value={(walletBalance / thresholdAmount) * 100}
              className="mt-2"
              indicatorClassName={walletBalance >= thresholdAmount ? "bg-green-500" : ""}
            />
            <p className="mt-2 text-xs text-muted-foreground">
              {walletBalance >= thresholdAmount
                ? "Your wallet has reached the threshold amount and is ready for impactful donations"
                : `₹${thresholdAmount - walletBalance} more needed to reach threshold`}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Wallet Activity</CardTitle>
          <CardDescription>View your recent wallet transactions and donations</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="deposits">Deposits</TabsTrigger>
              <TabsTrigger value="donations">Donations</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4 mt-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-3">
                    {transaction.type === "deposit" ? (
                      <div className="rounded-full bg-green-100 p-2">
                        <ArrowUpCircle className="h-4 w-4 text-green-600" />
                      </div>
                    ) : (
                      <div className="rounded-full bg-blue-100 p-2">
                        <ArrowDownCircle className="h-4 w-4 text-blue-600" />
                      </div>
                    )}
                    <div>
                      <p className="font-medium">
                        {transaction.type === "deposit" ? "Added to Wallet" : `Donated to ${transaction.charity}`}
                      </p>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${transaction.type === "deposit" ? "text-green-600" : "text-blue-600"}`}>
                      {transaction.type === "deposit" ? "+" : "-"}₹{transaction.amount}
                    </p>
                    <Badge
                      variant="outline"
                      className={
                        transaction.status === "completed"
                          ? "bg-green-50 text-green-700 border-green-200"
                          : "bg-yellow-50 text-yellow-700 border-yellow-200"
                      }
                    >
                      {transaction.status === "completed" ? "Completed" : "Pending"}
                    </Badge>
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="deposits" className="space-y-4 mt-4">
              {recentTransactions
                .filter((t) => t.type === "deposit")
                .map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between border-b pb-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-green-100 p-2">
                        <ArrowUpCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Added to Wallet</p>
                        <p className="text-sm text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-600">+₹{transaction.amount}</p>
                      <Badge
                        variant="outline"
                        className={
                          transaction.status === "completed"
                            ? "bg-green-50 text-green-700 border-green-200"
                            : "bg-yellow-50 text-yellow-700 border-yellow-200"
                        }
                      >
                        {transaction.status === "completed" ? "Completed" : "Pending"}
                      </Badge>
                    </div>
                  </div>
                ))}
            </TabsContent>
            <TabsContent value="donations" className="space-y-4 mt-4">
              {recentTransactions
                .filter((t) => t.type === "donation")
                .map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between border-b pb-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-100 p-2">
                        <ArrowDownCircle className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Donated to {transaction.charity}</p>
                        <p className="text-sm text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-blue-600">-₹{transaction.amount}</p>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Completed
                      </Badge>
                    </div>
                  </div>
                ))}
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            View All Transactions
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
