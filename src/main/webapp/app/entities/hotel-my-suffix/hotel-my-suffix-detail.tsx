import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './hotel-my-suffix.reducer';
import { IHotelMySuffix } from 'app/shared/model/hotel-my-suffix.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IHotelMySuffixDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class HotelMySuffixDetail extends React.Component<IHotelMySuffixDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { hotelEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="vtgApp.hotel.detail.title">Hotel</Translate> [<b>{hotelEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="name">
                <Translate contentKey="vtgApp.hotel.name">Name</Translate>
              </span>
            </dt>
            <dd>{hotelEntity.name}</dd>
            <dt>
              <span id="starRank">
                <Translate contentKey="vtgApp.hotel.starRank">Star Rank</Translate>
              </span>
            </dt>
            <dd>{hotelEntity.starRank}</dd>
            <dt>
              <span id="slogan">
                <Translate contentKey="vtgApp.hotel.slogan">Slogan</Translate>
              </span>
            </dt>
            <dd>{hotelEntity.slogan}</dd>
            <dt>
              <span id="address">
                <Translate contentKey="vtgApp.hotel.address">Address</Translate>
              </span>
            </dt>
            <dd>{hotelEntity.address}</dd>
            <dt>
              <span id="priceFrom">
                <Translate contentKey="vtgApp.hotel.priceFrom">Price From</Translate>
              </span>
            </dt>
            <dd>{hotelEntity.priceFrom}</dd>
            <dt>
              <span id="priceTo">
                <Translate contentKey="vtgApp.hotel.priceTo">Price To</Translate>
              </span>
            </dt>
            <dd>{hotelEntity.priceTo}</dd>
            <dt>
              <span id="rank">
                <Translate contentKey="vtgApp.hotel.rank">Rank</Translate>
              </span>
            </dt>
            <dd>{hotelEntity.rank}</dd>
            <dt>
              <span id="latitude">
                <Translate contentKey="vtgApp.hotel.latitude">Latitude</Translate>
              </span>
            </dt>
            <dd>{hotelEntity.latitude}</dd>
            <dt>
              <span id="longitude">
                <Translate contentKey="vtgApp.hotel.longitude">Longitude</Translate>
              </span>
            </dt>
            <dd>{hotelEntity.longitude}</dd>
            <dt>
              <span id="provinceId">
                <Translate contentKey="vtgApp.hotel.provinceId">Province Id</Translate>
              </span>
            </dt>
            <dd>{hotelEntity.provinceId}</dd>
            <dt>
              <span id="hotelType">
                <Translate contentKey="vtgApp.hotel.hotelType">Hotel Type</Translate>
              </span>
            </dt>
            <dd>{hotelEntity.hotelType}</dd>
            <dt>
              <span id="filePath1">
                <Translate contentKey="vtgApp.hotel.filePath1">File Path 1</Translate>
              </span>
            </dt>
            <dd>{hotelEntity.filePath1}</dd>
            <dt>
              <span id="filePath2">
                <Translate contentKey="vtgApp.hotel.filePath2">File Path 2</Translate>
              </span>
            </dt>
            <dd>{hotelEntity.filePath2}</dd>
            <dt>
              <span id="filePath3">
                <Translate contentKey="vtgApp.hotel.filePath3">File Path 3</Translate>
              </span>
            </dt>
            <dd>{hotelEntity.filePath3}</dd>
            <dt>
              <span id="filePath4">
                <Translate contentKey="vtgApp.hotel.filePath4">File Path 4</Translate>
              </span>
            </dt>
            <dd>{hotelEntity.filePath4}</dd>
            <dt>
              <span id="filePath5">
                <Translate contentKey="vtgApp.hotel.filePath5">File Path 5</Translate>
              </span>
            </dt>
            <dd>{hotelEntity.filePath5}</dd>
            <dt>
              <span id="placeId">
                <Translate contentKey="vtgApp.hotel.placeId">Place Id</Translate>
              </span>
            </dt>
            <dd>{hotelEntity.placeId}</dd>
          </dl>
          <Button tag={Link} to="/entity/hotel-my-suffix" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/hotel-my-suffix/${hotelEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ hotel }: IRootState) => ({
  hotelEntity: hotel.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotelMySuffixDetail);
