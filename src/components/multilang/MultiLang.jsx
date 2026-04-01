import { useTranslation } from "react-i18next";

const user = {
  name: "Mukesh",
  age: 10,
  phoneNo: "8790987654",
  address: "D-49, Harsh Vihar",
  hobby: "cricket",
  color: "blue",
};

const MultiLang = () => {
  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div>
      <select
        onChange={handleChange} className="cursor-pointer">
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
          <strong>{t("name")}:</strong> {t(user.name)}
        </p>
        <p>
          <strong>{t("age")}:</strong> {user.age}
        </p>
        <p>
          <strong>{t("phoneNo")}:</strong> {user.phoneNo}
        </p>
        <p>
          <strong>{t("address")}:</strong> {user.address}
        </p>
        <p>
          <strong>{t("hobby")}:</strong> {t(user.hobby)}
        </p>
        <p>
          <strong>{t("color")}:</strong> {t(user.color)}
        </p>
      </div>
    </div>
  );
};

export default MultiLang;
