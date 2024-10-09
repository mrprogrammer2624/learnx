import { useState } from "react";
import { useTitle } from "@/App";
import { Table, Button, Modal, Form, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export const ManageUsers = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Manage Users");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([
    { key: 1, name: "John Doe", role: "Admin", email: "john@example.com" },
    { key: 2, name: "Jane Smith", role: "Teacher", email: "jane@example.com" },
    {
      key: 3,
      name: "Emily Johnson",
      role: "Student",
      email: "emily@example.com",
    },
  ]);

  const handleAddUser = () => {
    setCurrentUser(null);
    setIsModalVisible(true);
  };

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setIsModalVisible(true);
  };

  const handleDeleteUser = (key) => {
    setUsers(users.filter((user) => user.key !== key));
  };

  const handleOk = (values) => {
    if (currentUser) {
      // Edit user
      setUsers(
        users.map((user) =>
          user.key === currentUser.key ? { ...user, ...values } : user
        )
      );
    } else {
      // Add new user
      setUsers([...users, { key: Date.now(), ...values }]);
    }
    setIsModalVisible(false);
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Role", dataIndex: "role", key: "role" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div>
          <Button onClick={() => handleEditUser(record)}>Edit</Button>
          <Button danger onClick={() => handleDeleteUser(record.key)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" icon={<PlusOutlined />} onClick={handleAddUser}>
        Add User
      </Button>
      <Table columns={columns} dataSource={users} />

      <Modal
        title={currentUser ? "Edit User" : "Add User"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form layout="vertical" initialValues={currentUser} onFinish={handleOk}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input the name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="role"
            label="Role"
            rules={[{ required: true, message: "Please select a role!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input a valid email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {currentUser ? "Update" : "Add"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
