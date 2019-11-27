import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    OptionPickerInput,
    StructuredDateInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_FLOAT,
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    localityGroupList: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      localityGroup: {
        [config]: {
          messages: defineMessages({
            fullName: {
              id: 'field.ext.locality.localityGroup.fullName',
              defaultMessage: 'Locality',
            },
          }),
          repeating: true,
          view: {
            type: CompoundInput,
          },
        },
        fieldLocVerbatim: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.fieldLocVerbatim.name',
                defaultMessage: 'Field collection location verbatim',
              },
            }),
            searchView: {
              type: TextInput,
            },
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        fieldLocPlace: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.fieldLocPlace.name',
                defaultMessage: 'Field collection place',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'place/local',
              },
            },
          },
        },
        taxonomicRange: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.taxonomicRange.name',
                defaultMessage: 'Geographic range of taxon',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        fieldLocCounty: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.fieldLocCounty.name',
                defaultMessage: 'County',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                // Suppress Chrome autofill
                autoComplete: 'cspace-county',
                source: 'counties',
              },
            },
          },
        },
        fieldLocState: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.fieldLocState.name',
                defaultMessage: 'State',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                // Suppress Chrome autofill
                autoComplete: 'cspace-state',
                source: 'states',
              },
            },
          },
        },
        fieldLocCountry: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.fieldLocCountry.name',
                defaultMessage: 'Country',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                // Suppress Chrome autofill
                autoComplete: 'cspace-country',
                source: 'countries',
              },
            },
          },
        },
        fieldLocHigherGeography: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.fieldLocHigherGeography.name',
                defaultMessage: 'Higher geography',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'higherGeographies',
              },
            },
          },
        },
        vLatitude: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.vLatitude.name',
                defaultMessage: 'Verbatim latitude',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        vLongitude: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.vLongitude.name',
                defaultMessage: 'Verbatim longitude',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        vCoordinates: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.vCoordinates.name',
                defaultMessage: 'TRS',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        vOtherCoords: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.vOtherCoords.name',
                defaultMessage: 'Other coords',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        vCoordSys: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.vCoordSys.name',
                defaultMessage: 'Other coords system',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'vcoordsys',
              },
            },
          },
        },
        decimalLatitude: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.decimalLatitude.name',
                defaultMessage: 'Decimal latitude',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        decimalLongitude: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.decimalLongitude.name',
                defaultMessage: 'Decimal longitude',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        geodeticDatum: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.geodeticDatum.name',
                defaultMessage: 'Datum',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'geodeticDatums',
              },
            },
          },
        },
        coordUncertainty: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              fullName: {
                id: 'field.ext.locality.coordUncertainty.fullName',
                defaultMessage: 'Coord uncertainty',
              },
              name: {
                id: 'field.ext.locality.coordUncertainty.name',
                defaultMessage: 'Uncertainty',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        coordUncertaintyUnit: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.ext.locality.coordUncertaintyUnit.fullName',
                defaultMessage: 'Coord uncertainty unit',
              },
              name: {
                id: 'field.ext.locality.coordUncertaintyUnit.name',
                defaultMessage: 'Uncertainty unit',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'coordUncertaintyUnits',
              },
            },
          },
        },
        vDepth: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.ext.locality.vDepth.fullName',
                defaultMessage: 'Depth verbatim',
              },
              name: {
                id: 'field.ext.locality.vDepth.name',
                defaultMessage: 'Verbatim',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        minDepth: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              fullName: {
                id: 'field.ext.locality.minDepth.fullName',
                defaultMessage: 'Depth min',
              },
              name: {
                id: 'field.ext.locality.minDepth.name',
                defaultMessage: 'Min',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        maxDepth: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              fullName: {
                id: 'field.ext.locality.maxDepth.fullName',
                defaultMessage: 'Depth max',
              },
              name: {
                id: 'field.ext.locality.maxDepth.name',
                defaultMessage: 'Max',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        depthUnit: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.ext.locality.depthUnit.fullName',
                defaultMessage: 'Depth unit',
              },
              name: {
                id: 'field.ext.locality.depthUnit.name',
                defaultMessage: 'Unit',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'depthUnits',
              },
            },
          },
        },
        vElevation: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.ext.locality.vElevation.fullName',
                defaultMessage: 'Elevation verbatim',
              },
              name: {
                id: 'field.ext.locality.vElevation.name',
                defaultMessage: 'Verbatim',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        minElevation: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              fullName: {
                id: 'field.ext.locality.minElevation.fullName',
                defaultMessage: 'Elevation min',
              },
              name: {
                id: 'field.ext.locality.minElevation.name',
                defaultMessage: 'Min',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        maxElevation: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              fullName: {
                id: 'field.ext.locality.maxElevation.fullName',
                defaultMessage: 'Elevation max',
              },
              name: {
                id: 'field.ext.locality.maxElevation.name',
                defaultMessage: 'Max',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        elevationUnit: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.ext.locality.elevationUnit.fullName',
                defaultMessage: 'Elevation unit',
              },
              name: {
                id: 'field.ext.locality.elevationUnit.name',
                defaultMessage: 'Unit',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'elevationUnits',
              },
            },
          },
        },
        vDistanceAboveSurface: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.ext.locality.vDistanceAboveSurface.fullName',
                defaultMessage: 'Distance above surface verbatim',
              },
              name: {
                id: 'field.ext.locality.vDistanceAboveSurface.name',
                defaultMessage: 'Verbatim',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        minDistanceAboveSurface: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              fullName: {
                id: 'field.ext.locality.minDistanceAboveSurface.fullName',
                defaultMessage: 'Distance above surface min',
              },
              name: {
                id: 'field.ext.locality.minDistanceAboveSurface.name',
                defaultMessage: 'Min',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        maxDistanceAboveSurface: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              fullName: {
                id: 'field.ext.locality.maxDistanceAboveSurface.fullName',
                defaultMessage: 'Distance above surface max',
              },
              name: {
                id: 'field.ext.locality.maxDistanceAboveSurface.name',
                defaultMessage: 'Max',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        distanceAboveSurfaceUnit: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.ext.locality.distanceAboveSurfaceUnit.fullName',
                defaultMessage: 'Distance above surface unit',
              },
              name: {
                id: 'field.ext.locality.distanceAboveSurfaceUnit.name',
                defaultMessage: 'Unit',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'distanceAboveSurfaceUnits',
              },
            },
          },
        },
        localityNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.localityNote.name',
                defaultMessage: 'Locality note',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        localitySource: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.ext.locality.localitySource.fullName',
                defaultMessage: 'Locality source',
              },
              name: {
                id: 'field.ext.locality.localitySource.name',
                defaultMessage: 'Source',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        localitySourceDetail: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.ext.locality.localitySourceDetail.fullName',
                defaultMessage: 'Locality source detail',
              },
              name: {
                id: 'field.ext.locality.localitySourceDetail.name',
                defaultMessage: 'Source detail',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        pointRadiusSpatialFit: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.pointRadiusSpatialFit.name',
                defaultMessage: 'Pt. radius sp. fit',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        footprintWKT: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.footprintWKT.name',
                defaultMessage: 'Footprint WKT',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        footprintSRS: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.footprintSRS.name',
                defaultMessage: 'Footprint SRS',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        footprintSpatialFit: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.footprintSpatialFit.name',
                defaultMessage: 'Footprint sp. fit',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        coordPrecision: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.coordPrecision.name',
                defaultMessage: 'Coord precision',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        geoRefencedBy: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.geoRefencedBy.name',
                defaultMessage: 'Georeference by',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        geoRefDateGroup: {
          [config]: {
            dataType: DATA_TYPE_STRUCTURED_DATE,
            messages: defineMessages({
              fullName: {
                id: 'field.ext.locality.geoRefDateGroup.fullName',
                defaultMessage: 'Georeference date',
              },
              name: {
                id: 'field.ext.locality.geoRefDateGroup.name',
                defaultMessage: 'Date',
              },
            }),
            view: {
              type: StructuredDateInput,
            },
          },
          ...extensions.structuredDate.fields,
        },
        geoRefProtocol: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.ext.locality.geoRefProtocol.fullName',
                defaultMessage: 'Georeference protocol',
              },
              name: {
                id: 'field.ext.locality.geoRefProtocol.name',
                defaultMessage: 'Protocol',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'georefProtocols',
              },
            },
          },
        },
        geoRefSource: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.ext.locality.geoRefSource.fullName',
                defaultMessage: 'Georeference source',
              },
              name: {
                id: 'field.ext.locality.geoRefSource.name',
                defaultMessage: 'Source',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        geoRefVerificationStatus: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.ext.locality.geoRefVerificationStatus.fullName',
                defaultMessage: 'Georeference verification',
              },
              name: {
                id: 'field.ext.locality.geoRefVerificationStatus.name',
                defaultMessage: 'Verification',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'georefVerificationStatuses',
              },
            },
          },
        },
        geoRefRemarks: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.ext.locality.geoRefRemarks.fullName',
                defaultMessage: 'Georeference note',
              },
              name: {
                id: 'field.ext.locality.geoRefRemarks.name',
                defaultMessage: 'Note',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        geoRefPlaceName: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.geoRefPlaceName.name',
                defaultMessage: 'Georeference place name',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        collectionLocationVerbatim: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.collectionLocationVerbatim.name',
                defaultMessage: 'Collection location verbatim',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        collectionPlace: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.locality.collectionPlace.name',
                defaultMessage: 'Collection place',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'place/local',
              },
            },
          },
        },
      },
    },
  };
};
