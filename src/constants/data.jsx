import { Link } from "react-router-dom";

function getItem(label, key, path) {
  return {
    key,
    label: path ? <Link to={path}>{label}</Link> : label,
  };
}

/* Admin Menu */
export const AdminAsideMenu = [
  getItem("Dashboard", "/admin", "/admin"),
  getItem("Manage Users", "/admin/manage-users", "/admin/manage-users"),
  getItem("View Reports", "/admin/reports", "/admin/reports"),
  getItem(
    "System Settings",
    "/admin/system-settings",
    "/admin/system-settings"
  ),
  getItem("Manage Roles", "/admin/manage-roles", "/admin/manage-roles"),
  getItem("Feedback", "/admin/feedback", "/admin/feedback"),
  getItem("Log Out", "/admin/logout", "/admin/logout"),
];

/* Teacher Menu */
export const TeacherAsideMenu = [
  getItem("Dashboard", "/teacher", "/teacher"),
  getItem("My Classes", "/teacher/my-classes", "/teacher/my-classes"),
  getItem("Attendance", "/teacher/attendance", "/teacher/attendance"),
  getItem("Grades", "/teacher/grades", "/teacher/grades"),
  getItem("Assignments", "/teacher/assignments", "/teacher/assignments"),
  getItem("Settings", "/teacher/settings", "/teacher/settings"),
];

/* Student Menu */
export const StudentAsideMenu = [
  getItem("Dashboard", "/student", "/student"),
  getItem("My Classes", "/student/my-classes", "/student/my-classes"),
  getItem("Assignments", "/student/assignments", "/student/assignments"),
  getItem("Grades", "/student/grades", "/student/grades"),
  getItem("Attendance", "/student/attendance", "/student/attendance"),
  getItem("Settings", "/student/settings", "/student/settings"),
];
