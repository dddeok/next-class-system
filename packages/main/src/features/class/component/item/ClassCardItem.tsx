import React from 'react';
import styled from 'styled-components';

interface ThumbanilProps {
  imageURL: string;
}
const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 230px;
  padding: 0 10px;

  .class-card-item-title {
    font-size: 14px;
    letter-spacing: -0.15px;
    padding: 8px 0ex;
  }
`;

const Thumbnail = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 170px;
  border-radius: 11px;
  background-image: ${(props: ThumbanilProps) => `url(${props.imageURL})`};
  background-size: cover;
`;

interface Props {
  imageURL: string;
  title: string;
  price: number;
}
const ClassCardItem = ({ imageURL, title, price }: Props) => {
  return (
    <Container>
      <Thumbnail imageURL={imageURL} />
      <span className="class-card-item-title">{title}</span>
    </Container>
  );
};

export default ClassCardItem;
