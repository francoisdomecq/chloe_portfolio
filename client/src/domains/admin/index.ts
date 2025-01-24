import i18next from "../../config/i18n";

import i18nCore from "./i18n/en.json";
import AdminDashboard from "./pages/admin-dashboard/admin-dashboard";
import AdminLogin from "./pages/admin-login/admin-login";
import ProjectsManagement from "./pages/projects-management/projects-management";
import VariousManagement from "./pages/various-management/various-management";

i18next.addResourceBundle("en", "admin", i18nCore);

export {
  AdminLogin,
  AdminDashboard,
  VariousManagement,
  ProjectsManagement
};
