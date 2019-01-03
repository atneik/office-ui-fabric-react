// @public (undocumented)
class BlurMaterial extends Component<IBlurMaterialProps, BlurMaterialSystem> {
  // (undocumented)
  protected didMount(): void;
  // (undocumented)
  protected willUnmount(): void;
}

// @public (undocumented)
class BlurMaterialSystem extends System {
  constructor(texture: BlurTexture);
  // WARNING: The type "BABYLON.StandardMaterial" needs to be exported by the package (e.g. added to index.ts)
  // (undocumented)
  createBlurMaterial(name: string): BABYLON.StandardMaterial;
  // WARNING: The type "BABYLON.StandardMaterial" needs to be exported by the package (e.g. added to index.ts)
  // (undocumented)
  disposeBlurMaterial(blurMaterial: BABYLON.StandardMaterial): void;
}

// @alpha
class BlurTexture {
  // WARNING: The type "BABYLON.Scene" needs to be exported by the package (e.g. added to index.ts)
  constructor(babylonScene: BABYLON.Scene);
  // WARNING: The type "BABYLON.AbstractMesh" needs to be exported by the package (e.g. added to index.ts)
  add(mesh: BABYLON.AbstractMesh): void;
  // (undocumented)
  dispose(): void;
  // WARNING: The type "BABYLON.AbstractMesh" needs to be exported by the package (e.g. added to index.ts)
  remove(mesh: BABYLON.AbstractMesh): void;
  // WARNING: The type "BABYLON.RenderTargetTexture" needs to be exported by the package (e.g. added to index.ts)
  // (undocumented)
  readonly texture: BABYLON.RenderTargetTexture;
}

// @public
class ContextualMenu extends Entity<IContextMenuProps> {
  // (undocumented)
  protected didMount(): void;
  // (undocumented)
  hide(): void;
  // (undocumented)
  readonly isShowing: boolean;
  // (undocumented)
  protected onPropsUpdated(oldProps: IContextMenuProps): void;
  // (undocumented)
  show(): void;
  // (undocumented)
  updateActions(actions: IMRAction[]): void;
  // (undocumented)
  protected willUnmount(): void;
}

// @public (undocumented)
class FabricSceneEntity extends SceneEntity, implements IFabricSceneEntity {
  // WARNING: The type "BABYLON.AbstractMesh" needs to be exported by the package (e.g. added to index.ts)
  // (undocumented)
  addEnvironmentMeshes(meshes: BABYLON.AbstractMesh[]): void;
  // (undocumented)
  didMount(): void;
  // (undocumented)
  abstract render(): void;
}

// @public (undocumented)
enum FluentTheme {
  // (undocumented)
  Dark = 1,
  // (undocumented)
  Light = 0
}

// @public (undocumented)
interface IActionGroup {
  // (undocumented)
  action: IMRAction;
  // (undocumented)
  button: GUI.Button3D;
}

// @public (undocumented)
interface IBlurMaterialProps {
}

// @public
interface IContextMenuProps {
  // (undocumented)
  description?: string;
}

// @public (undocumented)
interface IImage360 {
  // (undocumented)
  actions?: IMRAction[];
  // (undocumented)
  description?: string;
  // (undocumented)
  menuVisible?: boolean;
  // (undocumented)
  onClick?: (pickInfo: BABYLON.PickingInfo) => void;
  // (undocumented)
  onReady?: () => void;
}

// @public (undocumented)
class Image360 extends Entity<IImage360> {
  constructor(url: string);
  // (undocumented)
  protected didMount(): void;
  // (undocumented)
  protected onPropsUpdated(oldProps: IImage360): void;
}

// @public (undocumented)
interface IMRAction {
  description: string;
  iconName?: string;
  isActionable: boolean;
  onClick: () => void;
}

// @public (undocumented)
interface IPanelProps {
  // (undocumented)
  alpha?: 0.4 | 0.6 | 0.8 | 1;
  // (undocumented)
  depth?: number;
  // (undocumented)
  height: number;
  // (undocumented)
  layerSeparation?: number;
  // (undocumented)
  receiveInput?: boolean;
  // (undocumented)
  theme?: FluentTheme;
  // (undocumented)
  width: number;
}

// @public (undocumented)
interface IVideo360 {
  // (undocumented)
  actions?: IMRAction[];
  // (undocumented)
  description?: string;
  // (undocumented)
  menuVisible?: boolean;
  // (undocumented)
  mode?: Video360Mode;
  // (undocumented)
  onClick?: (pickInfo: BABYLON.PickingInfo) => void;
  // (undocumented)
  onReady?: () => void;
}

// @public (undocumented)
class Panel extends Entity<IPanelProps> {
  // (undocumented)
  protected didMount(): void;
}

// WARNING: The type "ISceneProps" needs to be exported by the package (e.g. added to index.ts)
// @public (undocumented)
class Scene extends React.Component<ISceneProps & React.HTMLAttributes<HTMLCanvasElement>, {}> {
  // (undocumented)
  componentDidMount(): void;
  // (undocumented)
  componentWillUnmount(): void;
  // (undocumented)
  render(): JSX.Element;
}

// @public (undocumented)
class Video360 extends Entity<IVideo360> {
  constructor(url: string);
  // (undocumented)
  protected didMount(): void;
  // (undocumented)
  protected onPropsUpdated(oldProps: IVideo360): void;
}

// @public (undocumented)
enum Video360Mode {
  // (undocumented)
  Loading = 0,
  // (undocumented)
  Pause = 2,
  // (undocumented)
  Play = 1
}

// (No @packagedocumentation comment for this package)
