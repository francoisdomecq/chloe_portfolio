import {useNavigate} from "react-router-dom";
import "./admin-dashboard.scss"
import {useTranslation} from "react-i18next";

const AdminDashboard = () => {
  const {t} = useTranslation("admin")
  const navigate = useNavigate()

  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard__navigate"
           onClick={() => navigate("various-management")}>{t("dashboard.edit.various")}</div>
      <div className="admin-dashboard__navigate"
           onClick={() => navigate("projects-management")}>{t("dashboard.edit.projects")}</div>
    </div>
  )
}

export default AdminDashboard