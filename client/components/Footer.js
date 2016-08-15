import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent} from 'material-ui/styles/colors';

const style = {
  backgroundColor:'rgba(210, 196, 196, 0.11)',
  position: 'absolute',
  right: '0',
  bottom: '0',
  left: '0',
}

const iconStyles = {
  marginRight: 24,
};

const Footer = () => {
	return (
		<Toolbar style={style}>
      <ToolbarGroup firstChild={true}>
        <FontIcon href="http://127.0.0.1:3000" className="material-icons" style={iconStyles} color={yellow500}>cloud_upload</FontIcon>
      </ToolbarGroup>
      <ToolbarGroup lastChild={true}>
        <FontIcon className="material-icons" style={iconStyles} color={yellow500}>share</FontIcon>
        <FontIcon className="material-icons" style={iconStyles} color={red500}>group</FontIcon>
        <FontIcon className="material-icons" style={iconStyles} color={blue500}>domain</FontIcon>
      </ToolbarGroup>
		</Toolbar>
	);
};

export default Footer;
