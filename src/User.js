import React, { Component } from 'react';

export default class User extends Component {
  static contextType = IglooContext;

  fetchUser = async () => {
    let user = { id: await this.context.query.user.id };

    if (this.props.fields.includes('name')) {
      user = {
        ...user,
        name: await this.context.query.user.name
      };
    }

    return user;
  };

  render() {
    if (this.props.skip) {
      return <children />;
    } else {
      let user = null;

      this.fetchUser().then((_user) => (user = _user));

      return <children user={user} loading={!user} />;
    }
  }
}
