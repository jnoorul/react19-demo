'use client'

import { use, Suspense } from 'react'

async function fetchUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
  return res.json()
}

const userPromise = fetchUser()

function UserProfileContent() {
  const user = use(userPromise)

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">User Profile</h2>
      <p className="text-gray-600">Name: {user.name}</p>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-gray-600">City: {user.address.city}</p>
    </div>
  )
}

export default function UserProfile() {
  return (
    <Suspense fallback={<p>Loading user data...</p>}>
      <UserProfileContent />
    </Suspense>
  )
}
