import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

const ViewImage = styled.View`
  margin-bottom: 30px;
  align-items: center;
  margin-top: 15px;
`;

const TouchableImage = styled(TouchableOpacity)`
  width: 150px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

const ImageDuck = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 100px;
`;
const CenterImage = ({ source }) => {
  return (
    <ViewImage>
      <TouchableImage>
        <ImageDuck source={source} />
      </TouchableImage>
    </ViewImage>
  );
};
export default CenterImage;
