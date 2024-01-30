import Link from 'next/link';

export default function Examples() {
  return (
    <>
      <h3>Examples:</h3>
      <ol className="list-decimal pl-4">
        <li>
          <Link href="/examples/todolist">ToDo List</Link> Time limit: 1 hr.
          Create a todo list based on an API that strikes out items when
          they&apos;ve been checked.
        </li>
        <li>
          <Link href="/examples/forecast">Weather Forecast</Link> Write an SPA
          to display the forecast for a city.
        </li>
      </ol>
    </>
  );
}
