import React from 'react';
import { Button } from 'antd';

const linkedAccounts = () => (
  <div className="avatar-box">
    <div className="linked-accounts">
      <h2>Manage Linked Accounts</h2>
      <p>
        Linking your social accounts will allow you to sign in using them and
        can also be used to promote your channel.
      </p>
      <Button type="danger" className="clrRed" >
        Link your google account
      </Button>
      <br />
      <br />

      <Button type="primary" className="clrlight" >
        Link your google account
      </Button>
      <br />
      <br />

      <Button type="danger" className="clrindego" >
        Link your google account
      </Button>
    </div>
  </div>
);

export default linkedAccounts;
