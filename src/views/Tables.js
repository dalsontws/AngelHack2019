import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Tables = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle
        sm="4"
        title="Research Overview"
        subtitle="blank"
        className="text-sm-left"
      />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Active Research</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Start Date
                  </th>
                  <th scope="col" className="border-0">
                    End Date
                  </th>
                  <th scope="col" className="border-0">
                    Research
                  </th>
                  <th scope="col" className="border-0">
                    No. of Participants
                  </th>
                  <th scope="col" className="border-0">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>7 July 2019</td>
                  <td>11 August 2019</td>
                  <td>
                    Metabolic Availability of Methionine From Mung Beans in
                    Healthy Young Adult Men
                  </td>
                  <td>35</td>

                  <td>
                    <span className="text-success text-semibold">
                      Recruiting
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>11 June 2019</td>
                  <td>11 August 2019</td>
                  <td>
                    A Study to Investigate the Efficacy of Pain Bloc-R in
                    Healthy Participants With Non-pathological Aches and
                    Discomfort
                  </td>
                  <td>40</td>
                  <td>
                    <span className="text-success text-semibold">
                      Recruiting
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>2 January 2019</td>
                  <td>1 December 2019</td>
                  <td>Living Green and Healthy for Teens</td>
                  <td>60</td>
                  <td>
                    <span className="text-success text-semibold">
                      Recruiting
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>4 June 2019</td>
                  <td>9 September 2019</td>
                  <td>
                    Safety Evaluation of β-arbutin in Healthy Human Subjects
                  </td>
                  <td>55</td>
                  <td>
                    <span className="text-danger text-semibold">
                      Under Review
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

    {/* Default Dark Table */}
    <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardHeader className="bg-dark">
            <h6 className="m-0 text-white">Expired Research</h6>
          </CardHeader>
          <CardBody className="bg-dark p-0 pb-3">
            <table className="table table-dark mb-0">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Start Date
                  </th>
                  <th scope="col" className="border-0">
                    End Date
                  </th>
                  <th scope="col" className="border-0">
                    Research
                  </th>
                  <th scope="col" className="border-0">
                    No. of Participants
                  </th>
                  <th scope="col" className="border-0">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>11 June 2018</td>
                  <td>11 August 2018</td>
                  <td>
                    Intranasal Insulin and Olanzapine Study in Healthy
                    Volunteers
                  </td>
                  <td>100</td>
                  <td>
                    <span className="text-success text-semibold">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>11 June 2018</td>
                  <td>11 August 2018</td>
                  <td>Family Healthy Living Early Intervention Program</td>
                  <td>100</td>
                  <td>
                    <span className="text-danger text-semibold">
                      Incomplete
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>11 June 2018</td>
                  <td>11 August 2018</td>
                  <td>Children and Teens in Charge of Their Health</td>
                  <td>100</td>
                  <td>
                    <span className="text-success text-semibold">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>11 June 2018</td>
                  <td>11 August 2018</td>
                  <td>
                    Dental Plaque Removal Ability of Prototype Power Toothbrush
                    Versus a Manual Toothbrush in Healthy Participants
                  </td>
                  <td>65</td>
                  <td>
                    <span className="text-success text-semibold">
                      Completed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Tables;
