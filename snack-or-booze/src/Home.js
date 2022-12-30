import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ drinkCount, snackCount}) {

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <p>We have {drinkCount} drinks and {snackCount} snacks available</p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
