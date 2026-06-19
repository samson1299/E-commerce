export default function AccountPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold mb-4">My Account</h1>
        <p className="text-gray-600 mb-4">Manage your profile, orders, and settings.</p>
        <div className="grid grid-cols-1 gap-4">
          <div className="p-4 border rounded">Profile details (placeholder)</div>
          <div className="p-4 border rounded">Order history (placeholder)</div>
          <div className="p-4 border rounded">Account settings (placeholder)</div>
        </div>
      </div>
    </div>
  );
}
