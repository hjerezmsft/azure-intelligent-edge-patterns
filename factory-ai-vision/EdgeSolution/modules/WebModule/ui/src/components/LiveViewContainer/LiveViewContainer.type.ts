import { Dispatch, SetStateAction } from 'react';

export type Box = { x1: number; y1: number; x2: number; y2: number };

export type LiveViewProps = {
  AOIs: Box[];
  setAOIs: Dispatch<SetStateAction<Box[]>>;
  visible: boolean;
};

export type AOILayerProps = {
  imgWidth: number;
  imgHeight: number;
  AOIs: Box[];
  setAOIs: Dispatch<SetStateAction<Box[]>>;
  visible: boolean;
};

export type MaskProps = {
  width: number;
  height: number;
  holes: Box[];
  visible: boolean;
};

export type AOIBoxProps = {
  box: Box;
  onBoxChange: (updateBox: (prevBox: Box) => Box) => void;
  boundary: Box;
  visible: boolean;
};
