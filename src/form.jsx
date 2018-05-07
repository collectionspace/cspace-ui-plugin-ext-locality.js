export default (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Row,
    Cols,
    Col,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="localityGroupList">
      <Field name="localityGroup">
        <Panel>
          <Cols>
            <Col>
              <Field name="fieldLocVerbatim" />
            </Col>

            <Col>
              <Field name="fieldLocPlace" />
              <Field name="taxonomicRange" />
            </Col>
          </Cols>

          <Row>
            <Field name="fieldLocCounty" />
            <Field name="fieldLocState" />
            <Field name="fieldLocCountry" />
            <Field name="fieldLocHigherGeography" />
          </Row>

          <Row>
            <Field name="vLatitude" />
            <Field name="vLongitude" />
            <Field name="vCoordinates" />
            <Field name="vOtherCoords" />
            <Field name="vCoordSys" />
          </Row>

          <Row>
            <Field name="decimalLatitude" />
            <Field name="decimalLongitude" />
            <Field name="geodeticDatum" />
            <Field name="coordUncertainty" />
            <Field name="coordUncertaintyUnit" />
          </Row>

          <Cols>
            <Col>
              <InputTable name="depth">
                <Field name="vDepth" />
                <Field name="minDepth" />
                <Field name="maxDepth" />
                <Field name="depthUnit" />
              </InputTable>

              <InputTable name="elevation">
                <Field name="vElevation" />
                <Field name="minElevation" />
                <Field name="maxElevation" />
                <Field name="elevationUnit" />
              </InputTable>

              <InputTable name="distanceAboveSurface">
                <Field name="vDistanceAboveSurface" />
                <Field name="minDistanceAboveSurface" />
                <Field name="maxDistanceAboveSurface" />
                <Field name="distanceAboveSurfaceUnit" />
              </InputTable>
            </Col>

            <Col>
              <Field name="localityNote" />

              <Row>
                <Field name="localitySource" />
                <Field name="localitySourceDetail" />
              </Row>
            </Col>
          </Cols>

          <Panel name="georefDetail" collapsible collapsed>
            <Row>
              <Field name="pointRadiusSpatialFit" />
              <Field name="footprintWKT" />
              <Field name="footprintSRS" />
              <Field name="footprintSpatialFit" />
              <Field name="coordPrecision" />
            </Row>

            <Row>
              <Field name="geoRefencedBy" />
              <Field name="geoRefDateGroup" />
              <Field name="geoRefProtocol" />
              <Field name="geoRefSource" />
              <Field name="geoRefVerificationStatus" />
            </Row>

            <Row>
              <Field name="geoRefRemarks" />
              <Field name="geoRefPlaceName" />
            </Row>
          </Panel>
        </Panel>
      </Field>
    </Field>
  );
};
