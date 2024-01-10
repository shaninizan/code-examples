import Link from 'next/link';

export default function Menu() {
  const classes = 'link pr-5';

  // return (
  //   <div className="w-1/3 flex">
  //     <Link href="/" className={classes}>
  //       About &nbsp;.
  //     </Link>
  //     <Link href="/experience" className={classes}>
  //       Experience &nbsp;.
  //     </Link>
  //     <Link href="/contact" className={classes}>
  //       Contact &nbsp;.
  //     </Link>
  //   </div>
  // );

  return (
    <div className="flex">
      <span className={classes}>About &nbsp;.</span>
    </div>
  );
}
