import {View} from 'react-native';
import React from 'react';
interface IItemSeparatorComponent {
  height?: number;
  width?: number;
}

const ItemSeparatorComponent: React.FC<IItemSeparatorComponent> = ({
  height,
  width,
}) => {
  return <View style={{width, height}} />;
};

export default ItemSeparatorComponent;
