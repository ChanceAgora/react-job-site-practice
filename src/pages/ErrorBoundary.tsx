import { Link } from 'react';

function ErrorBoundary() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <h1 className='text-5xl bold'>SORRY, PAGE NOT FOUND</h1>
    </div>
  );
}

export default ErrorBoundary;
