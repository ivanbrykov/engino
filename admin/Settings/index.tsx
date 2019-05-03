import * as React from 'react';
import { Link, RouteComponentProps } from '@reach/router';

const Settings = (props: RouteComponentProps): React.ReactElement => (
  <div>
    <h1>SETTING HERE</h1>
    <Link to="..">Back</Link>
  </div>
);

export default Settings;
