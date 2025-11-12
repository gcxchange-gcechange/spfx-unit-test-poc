import { render, screen, fireEvent } from '@testing-library/react';
import UnitTestPoc from './UnitTestPoc';
import * as React from 'react';

const version = React.version;
const userDisplayName = 'Tester';

// Test simple render
describe('UnitTestPoc', () => {
  it('renders the component correctly', () => {
    render(
      <UnitTestPoc description='Testing' isDarkTheme={false} environmentMessage='' hasTeamsContext={false} userDisplayName={userDisplayName} />
    );
    expect(screen.getByText(`Well done, ${userDisplayName}!`)).toBeInTheDocument();
    console.log('React v', version);
  });
});

// Simulate user interaction
test('increments count when button clicked', () => {
  render(
    <UnitTestPoc description='Testing' isDarkTheme={false} environmentMessage='' hasTeamsContext={false} userDisplayName={userDisplayName} />
  );
  fireEvent.click(screen.getByText('Increment'));
  expect(screen.getByText(/Count: 1/)).toBeInTheDocument();
});