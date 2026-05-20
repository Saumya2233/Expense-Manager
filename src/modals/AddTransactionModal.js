"use client";

export default function AddExpenseModal({ isOpen, onClose, onAdd }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#112A46]/70 p-4 backdrop-blur-sm">
      <form
        className="w-full max-w-md rounded-3xl border border-[#112A46]/10 bg-white p-6 shadow-[0_26px_90px_rgba(17,42,70,0.28)]"
        onSubmit={(e) => {
          e.preventDefault();

          const formData = new FormData(e.target);

          onAdd({
            title: formData.get("title"),
            category: formData.get("category"),
            description: formData.get("description"),
            amount: `-$${formData.get("amount")}`,
            type: "expense",
            date: new Date().toLocaleDateString(),
          });

          e.target.reset();
          onClose();
        }}
      >
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#112A46]">Add Expense</h2>

            <p className="mt-1 text-sm text-[#112A46]/60">
              Track your spending details
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FDF1A5] text-[#112A46] transition duration-300 hover:bg-[#112A46] hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Expense Name */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-[#112A46]">
            Expense Name
          </label>

          <input
            name="title"
            placeholder="e.g. Netflix Subscription"
            className="theme-input"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-[#112A46]">
            Category
          </label>

          <select
            name="category"
            className="theme-input"
            required
          >
            <option value="">Select Category</option>
            <option value="Food & Drinks">Food & Drinks</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Shopping">Shopping</option>
            <option value="Travel">Travel</option>
            <option value="Bills">Bills</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-[#112A46]">
            Description
          </label>

          <textarea
            name="description"
            rows={3}
            placeholder="Write expense details..."
            className="theme-input resize-none"
          />
        </div>

        {/* Amount */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-[#112A46]">
            Amount Spent
          </label>

          <input
            name="amount"
            type="number"
            placeholder="120"
            className="theme-input"
            required
          />
        </div>

        {/* Footer Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="theme-button-ghost flex-1"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="theme-button flex-1"
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}
