import Link from 'next/link';

export default function AppBar() {
  return (
    <div>
      <h1>AppBar</h1>
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
    </div>
  );
}
