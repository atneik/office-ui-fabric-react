/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Screener, { Steps } from 'screener-storybook/src/screener';
import { storiesOf } from '@storybook/react';
import { FabricDecorator } from '../utilities';
import { HoverCard } from 'office-ui-fabric-react';

let onRenderCompactCard = (item: any) => {
  return <div>Content</div>;
};

const expandingCardProps = {
  onRenderCompactCard: onRenderCompactCard,
  renderData: 'New York'
};

storiesOf('HoverCard', module)
  .addDecorator(FabricDecorator)
  .addDecorator(story => <Screener steps={new Screener.Steps().snapshot('default', { cropTo: '.testWrapper' }).end()}>{story()}</Screener>)
  .addStory(
    'Root',
    () => (
      <HoverCard
        expandingCardProps={expandingCardProps}
        instantOpenOnClick={true}
        styles={{ host: { fontFamily: 'Segoe UI', fontSize: '14px', color: '#333333' } }}
      >
        Hover over me
      </HoverCard>
    ),
    { rtl: true }
  );
