import { useState } from 'react';

function App() {
  // 1. Profile state holding student details
  const [profile, setProfile] = useState({
    name: 'Aarav Sharma',
    rollNumber: 'CS2024-042',
    department: 'Computer Science & Engineering',
    email: 'aarav.sharma@example.edu',
  });

  // 2. State to toggle between view and edit modes
  const [isEditing, setIsEditing] = useState(false);

  // Temporary state for edits before saving
  const [editForm, setEditForm] = useState({ ...profile });

  // Handle changes within edit inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle into edit mode with fresh copy of profile
  const handleEditClick = () => {
    setEditForm({ ...profile });
    setIsEditing(true);
  };

  // Save changes and return to view mode
  const handleSave = (e) => {
    e.preventDefault();
    setProfile({ ...editForm });
    setIsEditing(false);
  };

  return (
    // 3. Responsive card container with sm and md breakpoints
    <div className="w-full max-w-sm sm:max-w-md md:max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-8 border border-gray-200">
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Student Profile
        </h2>
        <span className="text-xs sm:text-sm bg-blue-100 text-blue-800 font-medium px-2.5 py-0.5 rounded">
          Active Student
        </span>
      </div>

      {!isEditing ? (
        // --- VIEW MODE ---
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
            <div>
              <p className="text-gray-500 font-semibold">Name</p>
              <p className="text-gray-900 font-medium">{profile.name}</p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">Roll Number</p>
              <p className="text-gray-900 font-medium">{profile.rollNumber}</p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">Department</p>
              <p className="text-gray-900 font-medium">{profile.department}</p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">Email</p>
              <p className="text-gray-900 font-medium break-all">{profile.email}</p>
            </div>
          </div>

          {/* Button to toggle edit mode */}
          <div className="pt-4">
            <button
              onClick={handleEditClick}
              className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition"
            >
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        // --- EDIT MODE ---
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={editForm.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Roll Number
              </label>
              <input
                type="text"
                name="rollNumber"
                value={editForm.rollNumber}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Department
              </label>
              <input
                type="text"
                name="department"
                value={editForm.department}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={editForm.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Action buttons: Save and Cancel */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2">
            <button
              type="submit"
              className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg text-sm transition"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-5 py-2.5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium rounded-lg text-sm transition"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default App;
