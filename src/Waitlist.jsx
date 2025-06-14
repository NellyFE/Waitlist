import React, { useState } from "react";

export const Waitlist = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(
        "https://apex-waitlist.onrender.com/api/waitlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName.trim(),
            lastName: formData.lastName.trim(),
            email: formData.email.trim().toLowerCase(),
            phone: formData.phone.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to join waitlist");
      }

      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError(error.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <div className="flex flex-col mx-6 md:mx-24 bg-white p-6 md:p-12 rounded-lg border-8 border-[#f1effd] shadow-md shadow-black/10">
        <h2 className="font-bold text-2xl md:text-3xl">
          Join Apex Tech Online Academy Waitlist
        </h2>
        <p>Once we launch, you will get a notification from us</p>

        {submitSuccess ? (
          <div className="mt-6 p-4 bg-green-100 text-green-700 rounded">
            Thank you for joining our waitlist! We'll notify you when we launch.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-between mt-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                <div className="flex flex-col w-full md:w-1/2">
                  <p>First Name</p>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="border-2 border-black/10 rounded p-2 outline-[#f1effd]"
                  />
                </div>

                <div className="flex flex-col w-full md:w-1/2">
                  <p>Last Name</p>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="border-2 border-black/10 rounded p-2 outline-[#f1effd]"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between mt-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                <div className="flex flex-col w-full md:w-1/2">
                  <p>Phone number</p>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="border-2 border-black/10 rounded p-2 outline-[#f1effd]"
                  />
                </div>

                <div className="flex flex-col w-full md:w-1/2">
                  <p>Email Address</p>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-2 border-black/10 rounded p-2 outline-[#f1effd]"
                  />
                </div>
              </div>
            </div>

            {submitError && (
              <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">
                {submitError}
              </div>
            )}

            <div className="flex items-center justify-center mt-12 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex bg-[#4400c7] rounded-lg py-2 px-12 w-full md:w-1/2 items-center justify-center text-center text-white cursor-pointer border-2 border-transparent hover:bg-transparent hover:text-[#4400c7] hover:border-2 hover:border-[#4400c7] transition-all duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Join Waitlist"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
