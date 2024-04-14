import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>Let’s start</Header>
    <Paragraph>
      This is main page for your form
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('FormScreen')}>
      FillForm
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate('RetrivalScreen')}>
      RetriveForm
    </Button>
    <Button mode="contained" onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button>
  </Background>
);

export default memo(Dashboard);
