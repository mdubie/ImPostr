import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import Slider from 'material-ui/Slider';

const PlatformModal = ({
  platform,
  validateForm,
  handleFieldChange,
  onToggleModalClick,
  onSetSettingsClick,
  onLogoutClick,
}) => {
  const { isActive, interests, interval } = platform.settings;

  return (
    <Paper>
      <Dialog
        title={`${platform.platform}'s settings`}
        open={platform.showModal}
      >
        <TextField
          hintText="Enter your interests"
          value={interests}
          onChange={({ target }) => { handleFieldChange(platform.platform, 'interests', target.value); }}
        />
        <Checkbox
          label="Autopost mode"
          checked={isActive}
          onCheck={({ target }) => { handleFieldChange(platform.platform, 'isActive', target.checked); }}
        />
        <Slider
          min={1}
          max={25}
          step={1}
          value={interval}
          onChange={(x, value) => { handleFieldChange(platform.platform, 'interval', value); }}
        />
        <span>{`${interval} posts per week`}</span>
        <RaisedButton
          label="Cancel"
          secondary={true}
          onClick={() => { onToggleModalClick(platform.platform); }}
        />
        <RaisedButton
          label="Save"
          primary={true}
          onClick={() => {
            onSetSettingsClick(platform, platform.settings);
            onToggleModalClick(platform.platform);
          }}
        />
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => { onLogoutClick(platform.platform); }}
        >Logout</button>
      </Dialog>
    </Paper>
  );
};

export default PlatformModal;
