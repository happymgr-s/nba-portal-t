import Link from 'next/link';

// app/_error/page.js
export default function ErrorPage() {
  return (
    <div>
      <h1>Error: エラーや</h1>
      <Link href={'/'}>HOME</Link>
    </div>
  );
}
