// import React, { useState } from "react";
// // import { useDispatch } from "react-redux";

// interface LoginProps {
//   // Define any additional props if required
// }

// const Login: React.FC<LoginProps> = () => {
//   // const dispatch = useDispatch();
//   const [phoneNumber, setPhoneNumber] = useState<string>("");
//   const [verificationCode, setVerificationCode] = useState("");


//   const handleSendOTP = () => {
//     // Set up reCAPTCHA verifier
//     // const verifier = new RecaptchaVerifier('recaptcha-container', {
//     //   size: 'invisible', // Adjust as per your UI requirement
//     //   callback: (_response: any) => {
//     //     // reCAPTCHA solved, continue with sign-in
//     //     // You can handle this callback if needed
//     //   },
//     //   defaultCountry: +91, // Optional: set default country code
//     // });

//     // setRecaptchaVerifier(verifier); // Save the verifier in state

//     // // Send OTP
//     // firebase
//     //   .auth()
//     //   .signInWithPhoneNumber(phoneNumber, verifier)
//     //   .then((_confirmationResult) => {
//     //     // Store confirmationResult for later use
//     //     // e.g., confirmationResult.confirm(verificationCode)
//     //     console.log('OTP sent successfully');
//     //   })
//     //   .catch((error) => {
//     //     // Handle error while sending OTP
//     //     console.error('Error sending OTP:', error);
//     //   });
//   };

//   const handleLogin = () => {
//     // Handle the login functionality with verification code
//     // You need to have the confirmationResult from phone number verification
//     // Example: confirmationResult?.confirm(verificationCode).then(() => { /* Handle success */ }).catch(() => { /* Handle failure */ });
//   };

//   // Add your form submission logic if required
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Implement form submission logic if needed
//   };

//   return (
//     <div className="w-full max-w-md mx-auto mt-10">
//       <div className="flex flex-col items-center">
//         <h1 className="text-3xl font-semibold ">Login</h1>
//         <p className="mt-4 ">
//           Get access to your Orders, Wishlist, and Recommendations
//         </p>
//       </div>

//       <form className="flex flex-col mt-8" onSubmit={handleSubmit}>
//         <input
//           type="tel"
//           placeholder="Phone Number"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//           className="p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-500"
//         />
//         <button
//           type="button"
//           onClick={handleSendOTP}
//           className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md mb-4"
//         >
//           Send OTP
//         </button>
//         <input
//           type="text"
//           placeholder="Verification Code"
//           value={verificationCode}
//           onChange={(e) => setVerificationCode(e.target.value)}
//           className="p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-500"
//         />
//         <button
//           type="button"
//           onClick={handleLogin}
//           className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
//         >
//           Login
//         </button>
//       </form>
//     </div>

//   );
// };

// export default Login 








///////////////////



import React, { useRef, useState } from "react";
// import Firebase modules if needed

const Login: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState<boolean | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loadingOTP, setLoadingOTP] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);

  const otpInputRef = useRef<HTMLInputElement>(null);

  const handleSendOTP = async () => {
    setError("");
    setSuccess("");

    const phoneRegex = /^\+?[1-9]\d{9,14}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setError("Enter a valid phone number with country code (e.g., +919999999999)");
      return;
    }

    try {
      setLoadingOTP(true);

      // Firebase logic goes here (simulated below)
      setTimeout(() => {
        setConfirmationResult(true); // Simulate successful response
        setSuccess("✅ OTP sent successfully.");
        setLoadingOTP(false);
        otpInputRef.current?.focus(); // Focus OTP input
      }, 1000);
    } catch (err) {
      setError("❌ Failed to send OTP. Try again.");
      setLoadingOTP(false);
    }
  };

  const handleLogin = async () => {
    setError("");
    setSuccess("");

    if (!verificationCode || verificationCode.length < 4) {
      setError("Enter a valid 4–6 digit OTP.");
      return;
    }

    try {
      setLoadingLogin(true);

      // Firebase OTP verification logic (simulated here)
      setTimeout(() => {
        setSuccess("🎉 Login successful!");
        setLoadingLogin(false);
      }, 1000);
    } catch (err) {
      setError("❌ Invalid OTP. Please try again.");
      setLoadingLogin(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 px-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Login</h1>
        <p className="mt-2 text-gray-600 text-sm">
          Access your Orders, Wishlist, and Recommendations
        </p>
      </div>

      {/* Message Area */}
      {(error || success) && (
        <div
          className={`transition-all duration-300 mb-4 px-4 py-3 rounded-md text-sm font-medium ${
            error
              ? "bg-red-100 text-red-800 border border-red-300"
              : "bg-green-100 text-green-800 border border-green-300"
          }`}
        >
          {error || success}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={phoneNumber}
            placeholder="+91xxxxxxxxxx"
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="button"
          onClick={handleSendOTP}
          disabled={loadingOTP}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-md disabled:opacity-60"
        >
          {loadingOTP ? "Sending OTP..." : "Send OTP"}
        </button>

        <div>
          <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
            Verification Code
          </label>
          <input
            id="otp"
            ref={otpInputRef}
            type="text"
            maxLength={6}
            value={verificationCode}
            placeholder="Enter OTP"
            onChange={(e) => setVerificationCode(e.target.value)}
            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="button"
          onClick={handleLogin}
          disabled={!confirmationResult || loadingLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md disabled:opacity-60"
        >
          {loadingLogin ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* reCAPTCHA container (for Firebase) */}
      <div id="recaptcha-container" className="mt-4"></div>
    </div>
  );
};

export default Login;

