import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import api from '../../services/api';
import Background from '../../components/Background';

import { Container, Title, List } from './styles';

const data = [1, 2, 3, 4, 5];
function Dashboard2({ isFocused }) {
  const [appointments, setAppointments] = useState([]);

  async function loadAppointments() {
    const response = await api.get('appointments');
    setAppointments(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);
  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);
    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: response.data.canceled_at,
            }
          : appointment
      )
    );
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos22</Title>
      </Container>
    </Background>
  );
}
Dashboard2.navigationOptions = {
  tabBarLabel: 'Dashboard2',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard2);
