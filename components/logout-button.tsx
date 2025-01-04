"use client"

import { signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export function LogoutButton() {
  const { data: session } = useSession()

  if (!session) {
    return null
  }

  return (
    <Button
      onClick={() => signOut()}
      className="z-100 fixed bottom-4 right-4 flex items-center space-x-2 bg-red-600 text-white hover:bg-red-700"
    >
      <LogOut className="h-5 w-5" />
      <span>Logout</span>
    </Button>
  )
}