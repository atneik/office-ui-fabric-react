import * as React from 'react';
import { Scene, FabricSceneEntity, Panel } from '@uifabric/mr';

class MySceneEntity extends FabricSceneEntity {
  /**
   * The main entry point for the 3D example.
   */
  public render(): void {
    // Lights and camera
    const light = new BABYLON.DirectionalLight('light', new BABYLON.Vector3(0, -0.5, 1.0), this.context.scene);
    light.position = new BABYLON.Vector3(0, 5, -2);
    const camera = new BABYLON.ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2, 3, new BABYLON.Vector3(0, 1, 0), this.context.scene);
    camera.attachControl(this.canvas, false);
    camera.wheelPrecision = 75;

    // Create simple sphere
    const sphere = BABYLON.Mesh.CreateIcoSphere('sphere', { radius: 0.2, flat: true, subdivisions: 1 }, this.context.scene);
    sphere.position = new BABYLON.Vector3(0, 1, 5);
    sphere.scaling.scaleInPlace(5);
    sphere.material = new BABYLON.StandardMaterial('sphere material', this.context.scene);

    // Default Environment
    const environment = this.context.scene.createDefaultEnvironment({ enableGroundShadow: true, groundYBias: 1 });
    environment && environment.setMainColor(BABYLON.Color3.FromHexString('#74b9ff'));
    this.addEnvironmentMeshes(this.context.scene.meshes);

    // Fluent Panels
    const panel1 = new Panel({ height: 1, width: 2, alpha: 0.4 });
    this.mountChild(panel1);
    panel1.node.position = new BABYLON.Vector3(0, 1.6, 0);
    const panel2 = new Panel({ height: 1, width: 2, alpha: 0.8 });
    this.mountChild(panel2);
    panel2.node.position = new BABYLON.Vector3(0, 0.5, 0);
  }
}

export const PanelBasicExample = () => <Scene sceneEntity={new MySceneEntity()} />;
