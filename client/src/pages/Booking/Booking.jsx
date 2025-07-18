import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@emotion/react';

import DoctorSelection from '../../components/booking/DoctorSelection';
import ConsultationType from '../../components/booking/ConsultationType';
import AppointmentCalendar from '../../components/booking/AppointmentCalendar';
import ConfirmBooking from '../../components/booking/ConfirmBooking';
import PaymentGateway from '../../components/booking/PaymentGateway';
import theme from '../../theme/Theme';
import GlobalStyles from '../../theme/GlobalStyles';
import GlassCard from '../../components/common/GlassCard';

const OuterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
`;

const Stepper = styled.div`
  display: flex;
  margin-bottom: ${props => props.theme.spacing.xl};
  gap: ${props => props.theme.spacing.md};
`;

const Step = styled.div`
  flex: 1;
  text-align: center;
  padding: ${props => props.theme.spacing.sm};
  background: ${props => props.active ? props.theme.colors.primary : props.theme.colors.lightBlue};
  color: ${props => props.active ? props.theme.colors.accent : props.theme.colors.text};
  border-radius: 4px;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
`;

const user = { name: 'Varsha 🤍' };

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentType, setAppointmentType] = useState('general');
  const [selectedDate, setSelectedDate] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const steps = ['Select Doctor', 'Choose Consultation', 'Pick Date & Time', 'Confirm & Pay'];

  const handlePaymentSuccess = () => setPaymentSuccess(true);

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <OuterContainer>
        <h1>Book an Appointment</h1>

        <Stepper>
          {steps.map((step, index) => (
            <Step key={step} active={currentStep === index + 1}>
              {step}
            </Step>
          ))}
        </Stepper>

        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div key="step1" variants={variants} initial="initial" animate="animate" exit="exit">
              <GlassCard>
                <DoctorSelection onSelectDoctor={setSelectedDoctor} onNext={() => setCurrentStep(2)} />
              </GlassCard>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div key="step2" variants={variants} initial="initial" animate="animate" exit="exit">
              <GlassCard>
                <ConsultationType
                  selectedType={appointmentType}
                  onSelectType={setAppointmentType}
                  onBack={() => setCurrentStep(1)}
                  onNext={() => setCurrentStep(3)}
                />
              </GlassCard>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div key="step3" variants={variants} initial="initial" animate="animate" exit="exit">
              <GlassCard>
                <AppointmentCalendar
                  doctor={selectedDoctor}
                  appointmentType={appointmentType}
                  onSelectDate={setSelectedDate}
                  onBack={() => setCurrentStep(2)}
                  onNext={() => setCurrentStep(4)}
                />
              </GlassCard>
            </motion.div>
          )}

          {currentStep === 4 && !paymentSuccess && (
            <motion.div key="step4" variants={variants} initial="initial" animate="animate" exit="exit">
              <GlassCard>
                <ConfirmBooking
                  doctor={selectedDoctor}
                  appointmentType={appointmentType}
                  selectedDate={selectedDate}
                  onBack={() => setCurrentStep(3)}
                  onConfirm={() => setCurrentStep(5)}
                />
              </GlassCard>
            </motion.div>
          )}

          {currentStep === 5 && !paymentSuccess && (
            <motion.div key="step5" variants={variants} initial="initial" animate="animate" exit="exit">
              <GlassCard>
                <PaymentGateway
                  amount={appointmentType === 'general' ? 100 : appointmentType === 'hormonal' ? 150 : 200}
                  onSuccess={handlePaymentSuccess}
                />
              </GlassCard>
            </motion.div>
          )}

          {paymentSuccess && (
            <motion.div key="success" variants={variants} initial="initial" animate="animate" exit="exit">
              <GlassCard>
                <h2 style={{ color: 'green', textAlign: 'center' }}>
                  🎉 Your Booking is Confirmed, {user?.name}!
                </h2>
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>
      </OuterContainer>
    </ThemeProvider>
  );
};

export default Booking;
