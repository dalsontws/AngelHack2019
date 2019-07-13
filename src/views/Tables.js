import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Tables = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Research Overview" className="text-sm-left" />
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
                  <td>6 Jul 2019</td>
                  <td>30 Jul 2020</td>
                  <td>
                    Voice Recording Project for local Chinese: 400 short
                    sentences
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
                  <td>11 Jun 2019</td>
                  <td>11 Aug 2019</td>
                  <td>Tourism research and audio methods</td>
                  <td>40</td>
                  <td>
                    <span className="text-success text-semibold">
                      Recruiting
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>2 Jan 2019</td>
                  <td>1 Aug 2019</td>
                  <td>
                    Reformed consent: adapting to new media and research
                    participant preferences
                  </td>
                  <td>60</td>
                  <td>
                    <span className="text-success text-semibold">
                      Recruiting
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>4 Jun 2018</td>
                  <td>9 Mar 2020</td>
                  <td>
                    Clipping and Coding Audio Files: A Research Method to Enable
                    Participant Voice
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
                  <td>11 Jun 2017</td>
                  <td>11 Feb 2019</td>
                  <td>
                    Falling on deaf ears: Tourism research and audio methods
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
                  <td>11 Jun 2018</td>
                  <td>11 Jan 2019</td>
                  <td>
                    A Survey of MPEG-1 Audio, Video and Semantic Analysis
                    Techniques
                  </td>
                  <td>100</td>
                  <td>
                    <span className="text-danger text-semibold">
                      Incomplete
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>11 Jun 2018</td>
                  <td>20 Jul 2018</td>
                  <td>
                    Abstract Sounds and Their Applications in Audio and
                    Perception Research
                  </td>
                  <td>100</td>
                  <td>
                    <span className="text-success text-semibold">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>11 Jun 2018</td>
                  <td>11 Aug 2018</td>
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
