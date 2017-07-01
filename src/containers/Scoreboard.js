import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import * as PlayerActionCreators from '../actions/player';
import AddPlayerForm from '../components/AddPlayerForm';
import { Connect } from 'react-redux';
import Player from '../components/Player';
import Header from '../components/Header';

// Scoreboard Class
class Scoreboard extends Component {

  static PropTypes = {
    players: PropTypes.array.isRequired
  }

  render() {

    const { dispatch, players } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    const PlayerComponents = players.map((player, index) => {

      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
      />
      })

    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
            {PlayerComponents}
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }
}


const mapStateToProps = state => (
  {
    players: state
  }
);


export default connect(mapStateToProps)(Scoreboard);
