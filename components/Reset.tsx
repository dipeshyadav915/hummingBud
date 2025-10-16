'use client';

import Link from 'next/link';

export default function Reset() {
  const reset = () => {
    const form = document.querySelector('.search-bar') as HTMLFormElement;
    if (form) form.reset();
  };
  return (
    <button type="reset" onClick={reset} className="search-btn">
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </Link>
    </button>
  );
}
