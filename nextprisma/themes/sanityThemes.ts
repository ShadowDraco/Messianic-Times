import { buildLegacyTheme } from 'sanity';

const props = {
  '--black': '#323',
  '--white': '#eee',
  '--brand': '#22aaff',
  '--red': '#ffaaaa',
  '--yellow': '#fffaaa',
  '--green': '#aaff88',
};
export const myTheme = buildLegacyTheme({
  '--black': props['--black'],
  '--white': props['--white'],

  '--gray': '#777',
  '--gray-base': '#555',

  '--component-bg': props['--white'],
  '--component-text-color': props['--black'],

  '--brand-primary': props['--brand'],
  '--default-button-color': '#333',
  '--default-button-primary-color': props['--brand'],
  '--default-button-success-color': props['--green'],
  '--default-button-danger-color': props['--red'],
  '--default-button-warning-color': props['--yellow'],

  '--state-info-color': props['--brand'],
  '--state-success-color': props['--green'],
  '--state-warning-color': props['--yellow'],
  '--state-danger-color': props['--red'],

  '--main-navigation-color': props['--white'],
  '--main-navigation-color--inverted': props['--black'],

  '--focus-color': props['--brand'],
});
