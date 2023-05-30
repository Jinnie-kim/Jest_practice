import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from './store';

test('App should render title and increase button', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // screen.debug(); // 뭐가 잘못됐는지 보고싶을 때
  const title = screen.getByRole('heading');
  expect(title).toBeInTheDocument();

  // const button = screen.getByText('increase'); // string이 정확하게 일치해야한다.
  const button = screen.getByText(/increase/i); // 정규 표현식을 써주는 것이 좋다. 포함된 것을 찾는다.
  expect(button).toBeInTheDocument();
});

test('App should render title with count: 0', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const title = screen.getByRole('heading');
  expect(title.textContent).toBe('count:0');
});

test('App should render title with count: 0 and increase count when increase button clicked', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const title = screen.getByRole('heading');
  expect(title.textContent).toBe('count:0');

  const button = screen.getByText(/increase/i);
  userEvent.click(button);

  expect(title.textContent).toBe('count:1');
});
