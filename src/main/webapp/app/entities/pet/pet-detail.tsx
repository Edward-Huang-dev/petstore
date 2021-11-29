import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './pet.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IPetDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const PetDetail = (props: IPetDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { petEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="petDetailsHeading">Pet</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">Id</span>
          </dt>
          <dd>{petEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{petEntity.name}</dd>
          <dt>
            <span id="status">Status</span>
          </dt>
          <dd>{petEntity.status}</dd>
          <dt>Category</dt>
          <dd>{petEntity.category ? petEntity.category.id : ''}</dd>
          <dt>Tags</dt>
          <dd>
            {petEntity.tags
              ? petEntity.tags.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.id}</a>
                    {petEntity.tags && i === petEntity.tags.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/pet" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/pet/${petEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ pet }: IRootState) => ({
  petEntity: pet.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PetDetail);
