import React, { useEffect } from "react";
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
            Start training with a personal plan that guides you—while adjusting
            to your progress, schedule and other activities. With Sportsman, you
            get access to four 4–6 week training plans. Whether you have access
            to a full gym or are training from the comfort of your home, there's
            a routine that fits you and your schedule so that you can reach your
            goals.
          </p>
          <p>
            Energise your routine with our growing library of workouts led by
            our world-class Sportsman Master Trainers. With Sportsman, you get
            access to over 190 free workouts across strength, endurance, yoga
            and mobility targeting your abs, arms, shoulders, glutes and legs.
            Sessions range from 15–45 minutes and are designed to help you see
            and feel results.
          </p>
        </div>
      </Row>
    </>
  );
};
export default AdminDashboard;
