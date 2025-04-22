import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const CommunicationForm: React.FC = () => {
  const { t } = useTranslation();

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: false }));
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
      try {
        const response = await fetch("https://formspree.io/f/mzzeegka", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
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
          setSubmitError(t("formSubmitError"));
        }
      } catch {
        setSubmitError(t("formUnknownError"));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="bg-gray-50 py-16 px-8 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#002566] mb-8 text-center">
          {t("contactTitle")}
        </h2>
        {submitSuccess ? (
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              {t("thankYou")}
            </h3>
            <p>{t("formSuccessMessage")}</p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              {t("sendNewMessage")}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1">{t("fullName")}</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  formErrors.fullName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {formErrors.fullName && (
                <p className="text-red-500 text-sm">{t("fullNameError")}</p>
              )}
            </div>
            <div>
              <label className="block mb-1">{t("email")}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  formErrors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm">{t("emailError")}</p>
              )}
            </div>
            <div>
              <label className="block mb-1">{t("phone")}</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300"
              />
            </div>
            <div>
              <label className="block mb-1">{t("company")}</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300"
              />
            </div>
            <div>
              <label className="block mb-1">{t("message")}</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  formErrors.message ? "border-red-500" : "border-gray-300"
                }`}
              ></textarea>
              {formErrors.message && (
                <p className="text-red-500 text-sm">{t("messageError")}</p>
              )}
            </div>
            {submitError && (
              <p className="text-red-500 text-center">{submitError}</p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#155CFF] text-white p-3 rounded mt-4"
            >
              {isSubmitting ? t("sending") : t("send")}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CommunicationForm;
