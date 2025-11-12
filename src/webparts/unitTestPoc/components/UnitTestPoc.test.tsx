import { render, screen } from '@testing-library/react';
import UnitTestPoc from './UnitTestPoc';
import * as React from 'react';

const version = React.version;
const userDisplayName = 'Tester';

describe('UnitTestPoc', () => {
  it('renders the component correctly', () => {
    render(
      <UnitTestPoc description='Testing' isDarkTheme={false} environmentMessage='' hasTeamsContext={false} userDisplayName={userDisplayName} />
    );
    expect(screen.getByText(`Well done, ${userDisplayName}!`)).toBeInTheDocument();
    console.log(version);
  });
});