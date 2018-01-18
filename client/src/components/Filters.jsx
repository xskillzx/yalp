import React from 'react';
import { Button, Icon } from 'antd';

const ButtonGroup = Button.Group;

class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFilterClick() {

  }

  render() {
    let style = {background: "lightgray", margin: 0};
    return (
      <div style={style}> 
        <ButtonGroup>
          <Button>$</Button>
          <Button>$$</Button>
          <Button>$$$</Button>
          <Button>$$$$</Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default Filters;