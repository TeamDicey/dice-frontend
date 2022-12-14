import type { Socket } from "socket.io-client";

import LobbyForm from "LobbyForm";
import React, { ReactElement } from "react";
import { css, StyleSheet } from "aphrodite";
import logo from "./static/logo.png";

type Props = Readonly<{
  socket: Socket;
}>;

function Lobby({ socket }: Props): ReactElement {
  return (
    <div>
      <div className={css(styles.top)}>
        <img className={css(styles.logo)} src={logo} alt="logo" />
      </div>
      <div className={css(styles.words)}>
        <h1 className={css(styles.dicey)}>DICEY</h1>
        <h2 className={css(styles.iRoll)}>This is how I roll</h2>
      </div>
      <div className={css(styles.main)}>
        <LobbyForm socket={socket} />
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1D1E33",
  },
  words: {
    textAlign: "center",
  },
  top: {
    textAlign: "center",
  },
  logo: {
    marginTop: "50px",
    height: "60px",
    width: "60px",
  },
  dicey: {
    fontWeight: "bold",
    fontSize: "40px",
    color: "#FFFFFF",
    letterSpacing: "2px",
    marginBottom: 0,
  },
  iRoll: {
    fontWeight: 500,
    fontSize: "16px",
    letterSpacing: "1px",
    color: "#BA9CFC",
    marginTop: 0,
  },
});

export default Lobby;
