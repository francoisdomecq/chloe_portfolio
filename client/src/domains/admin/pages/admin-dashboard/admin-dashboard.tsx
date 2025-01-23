import {useNavigate} from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div onClick={() => navigate("various-management")}>Edit various</div>
      <div onClick={() => navigate("projects-management")}>Edit projects</div>
    </div>
  )
}

export default AdminDashboard