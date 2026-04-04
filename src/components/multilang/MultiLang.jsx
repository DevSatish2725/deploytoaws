import { useTranslation } from "react-i18next";

const MultiLang = () => {
  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div>
      <select onChange={handleChange} className="cursor-pointer">
        <option value="hi" className="cursor-pointer">
          Hindi
        </option>
        <option value="en" className="cursor-pointer">
          English
        </option>
        <option value="sp" className="cursor-pointer">
          Spanish
        </option>
      </select>
      <div className="mt-4">
        <p>
          <strong>{t("nameLabel")}:</strong> {t("name")}
        </p>
        <p>
          <strong>{t("ageLabel")}:</strong> {t("age")}
        </p>
        <p>
          <strong>{t("phoneNoLabel")}:</strong> {t("phoneNo")}
        </p>
        <p>
          <strong>{t("addressLabel")}:</strong> {t("address")}
        </p>
        <p>
          <strong>{t("hobbyLabel")}:</strong> {t("hobby")}
        </p>
        <p>
          <strong>{t("colorLabel")}:</strong> {t("color")}
        </p>
      </div>
    </div>
  );
};

export default MultiLang;
