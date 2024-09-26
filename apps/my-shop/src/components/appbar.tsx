import Link from 'next/link';

export default function AppBar() {
  return (
    <ul>
      <li>
        <Link href="/home"> Home </Link>
      </li>
      <li>
        <Link href="/about"> About </Link>
      </li>
    </ul>
  );
}
