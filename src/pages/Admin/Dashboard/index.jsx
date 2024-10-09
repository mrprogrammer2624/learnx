import { useTitle } from "@/App";
import { Card, Row, Col, Statistic, Button } from "antd";
import {
  UsergroupAddOutlined,
  BookOutlined,
  TeamOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export const Dashboard = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Admin Dashboard");

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Users"
              value={100}
              prefix={<UsergroupAddOutlined />}
            />
            <Button
              type="primary"
              style={{ marginTop: "10px" }}
              onClick={() => {}}
            >
              Manage Users
            </Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Courses"
              value={20}
              prefix={<BookOutlined />}
            />
            <Button
              type="primary"
              style={{ marginTop: "10px" }}
              onClick={() => {
                /* Navigate to Manage Courses */
              }}
            >
              Manage Courses
            </Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Students"
              value={80}
              prefix={<TeamOutlined />}
            />
            <Button
              type="primary"
              style={{ marginTop: "10px" }}
              onClick={() => {
                /* Navigate to Manage Students */
              }}
            >
              Manage Students
            </Button>
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: "20px" }}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Pending Approvals"
              value={5}
              prefix={<SettingOutlined />}
            />
            <Button
              type="primary"
              style={{ marginTop: "10px" }}
              onClick={() => {
                /* Navigate to Approvals */
              }}
            >
              View Approvals
            </Button>
          </Card>
        </Col>
        <Col span={16}>
          <Card title="Recent Activity" style={{ height: "100%" }}>
            {/* Add recent activity log here */}
            <p>User John Doe enrolled in Math 101.</p>
            <p>Course Science 102 has been updated.</p>
            <p>New user Jane Smith added.</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
