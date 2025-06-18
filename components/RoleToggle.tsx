'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export function RoleToggle({ onRoleChange }: { onRoleChange: (role: string) => void }) {
  const [role, setRole] = useState('student')

  const handleToggle = (selectedRole: string) => {
    setRole(selectedRole)
    onRoleChange(selectedRole)
  }

  return (
    <div className="flex justify-center mb-6">
      <div className="relative flex bg-profile rounded-full p-1 w-72">
        {/* Sliding Background */}
        <motion.div
          className="absolute top-1 bottom-1 rounded-full bg-button-rsvp"
          layout
          initial={false}
          animate={{
            left: role === 'student' ? '4px' : 'calc(50% + 4px)',
            width: 'calc(50% - 8px)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
        {/* Student Button */}
        <button
          onClick={() => handleToggle('student')}
          className={`relative flex-1 px-6 py-2 rounded-full transition-colors duration-300 z-10 ${
            role === 'student' ? 'text-white' : 'text-primary'
          }`}
        >
          Student
        </button>
        {/* Admin Button */}
        <button
          onClick={() => handleToggle('admin')}
          className={`relative flex-1 px-6 py-2 rounded-full transition-colors duration-300 z-10 ${
            role === 'admin' ? 'text-white' : 'text-primary'
          }`}
        >
          Admin
        </button>
      </div>
    </div>
  )
}