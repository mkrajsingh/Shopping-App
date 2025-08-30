// const AccountDetails: React.FC = () => {
//     return (
//         <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-8 mt-8">
//             <h1 className="text-2xl font-semibold mb-4">Personal Information</h1>
//             <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">First Name</label>
//                 <input type="text" className="mt-1 p-2 border rounded-md w-full" placeholder="Mithilesh" />
//             </div>
//             <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                 <input type="text" className="mt-1 p-2 border rounded-md w-full" placeholder="kumar" />
//             </div>
//             <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Gender</label>
//                 <div className="mt-1">
//                     <label className="inline-flex items-center">
//                         <input type="radio" className="form-radio" name="gender" />
//                         <span className="ml-2">Male</span>
//                     </label>
//                     <label className="inline-flex items-center ml-6">
//                         <input type="radio" className="form-radio" name="gender" />
//                         <span className="ml-2">Female</span>
//                     </label>
//                 </div>
//             </div>
//             <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Email Address</label>
//                 <input type="email" className="mt-1 p-2 border rounded-md w-full" placeholder="Your Email Address" />
//             </div>
//             <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
//                 <input type="tel" className="mt-1 p-2 border rounded-md w-full" placeholder="+9191919191" />
//             </div>
//             <div className="mb-4">
//                 <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Save Changes</button>
//             </div>
//             <div>
//                 <h2 className="text-lg font-semibold mb-2">FAQs</h2>
//                 {/* Insert FAQ content here */}
//             </div>
//         </div>
//     );
// };

// export default AccountDetails





import React, { useState } from "react";

type Gender = "Male" | "Female";

const AccountDetails: React.FC = () => {
  const [firstName, setFirstName] = useState("Mithilesh");
  const [lastName, setLastName] = useState("Kumar");
  const [gender, setGender] = useState<Gender | "">("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showFAQs, setShowFAQs] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !gender || !email || !mobile) {
      alert("Please fill out all fields.");
      return;
    }

    // TODO: Send data to backend API here
    setSuccessMessage("Changes saved successfully!");
    setTimeout(() => setSuccessMessage(""), 3000); // Remove after 3s
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-8 mt-8">
      <h1 className="text-2xl font-semibold mb-4">Personal Information</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Mithilesh"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="Kumar"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={() => setGender("Male")}
                className="form-radio"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={() => setGender("Female")}
                className="form-radio"
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Mobile Number
          </label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
            placeholder="+91 9191919191"
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-4 py-2 rounded-md"
          >
            Save Changes
          </button>
        </div>

        {successMessage && (
          <div className="text-green-600 font-medium">{successMessage}</div>
        )}
      </form>

      {/* FAQs Section */}
      <div className="mt-6">
        <h2
          className="text-lg font-semibold mb-2 cursor-pointer"
          onClick={() => setShowFAQs((prev) => !prev)}
        >
          FAQs {showFAQs ? "▲" : "▼"}
        </h2>
        {showFAQs && (
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
            <li>How can I update my information?</li>
            <li>Why do you need my mobile number?</li>
            <li>How secure is my data?</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default AccountDetails;
