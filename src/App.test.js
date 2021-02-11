import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  /*const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();*/
  let outerContainer = document.body.childNodes;
  expect(outerContainer.length).toBe(1);
  console.log(outerContainer[0]);
  expect(outerContainer[0].id).toBe("drum-machine");

});
