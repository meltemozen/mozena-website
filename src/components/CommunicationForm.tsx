import React, { useState, useEffect } from "react";

interface CommunicationFormProps {
  title: string;
}

const CommunicationForm: React.FC<CommunicationFormProps> = ({ title }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: false,
    email: false,
    message: false,
  });

  const [animate, setAnimate] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [shakeButton, setShakeButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const formElement = document.getElementById("contact-form");
      if (formElement) {
        const rect = formElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          setAnimate(true);
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (formData.message.length > 10 && !shakeButton) {
      setShakeButton(true);

      const timer = setTimeout(() => {
        setShakeButton(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [formData.message, shakeButton]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const validateForm = () => {
    const errors = {
      fullName: formData.fullName.trim() === "",
      email: !/^\S+@\S+\.\S+$/.test(formData.email),
      message: formData.message.trim() === "",
    };

    setFormErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError("");

      try {
        const response = await fetch("https://formspree.io/f/mzzeegka", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            message: formData.message,
            _replyto: formData.email,
            _subject: `İletişim Formu: ${formData.fullName}`,
            _cc: "info@mozena.com.tr",
          }),
        });

        if (response.ok) {
          setSubmitSuccess(true);
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            company: "",
            message: "",
          });
        } else {
          const data = await response.json();
          throw new Error(
            data.error ||
              "Form gönderilemedi. Lütfen daha sonra tekrar deneyin."
          );
        }
      } catch (error) {
        setSubmitError(
          error instanceof Error
            ? error.message
            : "Bir hata oluştu. Lütfen tekrar deneyin."
        );
        console.error("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="bg-gray-50 py-16 px-8 md:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002566] mb-4">
            Bize Ulaşın
          </h2>
        </div>

        <div
          id="contact-form"
          className="bg-white rounded-xl shadow-lg p-8 md:p-10"
        >
          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Teşekkürler!
              </h3>
              <p className="text-gray-600 mb-6">
                Mesajınız başarıyla gönderildi. En kısa sürede size geri dönüş
                yapacağız.
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300"
              >
                Yeni Mesaj Gönder
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  className={`transform transition-all duration-1000 ${
                    animate
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-full opacity-0"
                  }`}
                >
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    İsim, Soyisim
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      formErrors.fullName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {formErrors.fullName && (
                    <p className="mt-1 text-sm text-red-500">
                      İsim, soyisim alanı zorunludur
                    </p>
                  )}
                </div>

                <div
                  className={`transform transition-all duration-1000 ${
                    animate
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  }`}
                >
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300"
                  />
                </div>
              </div>

              <div
                className={`transform transition-all duration-1000 ${
                  animate
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0"
                }`}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    formErrors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    Geçerli bir e-posta adresi giriniz
                  </p>
                )}
              </div>

              <div
                className={`transform transition-all duration-1000 delay-300 ${
                  animate
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0"
                }`}
              >
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Şirket İsmi(varsa)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300"
                />
              </div>

              <div
                className={`transform transition-all duration-1000 ${
                  animate
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                }`}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 border ${
                    formErrors.message ? "border-red-500" : "border-gray-300"
                  }`}
                ></textarea>
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    Mesaj alanı zorunludur
                  </p>
                )}
              </div>

              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                  {submitError}
                </div>
              )}

              <div
                className={`flex justify-center mt-8 transform transition-all duration-1000 delay-500 ${
                  animate
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-16 py-3 bg-[#155CFF] text-white font-medium rounded-md ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-[#1240c0]"
                  } ${shakeButton ? "animate-shake" : ""}`}
                >
                  {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

const style = document.createElement("style");
style.innerHTML = `
  @keyframes shake {
    0% { transform: translateX(0); }
    20% { transform: translateX(-5px); }
    40% { transform: translateX(5px); }
    60% { transform: translateX(-3px); }
    80% { transform: translateX(3px); }
    100% { transform: translateX(0); }
  }
  
  .animate-shake {
    animation: shake 0.8s ease-in-out;
  }
`;
document.head.appendChild(style);

export default CommunicationForm;
