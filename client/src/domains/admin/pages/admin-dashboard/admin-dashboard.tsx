import {useNavigate} from "react-router-dom";
import "./admin-dashboard.scss"

const AdminDashboard = () => {
  const navigate = useNavigate()
  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard__navigate" onClick={() => navigate("various-management")}>Edit various</div>
      <div className="admin-dashboard__navigate" onClick={() => navigate("projects-management")}>Edit projects</div>
    </div>
  )
}

export default AdminDashboard