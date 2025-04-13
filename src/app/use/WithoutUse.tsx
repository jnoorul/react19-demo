'use client'

import { useEffect, useState } from 'react'

export default function UserProfile() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.json())
      .then((data) => {
        setUser(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">User Profile</h2>
      <p className="text-gray-600">Name: {user.name}</p>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-gray-600">City: {user.address.city}</p>
    </div>
  )
}
