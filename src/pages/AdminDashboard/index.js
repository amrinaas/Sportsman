import React, { useEffect } from "react";
// import Navbar from "../../components/Navbar1";
import { Row, Col } from "reactstrap";
import Sidebar from "../../components/Sidebar";

const AdminDashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <>
      <Row>
        <Col md="3">
          <Sidebar />
        </Col>
        <div class="jumbotron-dashboard-admin">
          <h1>WELCOME ADMIN</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            error vitae provident amet excepturi nostrum? Nisi explicabo,
            fugiat, id quo repudiandae et tempore ipsam soluta illo eius quis
            accusantium. Exercitationem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            minima quisquam maiores error nisi reprehenderit placeat.
            Perspiciatis minima odio corporis reprehenderit vitae adipisci
            mollitia? Debitis deleniti iste dolore iusto quo sint itaque
            possimus omnis recusandae doloremque! Quaerat maiores omnis ullam.
          </p>
        </div>
      </Row>
    </>
  );
};
export default AdminDashboard;
