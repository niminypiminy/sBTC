import React, { useState } from 'react';

const SecuritySettings = () => {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [password, setPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleToggle2FA = () => {
    setIs2FAEnabled(!is2FAEnabled);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    // Logic to change password goes here
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    // Logic to change email goes here
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Security Settings</h2>

      <div className="mb-6">
        <h3 className="font-semibold">Two-Factor Authentication</h3>
        <p>Enable or disable two-factor authentication.</p>
        <div className="flex items-center mt-2">
          <span className="mr-2">{is2FAEnabled ? 'Enabled' : 'Disabled'}</span>
          <button
            onClick={handleToggle2FA}
            className={`relative inline-flex items-center h-6 rounded-full w-12 transition-colors duration-200 ${
              is2FAEnabled ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`absolute left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 transform ${
                is2FAEnabled ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold">Change Password</h3>
        <form onSubmit={handleSubmitPassword}>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={handlePasswordChange}
            className="border rounded-md p-2 w-full"
            required
          />
          <button type="submit" className="mt-2 bg-blue-600 text-white p-2 rounded">
            Change Password
          </button>
        </form>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold">Active Sessions</h3>
        <p>Manage your active sessions.</p>
        <ul>
          <li className="flex justify-between mb-2">
            <span>Device 1 - Active</span>
            <button className="text-red-500">Log Out</button>
          </li>
          <li className="flex justify-between mb-2">
            <span>Device 2 - Active</span>
            <button className="text-red-500">Log Out</button>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold">Recent Activity Log</h3>
        <p>View your recent account activity.</p>
        <ul>
          <li>Logged in from Device 1 at 10:00 AM</li>
          <li>Password changed at 9:30 AM</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold">Change Email</h3>
        <form onSubmit={handleSubmitEmail}>
          <input
            type="email"
            placeholder="New Email Address"
            value={newEmail}
            onChange={handleEmailChange}
            className="border rounded-md p-2 w-full"
            required
          />
          <button type="submit" className="mt-2 bg-blue-600 text-white p-2 rounded">
            Change Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default SecuritySettings;