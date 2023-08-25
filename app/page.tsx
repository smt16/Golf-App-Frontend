import checkIfUserLoggedIn from '@/src/services/auth.helper';

export default function App() {
  const isUserLoggedIn = checkIfUserLoggedIn();

  return <h1>Hello, Next.js!</h1>
}
