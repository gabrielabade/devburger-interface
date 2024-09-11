import styled from 'styled-components';

import Background from '../../assets/background.svg';

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
  }
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${Background}');
  padding-left: 40px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #61a120;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin: 70px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #61a120;
    left: calc(50% - 28px);
  }
`;

export const ContainerItems = styled.div`
  background: url('${(props) => props.imageUrl}');
  background-position: center;
  background-size: cover;
  border-radius: 20px;

  display: flex;
  align-items: center;

  padding: 20px 10px;
  width: 100%;
  height: 200px;

  p {
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 30px;
    font-size: 22.5px;
    font-weight: bold;
    border-radius: 20px;
  }
`;
