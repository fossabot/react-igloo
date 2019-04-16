import React, { Component } from 'react';
import Igloo, { User, Environments } from 'react-igloo';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: ''
    };
  }

  render() {
    return (
      <Igloo token="">
        <User fields={['name']}>
          {({ loading, error, user }) => {
            if (loading) return 'Loading...';

            if (error) return 'Unexpected error: ' + error.message;

            if (user)
              return (
                <>
                  {'Name: ' + user.name}
                  <Environments limit={10}>
                    {({ loading, error, environments, fetchMore }) => {
                      if (loading) return 'Loading...';

                      if (error) return 'Unexpected error: ' + error.message;

                      if (environments) {
                        return (
                          <>
                            {'Environments:' +
                              environments.map(
                                (environment) => ' ' + environment.name
                              )}
                            <button onClick={fetchMore}>Fetch more</button>
                          </>
                        );
                      }
                    }}
                  </Environments>
                </>
              );
          }}
        </User>
      </Igloo>
    );
  }
}
