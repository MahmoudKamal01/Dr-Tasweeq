import DashboardLayout from "../../components/DashboardLayout";
import { clientInvoices } from "../../data/dummyData";
import {
  FaMoneyBillWave,
  FaDownload,
  FaCheckCircle,
  FaClock,
  FaCreditCard,
} from "react-icons/fa";

function ClientInvoices() {
  const totalPaid = clientInvoices
    .filter((inv) => inv.status === "Paid")
    .reduce((sum, inv) => sum + inv.amount, 0);

  const totalPending = clientInvoices
    .filter((inv) => inv.status === "Pending")
    .reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <DashboardLayout type="client">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Invoices & Payments</h1>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition flex items-center gap-2">
            <FaCreditCard />
            Pay Now
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <FaCheckCircle className="text-3xl opacity-80" />
              <span className="text-sm opacity-80">Total Paid</span>
            </div>
            <div className="text-4xl font-bold">${totalPaid}</div>
            <p className="text-sm opacity-80 mt-2">
              {clientInvoices.filter((i) => i.status === "Paid").length}{" "}
              invoices
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <FaClock className="text-3xl opacity-80" />
              <span className="text-sm opacity-80">Pending</span>
            </div>
            <div className="text-4xl font-bold">${totalPending}</div>
            <p className="text-sm opacity-80 mt-2">
              {clientInvoices.filter((i) => i.status === "Pending").length}{" "}
              invoices
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <FaMoneyBillWave className="text-3xl opacity-80" />
              <span className="text-sm opacity-80">Total</span>
            </div>
            <div className="text-4xl font-bold">
              ${totalPaid + totalPending}
            </div>
            <p className="text-sm opacity-80 mt-2">
              {clientInvoices.length} invoices
            </p>
          </div>
        </div>

        {/* Invoices List */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="px-6 py-4 bg-gray-900 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white">All Invoices</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900 border-b border-gray-700">
                <tr>
                  <th className="text-left px-6 py-4 text-gray-400 font-semibold">
                    Invoice ID
                  </th>
                  <th className="text-left px-6 py-4 text-gray-400 font-semibold">
                    Date
                  </th>
                  <th className="text-left px-6 py-4 text-gray-400 font-semibold">
                    Description
                  </th>
                  <th className="text-left px-6 py-4 text-gray-400 font-semibold">
                    Amount
                  </th>
                  <th className="text-left px-6 py-4 text-gray-400 font-semibold">
                    Status
                  </th>
                  <th className="text-right px-6 py-4 text-gray-400 font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {clientInvoices.map((invoice) => (
                  <tr
                    key={invoice.id}
                    className="border-b border-gray-700 hover:bg-gray-750 transition"
                  >
                    <td className="px-6 py-4">
                      <span className="text-white font-semibold">
                        {invoice.id}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400">{invoice.date}</td>
                    <td className="px-6 py-4 text-gray-300">
                      {invoice.description}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-white font-bold">
                        ${invoice.amount}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          invoice.status === "Paid"
                            ? "bg-green-600 text-white"
                            : "bg-orange-600 text-white"
                        }`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-blue-400 hover:bg-gray-700 rounded transition">
                          <FaDownload />
                        </button>
                        {invoice.status === "Pending" && (
                          <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition text-sm">
                            Pay Now
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4">Payment Methods</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <FaCreditCard className="text-blue-400 text-2xl" />
                  <div>
                    <h4 className="text-white font-semibold">Credit Card</h4>
                    <p className="text-gray-400 text-sm">**** **** **** 4532</p>
                  </div>
                </div>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">
                  Default
                </span>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center gap-3">
                <FaMoneyBillWave className="text-green-400 text-2xl" />
                <div>
                  <h4 className="text-white font-semibold">Bank Transfer</h4>
                  <p className="text-gray-400 text-sm">Available</p>
                </div>
              </div>
            </div>
          </div>

          <button className="mt-4 text-purple-400 hover:text-purple-300 transition text-sm font-semibold">
            + Add Payment Method
          </button>
        </div>

        {/* Subscription Info */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Professional Plan</h3>
              <p className="text-purple-100">Your current subscription</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">$2,499</div>
              <p className="text-purple-100 text-sm">per project</p>
            </div>
          </div>
          <div className="mt-6 flex gap-4">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Upgrade Plan
            </button>
            <button className="bg-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition font-semibold">
              View Details
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ClientInvoices;
