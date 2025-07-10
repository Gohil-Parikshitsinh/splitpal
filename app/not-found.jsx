import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[100vh] px-4 tetx-center'>
      <h2 className='text-6xl font-bold gradient-title mb-4'>Not Found</h2>
      <p className='text-2xl font-semibold mb-4'>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}