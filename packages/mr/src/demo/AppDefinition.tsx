// tslint:disable:no-any
import * as React from 'react';
import { App as AppBase, IAppDefinition, IAppProps } from '@uifabric/example-app-base';

export const AppDefinition: IAppDefinition = {
  appTitle: 'Fabric - Mixed Reality',

  testPages: [],
  examplePages: [
    {
      links: [
        {
          component: require<any>('../components/ContextualMenu/ContextualMenuPage').ContextualMenuPage,
          key: 'ContextualMenu',
          name: 'ContextualMenu',
          url: '#/examples/contextualmenu'
        },
        {
          component: require<any>('../components/Image360/Image360Page').Image360Page,
          key: 'Image360',
          name: 'Image360',
          url: '#/examples/image360'
        },
        {
          component: require<any>('../components/Panel/PanelPage').PanelPage,
          key: 'Panel',
          name: 'Panel',
          url: '#/examples/panel'
        },
        {
          component: require<any>('../components/Scene/ScenePage').ScenePage,
          key: 'Scene',
          name: 'Scene',
          url: '#/examples/scene'
        },
        {
          component: require<any>('../components/Video360/Video360Page').Video360Page,
          key: 'Video360',
          name: 'Video360',
          url: '#/examples/video360'
        }
      ]
    }
  ],
  headerLinks: [
    {
      name: 'Getting started',
      url: '#/'
    },
    {
      name: 'Fabric',
      url: 'http://dev.office.com/fabric'
    },
    {
      name: 'Github',
      url: 'http://www.github.com/officedev'
    }
  ]
};

export const App = (props: IAppProps) => <AppBase appDefinition={AppDefinition} {...props} />;
