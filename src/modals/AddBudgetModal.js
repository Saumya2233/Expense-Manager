"use client";

export default function AddBudgetModal({
  open,
  setOpen,
  formData,
  setFormData,
  handleSubmit,
  editId,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#112A46]/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-3xl border border-[#112A46]/10 bg-white p-5 shadow-[0_26px_90px_rgba(17,42,70,0.28)]">
        {/* HEADER */}

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#112A46]">
            {editId ? "Edit Budget" : "Add Budget"}
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="rounded-full bg-[#FDF1A5] px-3 py-1 text-[#112A46] hover:bg-[#112A46] hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* FORM */}

        <div className="mt-5 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-[#112A46]">
              Category Name
            </label>

            <input
              type="text"
              placeholder="Groceries"
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value,
                })
              }
              className="theme-input"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-[#112A46]">
              Budget Amount
            </label>

            <input
              type="number"
              placeholder="1000"
              value={formData.limit}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  limit: e.target.value,
                })
              }
              className="theme-input"
            />
          </div>
        </div>

        {/* BUTTONS */}

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => setOpen(false)}
            className="theme-button-ghost flex-1"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="theme-button flex-1"
          >
            {editId ? "Save" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
