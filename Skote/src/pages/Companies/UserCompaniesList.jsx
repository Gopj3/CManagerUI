import {Breadcrumb, Button, Card, CardBody, Col, Container, Row} from "reactstrap";
import {withTranslation} from "react-i18next";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserCompaniesList as onGetCompaniesList} from "../../store/companies-list/actions";
import {map} from "lodash";
import UserCompanyDetails from "./UserCompanyDetails";

const UserCompaniesList = props => {
    const dispatch = useDispatch();

    const { companies } = useSelector(state => ({
        companies: state.UserCompanies.companies
    }));

    useEffect(() => {
        dispatch(onGetCompaniesList());
    }, []);

    let openCreateForm = () => props.history.push('/create-company');

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Button className="btn-primary mb-5" onClick={openCreateForm}>Create company</Button>
                    <Row>
                        {companies.length > 0
                            ? map(companies, (company, key) => (
                                <UserCompanyDetails company={company} key={"_company_" + key}/>
                            ))
                            :
                            <Col xl="12">
                                <Card>
                                    <CardBody className="d-flex align-items-center justify-content-center">
                                        <h1>You have no companies yet. Please create one :*)</h1>
                                    </CardBody>
                                </Card>
                            </Col>
                        }
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default withTranslation()(UserCompaniesList);
