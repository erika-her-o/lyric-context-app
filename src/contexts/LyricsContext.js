import React, { createContext, useState, useEffect } from "react";
import { trackLyricsGet, trackGet } from "./../constants";

export const LyricsContext = createContext();

const LyricsContextProvider = () => {



  return (
    <div>
      <p>Hello am Lyrics Context!!!</p>
    </div>
  );
};

export default LyricsContextProvider;