import editorsNames from '../../common/constants/editors-names';
import transformationsModes from '../../../common/constants/transformations-modes';

const state = {
  geometryToScene: null,
  isVisibleMeshesList: true,
  isVisibleControlsPanel: true,
  isOpenCreateNewMaterialForm: false,
  transformationMode: transformationsModes.TRANSLATE,
  currentVisibleEditor: editorsNames.MATERIAL_EDITOR,
  currentEditableMesh: {
    _id: 'asdfsdfsdfsfsdf',
    geometries: [],
    materials: [],
    objects: []
  }
};

export default state;
