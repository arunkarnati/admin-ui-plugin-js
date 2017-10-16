import React from 'react';
import { Card, CardBlock, Button, ButtonGroup, ButtonToolbar } from '../../../../src/components';

const UiButtonGroup = () => (
  <Card>
    <CardBlock>
      <ButtonToolbar>
        <ButtonGroup className={'mr-3'}>
          <Button outline color="default">1</Button>
          <Button outline color="default">2</Button>
          <Button outline color="default">3</Button>
          <Button outline color="default">4</Button>
        </ButtonGroup>
        <ButtonGroup className={'mr-3'}>
          <Button>5</Button>
          <Button>6</Button>
          <Button>7</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="default">8</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </CardBlock>
  </Card>
);

export default UiButtonGroup;