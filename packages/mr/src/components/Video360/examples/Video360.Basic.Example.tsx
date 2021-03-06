import * as React from 'react';
import { Scene, FabricSceneEntity, Video360, Video360Mode } from '@uifabric/mr';

class MySceneEntity extends FabricSceneEntity {
  /**
   * The main entry point for the 3D example.
   */
  public render(): void {
    // Lights and camera
    const light = new BABYLON.DirectionalLight('light', new BABYLON.Vector3(0, -0.5, 1.0), this.context.scene);
    light.position = new BABYLON.Vector3(0, 5, -2);
    const camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 1, 0), this.context.scene);
    camera.attachControl(this.canvas, false);

    // 360 Video player
    const video = new Video360('https://yoda.blob.core.windows.net/videos/uptale360.mp4');
    this.mountChild(video);
    video.updateProps({
      description: 'Loading...',
      menuVisible: true,
      onClick: () => video.updateProps({ mode: Video360Mode.Play }),
      onReady: () => video.updateProps({ menuVisible: false })
    });
  }
}

export const Video360BasicExample = () => <Scene sceneEntity={new MySceneEntity()} />;
