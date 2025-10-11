import DashboardLayout from "../../components/DashboardLayout";
import { adminAnalytics } from "../../data/dummyData";
import {
  FaDollarSign,
  FaChartLine,
  FaFileInvoice,
  FaWallet,
  FaDownload,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

function AdminFinance() {
  const transactions = [
    {
      id: 1,
      client: "Tech Store Inc",
      amount: 2500,
      type: "income",
      status: "completed",
      date: "2025-10-08",
    },
    {
      id: 2,
      client: "Fashion Co",
      amount: 3500,
      type: "income",
      status: "completed",
      date: "2025-10-07",
    },
    {
      id: 3,
      freelancer: "Sarah Designer",
      amount: 1200,
      type: "payout",
      status: "pending",
      date: "2025-10-06",
    },
    {
      id: 4,
      client: "Startup Hub",
      amount: 5000,
      type: "income",
      status: "completed",
      date: "2025-10-05",
    },
    {
      id: 5,
      freelancer: "Mike Developer",
      amount: 2000,
      type: "payout",
      status: "completed",
      date: "2025-10-04",
    },
  ];

  return (
    <DashboardLayout type="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">
            Financial Management
          </h1>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition flex items-center gap-2">
            <FaDownload />
            Export Report
          </button>
        </div>

        {/* Revenue Overview */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 text-white">
            <FaDollarSign className="text-4xl opacity-80 mb-3" />
            <div className="text-3xl font-bold mb-1">
              ${adminAnalytics.totalRevenue.toLocaleString()}
            </div>
            <div className="text-sm opacity-80">Total Revenue</div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
            <FaChartLine className="text-4xl opacity-80 mb-3" />
            <div className="text-3xl font-bold mb-1">$16,500</div>
            <div className="text-sm opacity-80">This Month</div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 text-white">
            <FaFileInvoice className="text-4xl opacity-80 mb-3" />
            <div className="text-3xl font-bold mb-1">28</div>
            <div className="text-sm opacity-80">Pending Invoices</div>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl p-6 text-white">
            <FaWallet className="text-4xl opacity-80 mb-3" />
            <div className="text-3xl font-bold mb-1">$45,230</div>
            <div className="text-sm opacity-80">Available Balance</div>
          </div>
        </div>

        {/* Monthly Revenue Chart */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-6">Revenue Trends</h2>
          <div className="h-80 flex items-end justify-between gap-2">
            {adminAnalytics.monthlyRevenue.map((data, index) => {
              const maxRevenue = Math.max(
                ...adminAnalytics.monthlyRevenue.map((m) => m.revenue)
              );
              const height = (data.revenue / maxRevenue) * 100;
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center gap-2"
                >
                  <div className="w-full flex flex-col items-center">
                    <span className="text-xs text-gray-400 mb-2">
                      ${(data.revenue / 1000).toFixed(1)}k
                    </span>
                    <div
                      className="w-full bg-gradient-to-t from-purple-600 to-pink-600 rounded-t-lg transition-all duration-500 hover:from-purple-500 hover:to-pink-500 cursor-pointer relative group"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                        ${data.revenue.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{data.month}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="px-6 py-4 bg-gray-900 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white">
              Recent Transactions
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900 border-b border-gray-700">
                <tr>
                  <th className="text-left px-6 py-4 text-gray-400 font-semibold">
                    ID
                  </th>
                  <th className="text-left px-6 py-4 text-gray-400 font-semibold">
                    Party
                  </th>
                  <th className="text-left px-6 py-4 text-gray-400 font-semibold">
                    Type
                  </th>
                  <th className="text-left px-6 py-4 text-gray-400 font-semibold">
                    Amount
                  </th>
                  <th className="text-left px-6 py-4 text-gray-400 font-semibold">
                    Status
                  </th>
                  <th className="text-left px-6 py-4 text-gray-400 font-semibold">
                    Date
                  </th>
                  <th className="text-right px-6 py-4 text-gray-400 font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="border-b border-gray-700 hover:bg-gray-750 transition"
                  >
                    <td className="px-6 py-4 text-white font-semibold">
                      #{transaction.id}
                    </td>
                    <td className="px-6 py-4 text-gray-300">
                      {transaction.client || transaction.freelancer}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          transaction.type === "income"
                            ? "bg-green-600 text-white"
                            : "bg-orange-600 text-white"
                        }`}
                      >
                        {transaction.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`font-bold ${
                          transaction.type === "income"
                            ? "text-green-400"
                            : "text-orange-400"
                        }`}
                      >
                        {transaction.type === "income" ? "+" : "-"}$
                        {transaction.amount}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit ${
                          transaction.status === "completed"
                            ? "bg-green-600 text-white"
                            : "bg-yellow-600 text-white"
                        }`}
                      >
                        {transaction.status === "completed" ? (
                          <FaCheckCircle />
                        ) : (
                          <FaClock />
                        )}
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400">
                      {transaction.date}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-blue-400 hover:bg-gray-700 rounded transition">
                          <FaDownload />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Analytics */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-white font-semibold mb-4">Revenue by Source</h3>
            <div className="space-y-3">
              {[
                {
                  source: "Web Development",
                  percentage: 45,
                  amount: "$56,250",
                },
                {
                  source: "Design Services",
                  percentage: 30,
                  amount: "$37,500",
                },
                { source: "Marketing", percentage: 25, amount: "$31,250" },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">{item.source}</span>
                    <span className="text-white font-semibold">
                      {item.amount}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-white font-semibold mb-4">
              Expenses Breakdown
            </h3>
            <div className="space-y-3">
              {[
                {
                  category: "Freelancer Payouts",
                  amount: "$28,500",
                  color: "text-orange-400",
                },
                {
                  category: "Infrastructure",
                  amount: "$5,200",
                  color: "text-blue-400",
                },
                {
                  category: "Marketing",
                  amount: "$3,800",
                  color: "text-green-400",
                },
                {
                  category: "Other",
                  amount: "$2,100",
                  color: "text-purple-400",
                },
              ].map((expense, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">
                    {expense.category}
                  </span>
                  <span className={`font-bold ${expense.color}`}>
                    {expense.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-white font-semibold mb-4">Key Metrics</h3>
            <div className="space-y-4">
              <div>
                <div className="text-gray-400 text-sm mb-1">
                  Average Project Value
                </div>
                <div className="text-2xl font-bold text-white">$3,245</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">Profit Margin</div>
                <div className="text-2xl font-bold text-green-400">68%</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">Growth Rate</div>
                <div className="text-2xl font-bold text-purple-400">+24%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AdminFinance;
