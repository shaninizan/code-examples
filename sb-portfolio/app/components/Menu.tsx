import Link from 'next/link';

export default function Menu() {
  const classes = 'link pr-5';

  return (
    // <div className="w-1/3 flex">
    <div className="flex">
      <Link href="/" className={classes}>
        About &nbsp;.
      </Link>
      <Link href="/examples" className={classes}>
        Examples &nbsp;.
      </Link>
      {/* <Link href="/contact" className={classes}>
        Contact &nbsp;.
      </Link> */}
    </div>
  );
}
