import {Breadcrumb, Card, CardBody, Col} from "reactstrap";
import React from "react";
import {withTranslation} from "react-i18next";
import PropTypes from "prop-types";

const UserCompanyDetails = props => {
    return (
        <Col xl="4" key={"_company_" + props.company.id}>
            <Card className="d-flex align-items-center justify-content-center">
                <CardBody>
                    <h4>{props.company.title}</h4>
                    <h5>{props.company.description}</h5>
                    <Breadcrumb>
                        {props.company.userRoleInCompany}
                    </Breadcrumb>
                </CardBody>
            </Card>
        </Col>
    );
}

UserCompanyDetails.propTypes = {
    company: PropTypes.any,
}

export default withTranslation()(UserCompanyDetails);
